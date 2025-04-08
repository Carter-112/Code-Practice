const STORAGE_KEY = 'codelavalab_progress';

/**
 * Load user progress from local storage
 * @returns {Object} User progress object or empty object if none exists
 */
export const loadUserProgress = () => {
  try {
    const storedProgress = localStorage.getItem(STORAGE_KEY);
    return storedProgress ? JSON.parse(storedProgress) : {
      python: {},
      html: {},
      css: {},
      javascript: {},
      java: {}
    };
  } catch (error) {
    console.error('Error loading progress from local storage:', error);
    return {
      python: {},
      html: {},
      css: {},
      javascript: {},
      java: {}
    };
  }
};

/**
 * Save user progress to local storage
 * @param {Object} progress - User progress object
 */
export const saveUserProgress = (progress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress to local storage:', error);
  }
};

/**
 * Get the next lesson for a specific language
 * @param {Object} progress - User progress object
 * @param {string} language - Programming language
 * @returns {number} Next lesson ID
 */
export const getNextLesson = (progress, language) => {
  if (!progress || !progress[language]) {
    return 1;
  }
  
  const completedLessons = Object.entries(progress[language])
    .filter(([_, completed]) => completed)
    .map(([id]) => parseInt(id));
  
  if (completedLessons.length === 0) {
    return 1;
  }
  
  const maxCompleted = Math.max(...completedLessons);
  return maxCompleted + 1 > 73 ? 73 : maxCompleted + 1;
};

/**
 * Get a random language with its next incomplete lesson
 * @param {Object} progress - User progress object
 * @returns {Object} Object containing language and lesson ID
 */
export const getRandomNextLesson = (progress) => {
  const languages = ['python', 'html', 'css', 'javascript', 'java'];
  const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
  const nextLessonId = getNextLesson(progress, randomLanguage);
  
  return {
    language: randomLanguage,
    lessonId: nextLessonId
  };
};

/**
 * Calculate overall progress percentage
 * @param {Object} progress - User progress object
 * @returns {number} Progress percentage (0-100)
 */
export const calculateOverallProgress = (progress) => {
  if (!progress) return 0;
  
  const languages = ['python', 'html', 'css', 'javascript', 'java'];
  const totalLessons = languages.length * 73;
  
  let completedLessons = 0;
  languages.forEach(lang => {
    if (progress[lang]) {
      completedLessons += Object.values(progress[lang]).filter(Boolean).length;
    }
  });
  
  return Math.round((completedLessons / totalLessons) * 100);
};

/**
 * Calculate language-specific progress percentage
 * @param {Object} progress - User progress object
 * @param {string} language - Programming language
 * @returns {number} Progress percentage for the language (0-100)
 */
export const calculateLanguageProgress = (progress, language) => {
  if (!progress || !progress[language]) return 0;
  
  const completedLessons = Object.values(progress[language]).filter(Boolean).length;
  return Math.round((completedLessons / 73) * 100);
};

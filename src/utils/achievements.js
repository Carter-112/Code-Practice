// Achievements system

/**
 * List of all possible achievements
 */
export const achievementsList = [
  // Progress-based achievements
  {
    id: 'first_lesson',
    title: 'First Step',
    description: 'Complete your first lesson',
    icon: '🎯',
    condition: (progress) => getTotalCompletedLessons(progress) >= 1
  },
  {
    id: 'ten_lessons',
    title: 'Getting Started',
    description: 'Complete 10 lessons',
    icon: '🔥',
    condition: (progress) => getTotalCompletedLessons(progress) >= 10
  },
  {
    id: 'fifty_lessons',
    title: 'Dedicated Learner',
    description: 'Complete 50 lessons',
    icon: '⭐',
    condition: (progress) => getTotalCompletedLessons(progress) >= 50
  },
  {
    id: 'hundred_lessons',
    title: 'Code Warrior',
    description: 'Complete 100 lessons',
    icon: '🏆',
    condition: (progress) => getTotalCompletedLessons(progress) >= 100
  },
  {
    id: 'halfway',
    title: 'Halfway There',
    description: 'Complete 182 lessons (halfway to mastery)',
    icon: '🚀',
    condition: (progress) => getTotalCompletedLessons(progress) >= 182
  },
  {
    id: 'all_lessons',
    title: 'Code Master',
    description: 'Complete all 365 lessons',
    icon: '👑',
    condition: (progress) => getTotalCompletedLessons(progress) >= 365
  },
  
  // Language-specific achievements
  {
    id: 'python_beginner',
    title: 'Python Beginner',
    description: 'Complete 10 Python lessons',
    icon: '🐍',
    condition: (progress) => getLanguageCompletedLessons(progress, 'python') >= 10
  },
  {
    id: 'python_intermediate',
    title: 'Python Intermediate',
    description: 'Complete 30 Python lessons',
    icon: '🐍🐍',
    condition: (progress) => getLanguageCompletedLessons(progress, 'python') >= 30
  },
  {
    id: 'python_advanced',
    title: 'Python Advanced',
    description: 'Complete 50 Python lessons',
    icon: '🐍🐍🐍',
    condition: (progress) => getLanguageCompletedLessons(progress, 'python') >= 50
  },
  {
    id: 'python_master',
    title: 'Python Master',
    description: 'Complete all 73 Python lessons',
    icon: '🐍👑',
    condition: (progress) => getLanguageCompletedLessons(progress, 'python') >= 73
  },
  
  // HTML achievements
  {
    id: 'html_beginner',
    title: 'HTML Beginner',
    description: 'Complete 10 HTML lessons',
    icon: '🌐',
    condition: (progress) => getLanguageCompletedLessons(progress, 'html') >= 10
  },
  {
    id: 'html_intermediate',
    title: 'HTML Intermediate',
    description: 'Complete 30 HTML lessons',
    icon: '🌐🌐',
    condition: (progress) => getLanguageCompletedLessons(progress, 'html') >= 30
  },
  {
    id: 'html_advanced',
    title: 'HTML Advanced',
    description: 'Complete 50 HTML lessons',
    icon: '🌐🌐🌐',
    condition: (progress) => getLanguageCompletedLessons(progress, 'html') >= 50
  },
  {
    id: 'html_master',
    title: 'HTML Master',
    description: 'Complete all 73 HTML lessons',
    icon: '🌐👑',
    condition: (progress) => getLanguageCompletedLessons(progress, 'html') >= 73
  },
  
  // CSS achievements
  {
    id: 'css_beginner',
    title: 'CSS Beginner',
    description: 'Complete 10 CSS lessons',
    icon: '🎨',
    condition: (progress) => getLanguageCompletedLessons(progress, 'css') >= 10
  },
  {
    id: 'css_intermediate',
    title: 'CSS Intermediate',
    description: 'Complete 30 CSS lessons',
    icon: '🎨🎨',
    condition: (progress) => getLanguageCompletedLessons(progress, 'css') >= 30
  },
  {
    id: 'css_advanced',
    title: 'CSS Advanced',
    description: 'Complete 50 CSS lessons',
    icon: '🎨🎨🎨',
    condition: (progress) => getLanguageCompletedLessons(progress, 'css') >= 50
  },
  {
    id: 'css_master',
    title: 'CSS Master',
    description: 'Complete all 73 CSS lessons',
    icon: '🎨👑',
    condition: (progress) => getLanguageCompletedLessons(progress, 'css') >= 73
  },
  
  // JavaScript achievements
  {
    id: 'javascript_beginner',
    title: 'JavaScript Beginner',
    description: 'Complete 10 JavaScript lessons',
    icon: '⚡',
    condition: (progress) => getLanguageCompletedLessons(progress, 'javascript') >= 10
  },
  {
    id: 'javascript_intermediate',
    title: 'JavaScript Intermediate',
    description: 'Complete 30 JavaScript lessons',
    icon: '⚡⚡',
    condition: (progress) => getLanguageCompletedLessons(progress, 'javascript') >= 30
  },
  {
    id: 'javascript_advanced',
    title: 'JavaScript Advanced',
    description: 'Complete 50 JavaScript lessons',
    icon: '⚡⚡⚡',
    condition: (progress) => getLanguageCompletedLessons(progress, 'javascript') >= 50
  },
  {
    id: 'javascript_master',
    title: 'JavaScript Master',
    description: 'Complete all 73 JavaScript lessons',
    icon: '⚡👑',
    condition: (progress) => getLanguageCompletedLessons(progress, 'javascript') >= 73
  },
  
  // Java achievements
  {
    id: 'java_beginner',
    title: 'Java Beginner',
    description: 'Complete 10 Java lessons',
    icon: '☕',
    condition: (progress) => getLanguageCompletedLessons(progress, 'java') >= 10
  },
  {
    id: 'java_intermediate',
    title: 'Java Intermediate',
    description: 'Complete 30 Java lessons',
    icon: '☕☕',
    condition: (progress) => getLanguageCompletedLessons(progress, 'java') >= 30
  },
  {
    id: 'java_advanced',
    title: 'Java Advanced',
    description: 'Complete 50 Java lessons',
    icon: '☕☕☕',
    condition: (progress) => getLanguageCompletedLessons(progress, 'java') >= 50
  },
  {
    id: 'java_master',
    title: 'Java Master',
    description: 'Complete all 73 Java lessons',
    icon: '☕👑',
    condition: (progress) => getLanguageCompletedLessons(progress, 'java') >= 73
  },
  
  // Special achievements
  {
    id: 'polyglot',
    title: 'Polyglot Programmer',
    description: 'Complete at least 10 lessons in each language',
    icon: '🌍',
    condition: (progress) => {
      const languages = ['python', 'html', 'css', 'javascript', 'java'];
      return languages.every(lang => getLanguageCompletedLessons(progress, lang) >= 10);
    }
  },
  {
    id: 'balanced_learner',
    title: 'Balanced Learner',
    description: 'Have the same number of completed lessons in all languages (minimum 5 each)',
    icon: '⚖️',
    condition: (progress) => {
      const languages = ['python', 'html', 'css', 'javascript', 'java'];
      const counts = languages.map(lang => getLanguageCompletedLessons(progress, lang));
      const min = Math.min(...counts);
      return min >= 5 && counts.every(count => count === min);
    }
  },
  {
    id: 'web_developer',
    title: 'Web Developer',
    description: 'Complete at least 30 lessons each in HTML, CSS, and JavaScript',
    icon: '🌐✨',
    condition: (progress) => {
      return getLanguageCompletedLessons(progress, 'html') >= 30 &&
             getLanguageCompletedLessons(progress, 'css') >= 30 &&
             getLanguageCompletedLessons(progress, 'javascript') >= 30;
    }
  }
];

// Helper functions

/**
 * Get total number of completed lessons across all languages
 * @param {Object} progress - User progress object
 * @returns {number} Total completed lessons
 */
export const getTotalCompletedLessons = (progress) => {
  if (!progress) return 0;
  
  const languages = ['python', 'html', 'css', 'javascript', 'java'];
  let total = 0;
  
  languages.forEach(lang => {
    if (progress[lang]) {
      total += Object.values(progress[lang]).filter(Boolean).length;
    }
  });
  
  return total;
};

/**
 * Get number of completed lessons for a specific language
 * @param {Object} progress - User progress object
 * @param {string} language - Programming language
 * @returns {number} Completed lessons for the language
 */
export const getLanguageCompletedLessons = (progress, language) => {
  if (!progress || !progress[language]) return 0;
  return Object.values(progress[language]).filter(Boolean).length;
};

/**
 * Check which achievements have been unlocked
 * @param {Object} progress - User progress object
 * @returns {Array} Array of unlocked achievement objects
 */
export const getUnlockedAchievements = (progress) => {
  if (!progress) return [];
  
  return achievementsList.filter(achievement => achievement.condition(progress));
};

/**
 * Check for newly unlocked achievements
 * @param {Object} progress - User progress object
 * @param {Array} previouslyUnlocked - Array of previously unlocked achievement IDs
 * @returns {Array} Array of newly unlocked achievement objects
 */
export const getNewlyUnlockedAchievements = (progress, previouslyUnlocked) => {
  const currentlyUnlocked = getUnlockedAchievements(progress);
  
  return currentlyUnlocked.filter(achievement => 
    !previouslyUnlocked.includes(achievement.id)
  );
};

// Local storage for achievements

const ACHIEVEMENTS_STORAGE_KEY = 'codelavalab_achievements';

/**
 * Load unlocked achievements from local storage
 * @returns {Array} Array of unlocked achievement IDs
 */
export const loadUnlockedAchievements = () => {
  try {
    const stored = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading achievements from local storage:', error);
    return [];
  }
};

/**
 * Save unlocked achievements to local storage
 * @param {Array} unlockedIds - Array of unlocked achievement IDs
 */
export const saveUnlockedAchievements = (unlockedIds) => {
  try {
    localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(unlockedIds));
  } catch (error) {
    console.error('Error saving achievements to local storage:', error);
  }
};

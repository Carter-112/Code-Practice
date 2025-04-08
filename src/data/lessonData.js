// Language metadata
const languageInfo = {
  python: {
    name: 'Python',
    icon: '🐍',
    color: '#3776AB'
  },
  html: {
    name: 'HTML',
    icon: '🌐',
    color: '#E34F26'
  },
  css: {
    name: 'CSS',
    icon: '🎨',
    color: '#1572B6'
  },
  javascript: {
    name: 'JavaScript',
    icon: '⚡',
    color: '#F7DF1E'
  },
  java: {
    name: 'Java',
    icon: '☕',
    color: '#007396'
  }
};

// Import lesson data for each language
import pythonLessons from './lessons/python';
import htmlLessons from './lessons/html';
import cssLessons from './lessons/css';
import javascriptLessons from './lessons/javascript';
import javaLessons from './lessons/java';

// Combine all lessons
const allLessons = {
  python: pythonLessons,
  html: htmlLessons,
  css: cssLessons,
  javascript: javascriptLessons,
  java: javaLessons
};

/**
 * Get lesson data for a specific language and lesson ID
 * @param {string} language - Programming language
 * @param {number} lessonId - Lesson ID (1-73)
 * @returns {Object} Lesson data
 */
export const getLessonData = (language, lessonId) => {
  // Ensure lessonId is within valid range
  if (lessonId < 1 || lessonId > 73) {
    throw new Error('Invalid lesson ID. Must be between 1 and 73.');
  }
  
  // Get language-specific lessons
  const lessons = allLessons[language];
  
  if (!lessons) {
    throw new Error(`Invalid language: ${language}`);
  }
  
  // Get specific lesson
  const lesson = lessons[lessonId - 1];
  
  if (!lesson) {
    throw new Error(`Lesson ${lessonId} not found for ${language}`);
  }
  
  // Add language metadata to lesson
  return {
    ...lesson,
    languageName: languageInfo[language].name,
    languageIcon: languageInfo[language].icon,
    languageColor: languageInfo[language].color
  };
};

/**
 * Get all lessons for a specific language
 * @param {string} language - Programming language
 * @returns {Array} Array of lesson data
 */
export const getAllLessonsForLanguage = (language) => {
  const lessons = allLessons[language];
  
  if (!lessons) {
    throw new Error(`Invalid language: ${language}`);
  }
  
  return lessons.map((lesson, index) => ({
    ...lesson,
    id: index + 1,
    languageName: languageInfo[language].name,
    languageIcon: languageInfo[language].icon,
    languageColor: languageInfo[language].color
  }));
};

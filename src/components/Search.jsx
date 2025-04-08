import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllLessonsForLanguage } from '../data/lessonData';
import './Search.css';

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allLessons, setAllLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  
  // Load all lessons on component mount
  useEffect(() => {
    const languages = ['python', 'html', 'css', 'javascript', 'java'];
    const lessons = [];
    
    languages.forEach(language => {
      try {
        const languageLessons = getAllLessonsForLanguage(language);
        languageLessons.forEach(lesson => {
          lessons.push({
            ...lesson,
            language,
            searchText: `${lesson.title} ${lesson.explanation} ${language}`.toLowerCase()
          });
        });
      } catch (error) {
        console.error(`Error loading lessons for ${language}:`, error);
      }
    });
    
    setAllLessons(lessons);
    setLoading(false);
    
    // Focus the search input
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    // Search through all lessons
    const results = allLessons.filter(lesson => 
      lesson.searchText.includes(term.toLowerCase())
    );
    
    // Sort results by relevance (title matches first)
    results.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const term = searchTerm.toLowerCase();
      
      const aContainsTitle = aTitle.includes(term);
      const bContainsTitle = bTitle.includes(term);
      
      if (aContainsTitle && !bContainsTitle) return -1;
      if (!aContainsTitle && bContainsTitle) return 1;
      return 0;
    });
    
    setSearchResults(results.slice(0, 20)); // Limit to 20 results
  };
  
  // Handle lesson selection
  const handleSelectLesson = (language, id) => {
    navigate(`/lesson/${language}/${id}`);
    onClose();
  };
  
  // Handle key press for navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  return (
    <div className="search-modal" onKeyDown={handleKeyDown}>
      <div className="search-content">
        <div className="search-header">
          <h2>Search Lessons</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="search-input-container">
          <input
            ref={searchInputRef}
            type="text"
            className="search-input"
            placeholder="Search for lessons by title, language, or content..."
            value={searchTerm}
            onChange={handleSearchChange}
            autoFocus
          />
          {searchTerm && (
            <button 
              className="clear-search" 
              onClick={() => setSearchTerm('')}
            >
              ×
            </button>
          )}
        </div>
        
        <div className="search-results">
          {loading ? (
            <div className="search-loading">Loading lessons...</div>
          ) : searchTerm.trim() === '' ? (
            <div className="search-placeholder">
              <div className="search-icon">🔍</div>
              <p>Type to search for lessons</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">😕</div>
              <p>No lessons found matching "{searchTerm}"</p>
            </div>
          ) : (
            <ul className="results-list">
              {searchResults.map(lesson => (
                <li 
                  key={`${lesson.language}-${lesson.id}`}
                  className="result-item"
                  onClick={() => handleSelectLesson(lesson.language, lesson.id)}
                >
                  <div className="result-language-icon" style={{ backgroundColor: lesson.languageColor }}>
                    {lesson.languageIcon}
                  </div>
                  <div className="result-details">
                    <h3>{lesson.title}</h3>
                    <div className="result-meta">
                      <span className="result-language">{lesson.languageName}</span>
                      <span className="result-lesson-number">Lesson {lesson.id}/73</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

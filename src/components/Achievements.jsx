import { useState, useEffect } from 'react';
import { 
  achievementsList, 
  getUnlockedAchievements, 
  loadUnlockedAchievements, 
  saveUnlockedAchievements 
} from '../utils/achievements';
import './Achievements.css';

const Achievements = ({ userProgress, onClose }) => {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [newAchievements, setNewAchievements] = useState([]);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    // Load previously unlocked achievements
    const previouslyUnlocked = loadUnlockedAchievements();
    
    // Get currently unlocked achievements
    const currentlyUnlocked = getUnlockedAchievements(userProgress);
    setUnlockedAchievements(currentlyUnlocked);
    
    // Find newly unlocked achievements
    const newlyUnlocked = currentlyUnlocked.filter(
      achievement => !previouslyUnlocked.includes(achievement.id)
    );
    setNewAchievements(newlyUnlocked.map(a => a.id));
    
    // Save current unlocked achievements
    saveUnlockedAchievements(currentlyUnlocked.map(a => a.id));
  }, [userProgress]);
  
  // Filter achievements
  const filteredAchievements = filter === 'all' 
    ? achievementsList 
    : filter === 'unlocked' 
      ? unlockedAchievements 
      : achievementsList.filter(a => !unlockedAchievements.some(ua => ua.id === a.id));
  
  return (
    <div className="achievements-modal">
      <div className="achievements-content">
        <div className="achievements-header">
          <h2>Achievements</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="achievements-filters">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'unlocked' ? 'active' : ''}`}
            onClick={() => setFilter('unlocked')}
          >
            Unlocked ({unlockedAchievements.length})
          </button>
          <button 
            className={`filter-button ${filter === 'locked' ? 'active' : ''}`}
            onClick={() => setFilter('locked')}
          >
            Locked ({achievementsList.length - unlockedAchievements.length})
          </button>
        </div>
        
        <div className="achievements-grid">
          {filteredAchievements.map(achievement => {
            const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
            const isNew = newAchievements.includes(achievement.id);
            
            return (
              <div 
                key={achievement.id} 
                className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'} ${isNew ? 'new' : ''}`}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-info">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
                {isNew && <div className="new-badge">NEW</div>}
                {!isUnlocked && <div className="locked-overlay"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

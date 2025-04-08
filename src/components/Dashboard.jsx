import { useNavigate } from 'react-router-dom';
import { calculateOverallProgress, calculateLanguageProgress, getNextLesson, getRandomNextLesson } from '../utils/storage';
import { getUnlockedAchievements } from '../utils/achievements';
import ProgressBar from './ProgressBar';
import './Dashboard.css';

const Dashboard = ({ userProgress, onAchievementsClick }) => {
  const navigate = useNavigate();

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍', color: '#3776AB' },
    { id: 'html', name: 'HTML', icon: '🌐', color: '#E34F26' },
    { id: 'css', name: 'CSS', icon: '🎨', color: '#1572B6' },
    { id: 'javascript', name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
    { id: 'java', name: 'Java', icon: '☕', color: '#007396' }
  ];

  const overallProgress = calculateOverallProgress(userProgress);

  const handleContinueLanguage = (language) => {
    const nextLessonId = getNextLesson(userProgress, language);
    navigate(`/lesson/${language}/${nextLessonId}`);
  };

  const handleRandomLesson = () => {
    const { language, lessonId } = getRandomNextLesson(userProgress);
    navigate(`/lesson/${language}/${lessonId}`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome to CodeLavaLab</h1>
        <p>Your journey to master 5 programming languages in 365 days</p>
      </div>

      <div className="overall-progress">
        <div className="progress-header">
          <h2>Overall Progress</h2>
          <button className="achievements-button" onClick={onAchievementsClick}>
            <span className="achievements-icon">🏆</span>
            <span>Achievements ({getUnlockedAchievements(userProgress).length})</span>
          </button>
        </div>
        <ProgressBar percentage={overallProgress} />
        <p>{overallProgress}% Complete</p>
      </div>

      <div className="random-lesson">
        <button
          className="random-button"
          onClick={handleRandomLesson}
        >
          <span className="random-icon">🎲</span>
          <span>Start Random Lesson</span>
        </button>
      </div>

      <div className="language-grid">
        {languages.map((language) => {
          const progress = calculateLanguageProgress(userProgress, language.id);
          const nextLesson = getNextLesson(userProgress, language.id);

          return (
            <div
              className="language-card"
              key={language.id}
              style={{'--language-color': language.color}}
            >
              <div className="language-icon">{language.icon}</div>
              <h3>{language.name}</h3>
              <ProgressBar percentage={progress} color={language.color} />
              <p>{progress}% Complete</p>
              <p className="next-lesson">Next: Lesson {nextLesson}/73</p>
              <button
                className="continue-button"
                onClick={() => handleContinueLanguage(language.id)}
              >
                Continue
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

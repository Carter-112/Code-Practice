import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearchClick, onAchievementsClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">CodeLavaLab</span>
          <div className="logo-icon">🌋</div>
        </Link>

        <div className="header-actions">
          <button className="header-button" onClick={onSearchClick}>
            <span className="header-button-icon">🔍</span>
            <span className="header-button-text">Search</span>
          </button>

          <button className="header-button" onClick={onAchievementsClick}>
            <span className="header-button-icon">🏆</span>
            <span className="header-button-text">Achievements</span>
          </button>

          {!isHomePage && (
            <Link to="/" className="back-button">
              Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

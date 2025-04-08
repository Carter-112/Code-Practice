import './Footer.css';

const Footer = ({ onSettingsClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} CodeLavaLab - Learn Programming in 365 Days</p>
        <div className="footer-links">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            onSettingsClick();
          }}>Settings</a>
          <span className="separator">|</span>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            // Open about modal
            alert('About CodeLavaLab: Your journey to master 5 programming languages in 365 days!');
          }}>About</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

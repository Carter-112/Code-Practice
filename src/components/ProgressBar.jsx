import { useEffect, useRef } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage, color }) => {
  const progressRef = useRef(null);
  
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${percentage}%`;
      
      if (color) {
        progressRef.current.style.background = `linear-gradient(to right, ${color}, ${color}CC)`;
      }
    }
  }, [percentage, color]);
  
  return (
    <div className="progress-container">
      <div 
        ref={progressRef} 
        className="progress-bar"
        style={{ width: '0%' }}
      ></div>
    </div>
  );
};

export default ProgressBar;

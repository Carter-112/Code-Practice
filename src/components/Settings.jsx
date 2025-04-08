import { useState, useEffect } from 'react';
import './Settings.css';

const Settings = ({ onClose }) => {
  const [settings, setSettings] = useState({
    theme: 'default',
    fontSize: 'medium',
    codeEditorHeight: 'medium',
    animations: true,
    autoSave: true
  });
  
  // Load settings from local storage on component mount
  useEffect(() => {
    const storedSettings = localStorage.getItem('codelavalab_settings');
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
  }, []);
  
  // Save settings to local storage when they change
  useEffect(() => {
    localStorage.setItem('codelavalab_settings', JSON.stringify(settings));
    
    // Apply settings to the app
    applySettings(settings);
  }, [settings]);
  
  // Apply settings to the app
  const applySettings = (currentSettings) => {
    const root = document.documentElement;
    
    // Apply font size
    switch (currentSettings.fontSize) {
      case 'small':
        root.style.setProperty('--base-font-size', '14px');
        break;
      case 'medium':
        root.style.setProperty('--base-font-size', '16px');
        break;
      case 'large':
        root.style.setProperty('--base-font-size', '18px');
        break;
      default:
        root.style.setProperty('--base-font-size', '16px');
    }
    
    // Apply theme
    switch (currentSettings.theme) {
      case 'default':
        root.style.setProperty('--primary-color', '#ff4500');
        root.style.setProperty('--secondary-color', '#ff8c00');
        root.style.setProperty('--background-color', '#0a0000');
        break;
      case 'blue-lava':
        root.style.setProperty('--primary-color', '#0066ff');
        root.style.setProperty('--secondary-color', '#00ccff');
        root.style.setProperty('--background-color', '#000a14');
        break;
      case 'green-lava':
        root.style.setProperty('--primary-color', '#00cc66');
        root.style.setProperty('--secondary-color', '#66ff99');
        root.style.setProperty('--background-color', '#001a0a');
        break;
      case 'purple-lava':
        root.style.setProperty('--primary-color', '#9900cc');
        root.style.setProperty('--secondary-color', '#cc66ff');
        root.style.setProperty('--background-color', '#14000a');
        break;
      default:
        // Default theme
        root.style.setProperty('--primary-color', '#ff4500');
        root.style.setProperty('--secondary-color', '#ff8c00');
        root.style.setProperty('--background-color', '#0a0000');
    }
    
    // Apply animations setting
    if (currentSettings.animations) {
      document.body.classList.remove('no-animations');
    } else {
      document.body.classList.add('no-animations');
    }
    
    // Apply code editor height
    switch (currentSettings.codeEditorHeight) {
      case 'small':
        root.style.setProperty('--code-editor-height', '200px');
        break;
      case 'medium':
        root.style.setProperty('--code-editor-height', '300px');
        break;
      case 'large':
        root.style.setProperty('--code-editor-height', '400px');
        break;
      default:
        root.style.setProperty('--code-editor-height', '300px');
    }
  };
  
  // Handle setting changes
  const handleChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };
  
  // Reset all settings to default
  const handleReset = () => {
    const defaultSettings = {
      theme: 'default',
      fontSize: 'medium',
      codeEditorHeight: 'medium',
      animations: true,
      autoSave: true
    };
    
    setSettings(defaultSettings);
  };
  
  return (
    <div className="settings-modal">
      <div className="settings-content">
        <div className="settings-header">
          <h2>Settings</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="settings-body">
          <div className="settings-section">
            <h3>Appearance</h3>
            
            <div className="setting-item">
              <label>Theme</label>
              <div className="setting-control">
                <select 
                  value={settings.theme}
                  onChange={(e) => handleChange('theme', e.target.value)}
                >
                  <option value="default">Default (Red Lava)</option>
                  <option value="blue-lava">Blue Lava</option>
                  <option value="green-lava">Green Lava</option>
                  <option value="purple-lava">Purple Lava</option>
                </select>
              </div>
            </div>
            
            <div className="setting-item">
              <label>Font Size</label>
              <div className="setting-control">
                <select 
                  value={settings.fontSize}
                  onChange={(e) => handleChange('fontSize', e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            
            <div className="setting-item">
              <label>Animations</label>
              <div className="setting-control">
                <label className="toggle">
                  <input 
                    type="checkbox" 
                    checked={settings.animations}
                    onChange={(e) => handleChange('animations', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="settings-section">
            <h3>Editor</h3>
            
            <div className="setting-item">
              <label>Code Editor Height</label>
              <div className="setting-control">
                <select 
                  value={settings.codeEditorHeight}
                  onChange={(e) => handleChange('codeEditorHeight', e.target.value)}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            
            <div className="setting-item">
              <label>Auto-Save Progress</label>
              <div className="setting-control">
                <label className="toggle">
                  <input 
                    type="checkbox" 
                    checked={settings.autoSave}
                    onChange={(e) => handleChange('autoSave', e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="settings-actions">
            <button className="reset-button" onClick={handleReset}>
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

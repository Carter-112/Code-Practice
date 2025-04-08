import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LessonView from './components/LessonView'
import Header from './components/Header'
import Footer from './components/Footer'
import Achievements from './components/Achievements'
import Search from './components/Search'
import Settings from './components/Settings'
import { loadUserProgress, saveUserProgress } from './utils/storage'
import { getUnlockedAchievements, loadUnlockedAchievements } from './utils/achievements'
import './App.css'

function App() {
  const [userProgress, setUserProgress] = useState(null)
  const [showAchievements, setShowAchievements] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [newAchievementNotification, setNewAchievementNotification] = useState(null)

  useEffect(() => {
    // Load user progress from local storage on initial load
    const progress = loadUserProgress()
    setUserProgress(progress)

    // Apply settings from local storage
    applyStoredSettings()
  }, [])

  // Save progress whenever it changes
  useEffect(() => {
    if (userProgress) {
      saveUserProgress(userProgress)

      // Check for new achievements
      checkForNewAchievements()
    }
  }, [userProgress])

  // Apply settings from local storage
  const applyStoredSettings = () => {
    const storedSettings = localStorage.getItem('codelavalab_settings')
    if (storedSettings) {
      const settings = JSON.parse(storedSettings)
      const root = document.documentElement

      // Apply font size
      switch (settings.fontSize) {
        case 'small':
          root.style.setProperty('--base-font-size', '14px')
          break
        case 'medium':
          root.style.setProperty('--base-font-size', '16px')
          break
        case 'large':
          root.style.setProperty('--base-font-size', '18px')
          break
        default:
          root.style.setProperty('--base-font-size', '16px')
      }

      // Apply theme
      switch (settings.theme) {
        case 'default':
          root.style.setProperty('--primary-color', '#ff4500')
          root.style.setProperty('--secondary-color', '#ff8c00')
          root.style.setProperty('--background-color', '#0a0000')
          break
        case 'blue-lava':
          root.style.setProperty('--primary-color', '#0066ff')
          root.style.setProperty('--secondary-color', '#00ccff')
          root.style.setProperty('--background-color', '#000a14')
          break
        case 'green-lava':
          root.style.setProperty('--primary-color', '#00cc66')
          root.style.setProperty('--secondary-color', '#66ff99')
          root.style.setProperty('--background-color', '#001a0a')
          break
        case 'purple-lava':
          root.style.setProperty('--primary-color', '#9900cc')
          root.style.setProperty('--secondary-color', '#cc66ff')
          root.style.setProperty('--background-color', '#14000a')
          break
        default:
          // Default theme
          root.style.setProperty('--primary-color', '#ff4500')
          root.style.setProperty('--secondary-color', '#ff8c00')
          root.style.setProperty('--background-color', '#0a0000')
      }

      // Apply animations setting
      if (settings.animations) {
        document.body.classList.remove('no-animations')
      } else {
        document.body.classList.add('no-animations')
      }

      // Apply code editor height
      switch (settings.codeEditorHeight) {
        case 'small':
          root.style.setProperty('--code-editor-height', '200px')
          break
        case 'medium':
          root.style.setProperty('--code-editor-height', '300px')
          break
        case 'large':
          root.style.setProperty('--code-editor-height', '400px')
          break
        default:
          root.style.setProperty('--code-editor-height', '300px')
      }
    }
  }

  // Check for new achievements
  const checkForNewAchievements = () => {
    const previouslyUnlocked = loadUnlockedAchievements()
    const currentlyUnlocked = getUnlockedAchievements(userProgress)

    // Find newly unlocked achievements
    const newlyUnlocked = currentlyUnlocked.filter(
      achievement => !previouslyUnlocked.includes(achievement.id)
    )

    if (newlyUnlocked.length > 0) {
      // Show notification for the first new achievement
      setNewAchievementNotification(newlyUnlocked[0])

      // Save updated achievements list
      const updatedUnlocked = [
        ...previouslyUnlocked,
        ...newlyUnlocked.map(a => a.id)
      ]
      localStorage.setItem('codelavalab_achievements', JSON.stringify(updatedUnlocked))

      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNewAchievementNotification(null)
      }, 5000)
    }
  }

  const updateProgress = (language, lessonId, completed) => {
    setUserProgress(prev => {
      const newProgress = {...prev}
      if (!newProgress[language]) {
        newProgress[language] = {}
      }
      newProgress[language][lessonId] = completed
      return newProgress
    })
  }

  // Toggle modals
  const toggleAchievements = () => setShowAchievements(prev => !prev)
  const toggleSearch = () => setShowSearch(prev => !prev)
  const toggleSettings = () => setShowSettings(prev => !prev)

  return (
    <Router>
      <div className="app-container">
        <div className="lava-background"></div>
        <Header
          onSearchClick={toggleSearch}
          onAchievementsClick={toggleAchievements}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  userProgress={userProgress}
                  onAchievementsClick={toggleAchievements}
                />
              }
            />
            <Route
              path="/lesson/:language/:id"
              element={
                <LessonView
                  userProgress={userProgress}
                  updateProgress={updateProgress}
                />
              }
            />
          </Routes>
        </main>
        <Footer onSettingsClick={toggleSettings} />

        {/* Achievement notification */}
        {newAchievementNotification && (
          <div className="achievement-notification" onClick={() => setNewAchievementNotification(null)}>
            <div className="achievement-notification-icon">
              {newAchievementNotification.icon}
            </div>
            <div className="achievement-notification-content">
              <h3>Achievement Unlocked!</h3>
              <h4>{newAchievementNotification.title}</h4>
              <p>{newAchievementNotification.description}</p>
            </div>
          </div>
        )}

        {/* Modals */}
        {showAchievements && (
          <Achievements
            userProgress={userProgress}
            onClose={toggleAchievements}
          />
        )}

        {showSearch && (
          <Search onClose={toggleSearch} />
        )}

        {showSettings && (
          <Settings onClose={toggleSettings} />
        )}
      </div>
    </Router>
  )
}

export default App

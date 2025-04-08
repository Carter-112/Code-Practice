import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import { getLessonData } from '../data/lessonData';
import './LessonView.css';

const LessonView = ({ userProgress, updateProgress }) => {
  const { language, id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [activeTab, setActiveTab] = useState('explanation');

  const lessonId = parseInt(id);

  useEffect(() => {
    // Check if lesson is already completed
    if (userProgress && userProgress[language] && userProgress[language][lessonId]) {
      setCompleted(true);
    }

    // Load lesson data
    const lessonData = getLessonData(language, lessonId);
    setLesson(lessonData);
    setCode(lessonData.initialCode || '');
    setLoading(false);
  }, [language, lessonId, userProgress]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const [htmlPreview, setHtmlPreview] = useState(null);
  const [executing, setExecuting] = useState(false);
  const [executionError, setExecutionError] = useState(false);

  const handleRunCode = async (result) => {
    if (result) {
      // If result is provided directly from CodeEditor
      setOutput(result.output || '');
      setExecutionError(result.error || false);

      // For HTML/CSS, set preview URL
      if (result.url) {
        setHtmlPreview(result.url);
      }
    } else {
      setOutput('Executing code...');
      setExecutionError(false);
      setExecuting(true);

      // The actual execution happens in the CodeEditor component now
      // This branch is for backward compatibility
    }

    setExecuting(false);
  };

  const handleMarkComplete = () => {
    updateProgress(language, lessonId, true);
    setCompleted(true);
  };

  const handleNextLesson = () => {
    if (lessonId < 73) {
      navigate(`/lesson/${language}/${lessonId + 1}`);
    } else {
      // Last lesson in this language
      navigate('/');
    }
  };

  const handlePrevLesson = () => {
    if (lessonId > 1) {
      navigate(`/lesson/${language}/${lessonId - 1}`);
    }
  };

  if (loading) {
    return <div className="loading">Loading lesson...</div>;
  }

  if (!lesson) {
    return <div className="error">Lesson not found</div>;
  }

  return (
    <div className="lesson-view">
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <div className="lesson-meta">
          <span className="language-badge" style={{ backgroundColor: lesson.languageColor }}>
            {lesson.languageIcon} {lesson.languageName}
          </span>
          <span className="lesson-number">Lesson {lessonId}/73</span>
        </div>
      </div>

      <div className="lesson-tabs">
        <button
          className={`tab ${activeTab === 'explanation' ? 'active' : ''}`}
          onClick={() => setActiveTab('explanation')}
        >
          Explanation
        </button>
        <button
          className={`tab ${activeTab === 'example' ? 'active' : ''}`}
          onClick={() => setActiveTab('example')}
        >
          Example
        </button>
        <button
          className={`tab ${activeTab === 'practice' ? 'active' : ''}`}
          onClick={() => setActiveTab('practice')}
        >
          Practice
        </button>
        <button
          className={`tab ${activeTab === 'solution' ? 'active' : ''}`}
          onClick={() => setActiveTab('solution')}
        >
          Solution
        </button>
      </div>

      <div className="lesson-content">
        {activeTab === 'explanation' && (
          <div className="explanation-content">
            <div dangerouslySetInnerHTML={{ __html: lesson.explanation }} />
          </div>
        )}

        {activeTab === 'example' && (
          <div className="example-content">
            <h3>Example</h3>
            <div className="code-block">
              <pre>{lesson.example}</pre>
            </div>
            <div className="example-explanation">
              <div dangerouslySetInnerHTML={{ __html: lesson.exampleExplanation }} />
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="practice-content">
            <h3>Practice Exercise</h3>
            <div className="practice-instructions">
              <div dangerouslySetInnerHTML={{ __html: lesson.practiceInstructions }} />
            </div>

            <div className="code-editor-container">
              <CodeEditor
                language={language}
                code={code}
                onChange={handleCodeChange}
                onRun={handleRunCode}
                isExecuting={executing}
                htmlPreview={htmlPreview}
              />

              {output && (
                <div className={`output-container ${executionError ? 'error' : ''}`}>
                  <h4>Output {executionError && <span className="error-label">(Error)</span>}</h4>
                  <pre className="output">{output}</pre>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'solution' && (
          <div className="solution-content">
            <h3>Solution</h3>
            <div className="code-block">
              <pre>{lesson.solution}</pre>
            </div>
            <div className="solution-explanation">
              <div dangerouslySetInnerHTML={{ __html: lesson.solutionExplanation }} />
            </div>
          </div>
        )}
      </div>

      <div className="lesson-navigation">
        <button
          className="nav-button prev-button"
          onClick={handlePrevLesson}
          disabled={lessonId <= 1}
        >
          ← Previous Lesson
        </button>

        <button
          className={`complete-button ${completed ? 'completed' : ''}`}
          onClick={handleMarkComplete}
          disabled={completed}
        >
          {completed ? '✓ Completed' : 'Mark as Complete'}
        </button>

        <button
          className="nav-button next-button"
          onClick={handleNextLesson}
          disabled={lessonId >= 73}
        >
          Next Lesson →
        </button>
      </div>
    </div>
  );
};

export default LessonView;

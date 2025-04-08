import { useState, useEffect, useRef } from 'react';
import { executeCode } from '../utils/codeExecution';
import './CodeEditor.css';

const CodeEditor = ({ language, code, onChange, onRun }) => {
  const [lineNumbers, setLineNumbers] = useState([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [htmlPreview, setHtmlPreview] = useState(null);
  const editorRef = useRef(null);

  // Update line numbers when code changes
  useEffect(() => {
    if (code) {
      const lines = code.split('\n');
      const numbers = Array.from({ length: lines.length }, (_, i) => i + 1);
      setLineNumbers(numbers);
    } else {
      setLineNumbers([1]);
    }
  }, [code]);

  // Handle tab key in the editor
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;

      // Insert 2 spaces for tab
      const newCode = code.substring(0, start) + '  ' + code.substring(end);
      onChange(newCode);

      // Move cursor position after the inserted tab
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Handle code execution
  const handleRunCode = async () => {
    setIsExecuting(true);

    try {
      // Execute code based on language
      const result = await executeCode(language, code);

      // If HTML/CSS, set preview
      if ((language === 'html' || language === 'css') && result.url) {
        setHtmlPreview(result.url);
      }

      // Call the parent's onRun with the result
      onRun(result);
    } catch (error) {
      onRun({
        success: false,
        output: `Error: ${error.message}`,
        error: true
      });
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="code-editor">
      <div className="editor-header">
        <div className="language-indicator">
          {getLanguageLabel(language)}
        </div>
        <button
          className="run-button"
          onClick={handleRunCode}
          disabled={isExecuting}
        >
          {isExecuting ? 'Running...' : 'Run Code'}
        </button>
      </div>

      <div className="editor-container">
        <div className="line-numbers">
          {lineNumbers.map(num => (
            <div key={num} className="line-number">{num}</div>
          ))}
        </div>

        <textarea
          ref={editorRef}
          className="code-input"
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck="false"
        />
      </div>

      {/* HTML Preview for HTML/CSS lessons */}
      {htmlPreview && (language === 'html' || language === 'css') && (
        <div className="html-preview">
          <div className="preview-header">Preview</div>
          <iframe
            src={htmlPreview}
            title="HTML Preview"
            className="preview-frame"
            sandbox="allow-scripts"
          />
        </div>
      )}
    </div>
  );
};

// Helper function to get language label
const getLanguageLabel = (language) => {
  const labels = {
    'python': 'Python',
    'html': 'HTML',
    'css': 'CSS',
    'javascript': 'JavaScript',
    'java': 'Java'
  };

  return labels[language] || language;
};

export default CodeEditor;

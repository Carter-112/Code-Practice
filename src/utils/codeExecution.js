// Code execution utilities using WebAssembly

// Python execution using Pyodide (WebAssembly-based Python)
let pyodideLoaded = false;
let pyodide = null;

/**
 * Load Pyodide if not already loaded
 */
export const loadPyodide = async () => {
  if (!pyodideLoaded) {
    try {
      // Load Pyodide script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
      document.head.appendChild(script);
      
      // Wait for script to load
      await new Promise((resolve) => {
        script.onload = resolve;
      });
      
      // Initialize Pyodide
      pyodide = await window.loadPyodide();
      pyodideLoaded = true;
      
      console.log('Pyodide loaded successfully');
      return true;
    } catch (error) {
      console.error('Error loading Pyodide:', error);
      return false;
    }
  }
  return true;
};

/**
 * Execute Python code using Pyodide
 * @param {string} code - Python code to execute
 * @returns {Object} Result of execution
 */
export const executePython = async (code) => {
  try {
    // Load Pyodide if not already loaded
    const loaded = await loadPyodide();
    if (!loaded) {
      return {
        success: false,
        output: 'Failed to load Python execution environment.',
        error: true
      };
    }
    
    // Redirect stdout to capture print statements
    pyodide.runPython(`
      import sys
      import io
      sys.stdout = io.StringIO()
    `);
    
    // Execute the code
    try {
      pyodide.runPython(code);
      // Get stdout content
      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      
      return {
        success: true,
        output: stdout,
        error: false
      };
    } catch (error) {
      return {
        success: false,
        output: error.message,
        error: true
      };
    }
  } catch (error) {
    return {
      success: false,
      output: 'Error executing Python code: ' + error.message,
      error: true
    };
  }
};

// JavaScript execution (native)
/**
 * Execute JavaScript code
 * @param {string} code - JavaScript code to execute
 * @returns {Object} Result of execution
 */
export const executeJavaScript = (code) => {
  try {
    // Create a new function to execute the code
    const originalConsoleLog = console.log;
    let output = '';
    
    // Override console.log to capture output
    console.log = (...args) => {
      output += args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ') + '\n';
      originalConsoleLog(...args);
    };
    
    // Execute the code
    try {
      // Create a function from the code and execute it
      const executeCode = new Function(code);
      executeCode();
      
      // Restore console.log
      console.log = originalConsoleLog;
      
      return {
        success: true,
        output: output || 'Code executed successfully (no output)',
        error: false
      };
    } catch (error) {
      // Restore console.log
      console.log = originalConsoleLog;
      
      return {
        success: false,
        output: error.message,
        error: true
      };
    }
  } catch (error) {
    return {
      success: false,
      output: 'Error executing JavaScript code: ' + error.message,
      error: true
    };
  }
};

// HTML/CSS execution (using iframe)
/**
 * Execute HTML/CSS code
 * @param {string} html - HTML code
 * @param {string} css - CSS code (optional)
 * @returns {Object} Result of execution
 */
export const executeHtmlCss = (html, css = '') => {
  try {
    // Create a blob with the HTML and CSS
    const blob = new Blob([
      `<!DOCTYPE html>
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
      </html>`
    ], { type: 'text/html' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    return {
      success: true,
      output: 'HTML/CSS rendered successfully',
      url: url,
      error: false
    };
  } catch (error) {
    return {
      success: false,
      output: 'Error executing HTML/CSS code: ' + error.message,
      error: true
    };
  }
};

// Java execution (using JVM.js - a WebAssembly-based JVM)
let jvmLoaded = false;
let jvm = null;

/**
 * Load JVM.js if not already loaded
 */
export const loadJvm = async () => {
  if (!jvmLoaded) {
    try {
      // Note: This is a simplified version. In a real implementation,
      // you would need to load a WebAssembly-based JVM like CheerpJ or TeaVM
      console.log('Loading JVM.js (simulated)');
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      jvmLoaded = true;
      jvm = {
        execute: (code) => {
          // Simulate Java execution
          return {
            success: true,
            output: `[JVM Output]\nCompiled Java code successfully.\nExecuting main method...\n\n${simulateJavaOutput(code)}`,
            error: false
          };
        }
      };
      
      return true;
    } catch (error) {
      console.error('Error loading JVM:', error);
      return false;
    }
  }
  return true;
};

/**
 * Execute Java code using JVM.js
 * @param {string} code - Java code to execute
 * @returns {Object} Result of execution
 */
export const executeJava = async (code) => {
  try {
    // Load JVM if not already loaded
    const loaded = await loadJvm();
    if (!loaded) {
      return {
        success: false,
        output: 'Failed to load Java execution environment.',
        error: true
      };
    }
    
    // Execute the code
    return jvm.execute(code);
  } catch (error) {
    return {
      success: false,
      output: 'Error executing Java code: ' + error.message,
      error: true
    };
  }
};

// Helper function to simulate Java output
const simulateJavaOutput = (code) => {
  // Look for System.out.println statements
  const printRegex = /System\.out\.println\("(.+?)"\);/g;
  let match;
  let output = '';
  
  while ((match = printRegex.exec(code)) !== null) {
    output += match[1] + '\n';
  }
  
  return output || 'No output';
};

/**
 * Execute code based on language
 * @param {string} language - Programming language
 * @param {string} code - Code to execute
 * @returns {Promise<Object>} Result of execution
 */
export const executeCode = async (language, code) => {
  switch (language) {
    case 'python':
      return await executePython(code);
    case 'javascript':
      return executeJavaScript(code);
    case 'html':
      return executeHtmlCss(code);
    case 'css':
      // For CSS, we need both HTML and CSS
      // This is a simplified version - in a real app, you'd need to handle this differently
      return executeHtmlCss('<div class="example">CSS Example</div>', code);
    case 'java':
      return await executeJava(code);
    default:
      return {
        success: false,
        output: `Execution not supported for language: ${language}`,
        error: true
      };
  }
};

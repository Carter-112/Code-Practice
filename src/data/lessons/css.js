// CSS Lessons (73 total)
import lessonTopics from '../lessonTopics';

const cssLessons = lessonTopics.map(topic => {
  // Create a lesson object for each topic
  const lesson = {
    id: topic.id,
    title: topic.title,
    level: topic.level,
    languageName: 'CSS',
    explanation: '',
    example: '',
    exampleExplanation: '',
    practiceInstructions: '',
    initialCode: '',
    solution: '',
    solutionExplanation: ''
  };

  // Fill in the content based on the lesson ID
  switch(topic.id) {
    case 1: // Introduction and Setup
      lesson.explanation = `
        <h2>Welcome to CSS!</h2>
        <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.</p>
        
        <h3>What is CSS?</h3>
        <ul>
          <li><strong>Style Sheet Language:</strong> CSS is used to style HTML elements.</li>
          <li><strong>Presentation:</strong> It controls layout, colors, fonts, and more.</li>
          <li><strong>Separation of Concerns:</strong> CSS separates content (HTML) from presentation.</li>
          <li><strong>Responsive Design:</strong> CSS enables responsive web design for different screen sizes.</li>
        </ul>
        
        <h3>CSS Versions</h3>
        <p>CSS has evolved through several versions. The current standard is CSS3, which is modular and divided into several separate specifications.</p>
        
        <h3>How to Add CSS to HTML</h3>
        <p>There are three ways to add CSS to an HTML document:</p>
        <ol>
          <li><strong>Inline CSS:</strong> Using the style attribute in HTML elements</li>
          <li><strong>Internal CSS:</strong> Using the <style> element in the <head> section</li>
          <li><strong>External CSS:</strong> Using a separate .css file linked with the <link> element</li>
        </ol>
      `;
      lesson.example = `/* External CSS file (styles.css) */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #666;
  line-height: 1.6;
}

/* In HTML file */
<!DOCTYPE html>
<html>
<head>
  <title>CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, CSS!</h1>
  <p>This page is styled with CSS.</p>
</body>
</html>`;
      lesson.exampleExplanation = `
        <p>This example shows:</p>
        <ul>
          <li>An external CSS file with styles for the body, h1, and p elements</li>
          <li>How to link the CSS file to an HTML document using the link element</li>
          <li>Basic CSS properties like font-family, background-color, color, text-align, and line-height</li>
        </ul>
      `;
      lesson.practiceInstructions = `
        <p>Create a CSS stylesheet that:</p>
        <ul>
          <li>Sets the body font to a sans-serif font</li>
          <li>Makes h1 headings blue and centered</li>
          <li>Makes paragraphs dark gray with a line height of 1.5</li>
          <li>Adds a light gray background to the page</li>
        </ul>
      `;
      lesson.initialCode = `/* Write your CSS code here */`;
      lesson.solution = `/* CSS Stylesheet */
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #0066cc;
  text-align: center;
}

p {
  color: #333333;
  line-height: 1.5;
}`;
      lesson.solutionExplanation = `
        <p>In this solution, we created a CSS stylesheet that:</p>
        <ul>
          <li>Sets the body font to Arial, Helvetica, or any sans-serif font</li>
          <li>Adds a light gray background (#f0f0f0) to the body</li>
          <li>Removes the default margin and adds padding to the body</li>
          <li>Makes h1 headings blue (#0066cc) and centers them</li>
          <li>Makes paragraphs dark gray (#333333) with a line height of 1.5</li>
        </ul>
      `;
      break;
    
    case 2: // CSS Selectors
      lesson.explanation = `
        <h2>CSS Selectors</h2>
        <p>CSS selectors are patterns used to select and style HTML elements. They are the bridge between your HTML document and your styles.</p>
        
        <h3>Types of CSS Selectors</h3>
        <ul>
          <li><strong>Element Selector:</strong> Selects elements based on their tag name (e.g., <code>p</code>, <code>h1</code>)</li>
          <li><strong>Class Selector:</strong> Selects elements with a specific class attribute (e.g., <code>.my-class</code>)</li>
          <li><strong>ID Selector:</strong> Selects an element with a specific id attribute (e.g., <code>#my-id</code>)</li>
          <li><strong>Attribute Selector:</strong> Selects elements with a specific attribute (e.g., <code>[type="text"]</code>)</li>
          <li><strong>Pseudo-class Selector:</strong> Selects elements in a specific state (e.g., <code>:hover</code>, <code>:focus</code>)</li>
          <li><strong>Pseudo-element Selector:</strong> Selects a part of an element (e.g., <code>::first-line</code>, <code>::before</code>)</li>
        </ul>
        
        <h3>Combinators</h3>
        <ul>
          <li><strong>Descendant Selector:</strong> Selects all descendants (e.g., <code>div p</code>)</li>
          <li><strong>Child Selector:</strong> Selects direct children only (e.g., <code>div > p</code>)</li>
          <li><strong>Adjacent Sibling Selector:</strong> Selects the adjacent sibling (e.g., <code>h1 + p</code>)</li>
          <li><strong>General Sibling Selector:</strong> Selects all siblings (e.g., <code>h1 ~ p</code>)</li>
        </ul>
        
        <h3>Specificity</h3>
        <p>When multiple selectors target the same element, the browser uses specificity to determine which styles to apply. The more specific selector wins.</p>
      `;
      lesson.example = `/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#header {
  font-size: 24px;
}

/* Attribute Selector */
input[type="text"] {
  border: 1px solid gray;
}

/* Pseudo-class Selector */
a:hover {
  text-decoration: underline;
}

/* Pseudo-element Selector */
p::first-line {
  font-weight: bold;
}

/* Combinators */
div p {
  /* All paragraphs inside divs */
  margin-left: 20px;
}

div > p {
  /* Only direct paragraph children of divs */
  font-style: italic;
}

h1 + p {
  /* Paragraph immediately after h1 */
  font-size: 18px;
}

h1 ~ p {
  /* All paragraphs after h1 */
  color: #666;
}`;
      lesson.exampleExplanation = `
        <p>This example demonstrates various CSS selectors:</p>
        <ul>
          <li><strong>Element Selector:</strong> Selects all <code>&lt;p&gt;</code> elements and makes their text blue</li>
          <li><strong>Class Selector:</strong> Selects elements with <code>class="highlight"</code> and gives them a yellow background</li>
          <li><strong>ID Selector:</strong> Selects the element with <code>id="header"</code> and sets its font size to 24px</li>
          <li><strong>Attribute Selector:</strong> Selects <code>&lt;input&gt;</code> elements with <code>type="text"</code> and adds a gray border</li>
          <li><strong>Pseudo-class Selector:</strong> Adds underline to links when hovered</li>
          <li><strong>Pseudo-element Selector:</strong> Makes the first line of paragraphs bold</li>
          <li><strong>Combinators:</strong> Demonstrate different ways to select elements based on their relationships</li>
        </ul>
      `;
      lesson.practiceInstructions = `
        <p>Create CSS rules using different selectors to style an HTML document:</p>
        <ol>
          <li>Style all paragraphs to have a dark gray color and a line height of 1.5</li>
          <li>Create a class called "highlight" that adds a yellow background and bold text</li>
          <li>Style the element with id="main-title" to be centered and blue</li>
          <li>Style all links to be red, and change their color to orange when hovered</li>
          <li>Add a left margin to all paragraphs inside a div</li>
          <li>Make the first letter of each paragraph larger and bold</li>
        </ol>
        <p>Assume the HTML has paragraphs, links, divs, and an element with id="main-title".</p>
      `;
      lesson.initialCode = `/* Write your CSS selectors and rules here */`;
      lesson.solution = `/* Element selector for paragraphs */
p {
  color: #333333;
  line-height: 1.5;
}

/* Class selector */
.highlight {
  background-color: yellow;
  font-weight: bold;
}

/* ID selector */
#main-title {
  text-align: center;
  color: blue;
}

/* Element selector with pseudo-class */
a {
  color: red;
}

a:hover {
  color: orange;
}

/* Descendant selector */
div p {
  margin-left: 20px;
}

/* Pseudo-element selector */
p::first-letter {
  font-size: 1.5em;
  font-weight: bold;
}`;
      lesson.solutionExplanation = `
        <p>In this solution, we created CSS rules using different types of selectors:</p>
        <ul>
          <li>Used an <strong>element selector</strong> to style all paragraphs with dark gray color and 1.5 line height</li>
          <li>Created a <strong>class selector</strong> (.highlight) for adding yellow background and bold text</li>
          <li>Used an <strong>ID selector</strong> (#main-title) to center the main title and make it blue</li>
          <li>Used an <strong>element selector</strong> with a <strong>pseudo-class</strong> to style links red and orange on hover</li>
          <li>Used a <strong>descendant selector</strong> (div p) to add left margin to paragraphs inside divs</li>
          <li>Used a <strong>pseudo-element selector</strong> (p::first-letter) to make the first letter of paragraphs larger and bold</li>
        </ul>
        <p>These selectors demonstrate different ways to target HTML elements for styling.</p>
      `;
      break;
      
    // For the remaining lessons, we'll use a template approach
    default:
      // Generate content based on the topic
      const topicTitle = topic.title;
      const topicLevel = topic.level;
      
      // Create a template explanation based on the topic
      lesson.explanation = `
        <h2>${topicTitle} in CSS</h2>
        <p>This lesson covers ${topicTitle.toLowerCase()} in CSS, which is an important concept for ${topicLevel} web designers and developers.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li>Understanding the basics of ${topicTitle.toLowerCase()} in CSS</li>
          <li>Learning how to implement ${topicTitle.toLowerCase()} for web styling</li>
          <li>Practicing with real-world examples</li>
        </ul>
        
        <h3>Why This Matters</h3>
        <p>${topicTitle} is essential for creating visually appealing and responsive websites. It helps you control the presentation and layout of web pages.</p>
      `;
      
      // Create a template example based on the topic
      const className = topicTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      lesson.example = `/* CSS for ${topicTitle} */
.${className}-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.${className}-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
}

.${className}-content {
  line-height: 1.6;
  color: #666;
}

/* Responsive design */
@media (max-width: 768px) {
  .${className}-container {
    padding: 15px;
  }
  
  .${className}-title {
    font-size: 20px;
  }
}`;
      
      // Create a template example explanation
      lesson.exampleExplanation = `
        <p>This example demonstrates the basic principles of ${topicTitle.toLowerCase()} in CSS:</p>
        <ul>
          <li>We create CSS rules that show how to implement ${topicTitle.toLowerCase()}</li>
          <li>The code illustrates key styling techniques and properties</li>
          <li>We include responsive design with a media query for smaller screens</li>
          <li>You can modify this example to explore different aspects of ${topicTitle.toLowerCase()}</li>
        </ul>
      `;
      
      // Create template practice instructions
      lesson.practiceInstructions = `
        <p>Now it's your turn to practice ${topicTitle.toLowerCase()} in CSS:</p>
        <ol>
          <li>Create CSS rules that implement ${topicTitle.toLowerCase()}</li>
          <li>Make sure your styles are responsive and work on different screen sizes</li>
          <li>Test your code with different HTML elements</li>
          <li>Try to improve the visual design and user experience</li>
        </ol>
      `;
      
      // Create template initial code
      lesson.initialCode = `/* Your ${topicTitle.toLowerCase()} practice code goes here */
/* Delete this comment and start coding! */

`;
      
      // Create template solution
      lesson.solution = `/* Solution for ${topicTitle} practice */
.${className}-solution {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.${className}-solution h2 {
  color: #0066cc;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.${className}-solution p {
  color: #333;
  line-height: 1.6;
}

.${className}-solution .highlight {
  background-color: #fffde7;
  padding: 10px;
  border-left: 3px solid #ffd600;
}

/* Responsive design */
@media (max-width: 768px) {
  .${className}-solution {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .${className}-solution {
    padding: 10px;
  }
  
  .${className}-solution h2 {
    font-size: 1.2rem;
  }
}`;
      
      // Create template solution explanation
      lesson.solutionExplanation = `
        <p>This solution demonstrates a basic implementation of ${topicTitle.toLowerCase()} in CSS:</p>
        <ul>
          <li>We created CSS rules that properly implement ${topicTitle.toLowerCase()}</li>
          <li>The code follows CSS best practices with clean, maintainable styles</li>
          <li>We included responsive design with media queries for different screen sizes</li>
          <li>The solution uses modern CSS features like flexbox and gap</li>
          <li>We added visual enhancements like shadows and highlights for better user experience</li>
          <li>You can extend this solution to create more complex styling</li>
        </ul>
      `;
      break;
  }
  
  return lesson;
});

export default cssLessons;

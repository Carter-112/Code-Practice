// HTML Lessons (73 total)
const htmlLessons = [
  // Lesson 1: Introduction to HTML
  {
    title: "Introduction to HTML",
    explanation: `
      <h2>Welcome to HTML!</h2>
      <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.</p>
      
      <h3>What is HTML?</h3>
      <ul>
        <li><strong>Markup Language:</strong> HTML uses tags to define elements within a document.</li>
        <li><strong>Structure:</strong> HTML provides the basic structure of web pages.</li>
        <li><strong>Static:</strong> HTML by itself creates static web pages.</li>
        <li><strong>Foundation:</strong> It's the foundation for web development, working alongside CSS and JavaScript.</li>
      </ul>
      
      <h3>HTML Versions</h3>
      <p>HTML has evolved over the years. The current standard is HTML5, which introduced many new features and improvements.</p>
      
      <h3>Your First HTML Document</h3>
      <p>Let's start with a basic HTML document structure:</p>
    `,
    example: `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
    exampleExplanation: `
      <p>This example shows the basic structure of an HTML document:</p>
      <ul>
        <li><code><!DOCTYPE html></code> - Declares the document type and HTML version</li>
        <li><code><html></code> - The root element of an HTML page</li>
        <li><code><head></code> - Contains meta information about the document</li>
        <li><code><title></code> - Specifies a title for the document (shown in the browser tab)</li>
        <li><code><body></code> - Contains the visible page content</li>
        <li><code><h1></code> - Defines a large heading</li>
        <li><code><p></code> - Defines a paragraph</li>
      </ul>
    `,
    practiceInstructions: `
      <p>Create a basic HTML document with:</p>
      <ul>
        <li>A title of "About Me"</li>
        <li>A main heading (h1) with your name</li>
        <li>A paragraph introducing yourself</li>
      </ul>
    `,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <h1>John Doe</h1>
  <p>Hello! My name is John Doe and I'm learning HTML.</p>
</body>
</html>`,
    solutionExplanation: `
      <p>In this solution, we created a basic HTML document with:</p>
      <ul>
        <li>The document type declaration</li>
        <li>A title "About Me" that appears in the browser tab</li>
        <li>An h1 heading with a name</li>
        <li>A paragraph with a brief introduction</li>
      </ul>
      <p>You can replace "John Doe" with your own name and customize the introduction text.</p>
    `
  },
  
  // Add more lessons here...
  // For brevity, I'm including just 1 lesson as an example
];

// Fill in the remaining lessons with placeholders
for (let i = htmlLessons.length; i < 73; i++) {
  htmlLessons.push({
    title: `HTML Lesson ${i + 1}`,
    explanation: `<p>This is the explanation for HTML Lesson ${i + 1}.</p>`,
    example: `<!-- Example code for Lesson ${i + 1} -->
<div>
  <h2>Example for Lesson ${i + 1}</h2>
  <p>This is example code for HTML Lesson ${i + 1}</p>
</div>`,
    exampleExplanation: `<p>This is the explanation for the example in Lesson ${i + 1}.</p>`,
    practiceInstructions: `<p>Practice instructions for Lesson ${i + 1}.</p>`,
    initialCode: `<!-- Initial code for Lesson ${i + 1} -->`,
    solution: `<!-- Solution code for Lesson ${i + 1} -->
<div>
  <h2>Solution for Lesson ${i + 1}</h2>
  <p>This is the solution for HTML Lesson ${i + 1}</p>
</div>`,
    solutionExplanation: `<p>This is the explanation for the solution in Lesson ${i + 1}.</p>`
  });
}

export default htmlLessons;

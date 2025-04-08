// JavaScript Lessons (73 total)
const javascriptLessons = [
  // Lesson 1: Introduction to JavaScript
  {
    title: "Introduction to JavaScript",
    explanation: `
      <h2>Welcome to JavaScript!</h2>
      <p>JavaScript is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web. It enables interactive web pages and is an essential part of web applications.</p>
      
      <h3>What is JavaScript?</h3>
      <ul>
        <li><strong>Client-side Scripting:</strong> JavaScript runs in the browser, allowing dynamic content.</li>
        <li><strong>Event-driven:</strong> JavaScript can respond to user actions and events.</li>
        <li><strong>Versatile:</strong> Used for web development, mobile apps, server-side programming, and more.</li>
        <li><strong>Object-oriented:</strong> JavaScript uses objects and prototypes.</li>
      </ul>
      
      <h3>JavaScript vs Java</h3>
      <p>Despite the similar name, JavaScript is completely different from Java. JavaScript was created by Brendan Eich at Netscape and was originally named "LiveScript".</p>
      
      <h3>How to Add JavaScript to HTML</h3>
      <p>There are three ways to add JavaScript to an HTML document:</p>
      <ol>
        <li><strong>Inline JavaScript:</strong> Using the onclick attribute in HTML elements</li>
        <li><strong>Internal JavaScript:</strong> Using the <script> element in the HTML document</li>
        <li><strong>External JavaScript:</strong> Using a separate .js file linked with the <script> element</li>
      </ol>
    `,
    example: `// External JavaScript file (script.js)
function greet() {
  alert("Hello, World!");
}

// In HTML file
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
  <script src="script.js"></script>
</head>
<body>
  <h1>My First JavaScript</h1>
  <button onclick="greet()">Click Me</button>
</body>
</html>`,
    exampleExplanation: `
      <p>This example shows:</p>
      <ul>
        <li>An external JavaScript file with a function called greet()</li>
        <li>How to link the JavaScript file to an HTML document using the script element</li>
        <li>How to call a JavaScript function when a button is clicked using the onclick attribute</li>
      </ul>
    `,
    practiceInstructions: `
      <p>Write a JavaScript function that:</p>
      <ol>
        <li>Creates a function called <code>sayHello</code></li>
        <li>The function should take a name parameter</li>
        <li>The function should return a greeting message with the name</li>
        <li>Call the function with your name and log the result to the console</li>
      </ol>
    `,
    initialCode: `// Write your JavaScript code here`,
    solution: `// JavaScript function
function sayHello(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Call the function and log the result
console.log(sayHello("John"));`,
    solutionExplanation: `
      <p>In this solution, we:</p>
      <ol>
        <li>Created a function called <code>sayHello</code> that takes a name parameter</li>
        <li>The function returns a string that combines "Hello, " with the name and a welcome message</li>
        <li>We called the function with the name "John" and logged the result to the console</li>
        <li>You can replace "John" with your own name</li>
      </ol>
      <p>This demonstrates basic function creation, string concatenation, and console logging in JavaScript.</p>
    `
  },
  
  // Add more lessons here...
  // For brevity, I'm including just 1 lesson as an example
];

// Fill in the remaining lessons with placeholders
for (let i = javascriptLessons.length; i < 73; i++) {
  javascriptLessons.push({
    title: `JavaScript Lesson ${i + 1}`,
    explanation: `<p>This is the explanation for JavaScript Lesson ${i + 1}.</p>`,
    example: `// Example code for Lesson ${i + 1}
function example${i + 1}() {
  console.log("This is example code for Lesson ${i + 1}");
}`,
    exampleExplanation: `<p>This is the explanation for the example in Lesson ${i + 1}.</p>`,
    practiceInstructions: `<p>Practice instructions for Lesson ${i + 1}.</p>`,
    initialCode: `// Initial code for Lesson ${i + 1}`,
    solution: `// Solution code for Lesson ${i + 1}
function solution${i + 1}() {
  console.log("This is the solution for Lesson ${i + 1}");
}

solution${i + 1}();`,
    solutionExplanation: `<p>This is the explanation for the solution in Lesson ${i + 1}.</p>`
  });
}

export default javascriptLessons;

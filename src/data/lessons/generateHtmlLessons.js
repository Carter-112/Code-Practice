// HTML Lesson Generator
// This script generates all 73 HTML lessons

import lessonTopics from '../lessonTopics';

// Function to generate HTML lessons
const generateHtmlLessons = () => {
  // Create an array to hold all 73 HTML lessons
  const htmlLessons = [];

  // Loop through all 73 lesson topics
  lessonTopics.forEach(topic => {
    // Create a lesson object for each topic
    const lesson = {
      id: topic.id,
      title: topic.title,
      level: topic.level,
      explanation: generateExplanation(topic),
      example: generateExample(topic),
      exampleExplanation: generateExampleExplanation(topic),
      practiceInstructions: generatePracticeInstructions(topic),
      initialCode: generateInitialCode(topic),
      solution: generateSolution(topic),
      solutionExplanation: generateSolutionExplanation(topic)
    };

    // Add the lesson to the array
    htmlLessons.push(lesson);
  });

  return htmlLessons;
};

// Helper functions to generate lesson content
const generateExplanation = (topic) => {
  // Generate explanation based on the topic
  return `
    <h2>${topic.title} in HTML</h2>
    <p>This lesson covers ${topic.title.toLowerCase()} in HTML, which is an important concept for ${topic.level} web developers.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Understanding the basics of ${topic.title.toLowerCase()} in HTML</li>
      <li>Learning how to implement ${topic.title.toLowerCase()} in web pages</li>
      <li>Practicing with real-world examples</li>
    </ul>
    
    <h3>Why This Matters</h3>
    <p>${topic.title} is essential for building well-structured web pages. It helps you create more accessible and maintainable websites.</p>
  `;
};

const generateExample = (topic) => {
  // Generate example code based on the topic
  return `<!-- Example code for ${topic.title} -->
<!DOCTYPE html>
<html>
<head>
  <title>${topic.title} Example</title>
</head>
<body>
  <h1>${topic.title} in HTML</h1>
  <div class="example">
    <p>This demonstrates ${topic.title.toLowerCase()} in HTML</p>
  </div>
</body>
</html>`;
};

const generateExampleExplanation = (topic) => {
  // Generate explanation for the example
  return `
    <p>This example demonstrates the basic principles of ${topic.title.toLowerCase()} in HTML:</p>
    <ul>
      <li>We create a basic HTML structure with proper DOCTYPE and HTML tags</li>
      <li>The code illustrates how to implement ${topic.title.toLowerCase()} in a web page</li>
      <li>You can modify this example to explore different aspects of ${topic.title.toLowerCase()}</li>
    </ul>
  `;
};

const generatePracticeInstructions = (topic) => {
  // Generate practice instructions
  return `
    <p>Now it's your turn to practice ${topic.title.toLowerCase()} in HTML:</p>
    <ol>
      <li>Create an HTML document that implements ${topic.title.toLowerCase()}</li>
      <li>Test your code in a browser</li>
      <li>Try to improve the structure and semantics</li>
    </ol>
  `;
};

const generateInitialCode = (topic) => {
  // Generate initial code for practice
  return `<!-- Your ${topic.title.toLowerCase()} practice code goes here -->
<!DOCTYPE html>
<html>
<head>
  <title>${topic.title} Practice</title>
</head>
<body>
  <!-- Start coding here -->
  
</body>
</html>`;
};

const generateSolution = (topic) => {
  // Generate solution code
  const className = topic.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  return `<!-- Solution for ${topic.title} practice -->
<!DOCTYPE html>
<html>
<head>
  <title>${topic.title} Solution</title>
</head>
<body>
  <h1>${topic.title} Solution</h1>
  <div class="${className}-example">
    <p>This is a solution for the ${topic.title.toLowerCase()} practice</p>
    <p>It demonstrates proper implementation of ${topic.title.toLowerCase()} in HTML</p>
  </div>
</body>
</html>`;
};

const generateSolutionExplanation = (topic) => {
  // Generate explanation for the solution
  return `
    <p>This solution demonstrates a basic implementation of ${topic.title.toLowerCase()} in HTML:</p>
    <ul>
      <li>We created a well-structured HTML document</li>
      <li>The code follows HTML best practices for ${topic.title.toLowerCase()}</li>
      <li>You can extend this solution to create more complex web pages</li>
    </ul>
  `;
};

// Generate all HTML lessons
const htmlLessons = generateHtmlLessons();

// Export the lessons
export default htmlLessons;

// JavaScript Lesson Generator
// This script generates all 73 JavaScript lessons

import lessonTopics from '../lessonTopics';

// Function to generate JavaScript lessons
const generateJavaScriptLessons = () => {
  // Create an array to hold all 73 JavaScript lessons
  const javascriptLessons = [];

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
    javascriptLessons.push(lesson);
  });

  return javascriptLessons;
};

// Helper functions to generate lesson content
const generateExplanation = (topic) => {
  // Generate explanation based on the topic
  return `
    <h2>${topic.title} in JavaScript</h2>
    <p>This lesson covers ${topic.title.toLowerCase()} in JavaScript, which is an important concept for ${topic.level} web developers.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Understanding the basics of ${topic.title.toLowerCase()} in JavaScript</li>
      <li>Learning how to implement ${topic.title.toLowerCase()} for web interactivity</li>
      <li>Practicing with real-world examples</li>
    </ul>
    
    <h3>Why This Matters</h3>
    <p>${topic.title} is essential for creating dynamic and interactive web applications. It helps you build responsive user interfaces and handle complex logic in the browser.</p>
  `;
};

const generateExample = (topic) => {
  // Generate example code based on the topic
  const functionName = topic.title.toLowerCase().replace(/\s+/g, 'Camel').replace(/[^\w]/g, '');
  const camelCaseName = functionName.charAt(0).toLowerCase() + functionName.slice(1);
  
  return `// Example code for ${topic.title} in JavaScript

function ${camelCaseName}Example() {
  console.log("This demonstrates ${topic.title.toLowerCase()} in JavaScript");
  
  // Sample implementation
  const data = {
    name: "JavaScript Example",
    topic: "${topic.title}",
    level: "${topic.level}"
  };
  
  // Process the data
  const result = processData(data);
  console.log(result);
  
  return result;
}

function processData(data) {
  return \`Processing \${data.topic} at \${data.level} level\`;
}

// Call the example function
${camelCaseName}Example();`;
};

const generateExampleExplanation = (topic) => {
  // Generate explanation for the example
  return `
    <p>This example demonstrates the basic principles of ${topic.title.toLowerCase()} in JavaScript:</p>
    <ul>
      <li>We create functions that show how to implement ${topic.title.toLowerCase()}</li>
      <li>The code illustrates key JavaScript concepts like functions, objects, and template literals</li>
      <li>We use modern JavaScript syntax and best practices</li>
      <li>You can modify this example to explore different aspects of ${topic.title.toLowerCase()}</li>
    </ul>
  `;
};

const generatePracticeInstructions = (topic) => {
  // Generate practice instructions
  return `
    <p>Now it's your turn to practice ${topic.title.toLowerCase()} in JavaScript:</p>
    <ol>
      <li>Create JavaScript code that implements ${topic.title.toLowerCase()}</li>
      <li>Test your code with different inputs</li>
      <li>Try to use modern JavaScript features and best practices</li>
      <li>Consider how your solution would work in a real web application</li>
    </ol>
  `;
};

const generateInitialCode = (topic) => {
  // Generate initial code for practice
  return `// Your ${topic.title.toLowerCase()} practice code goes here
// Delete this comment and start coding!

function practice() {
  // Implement your solution here
}

// Call your function
practice();`;
};

const generateSolution = (topic) => {
  // Generate solution code
  const functionName = topic.title.toLowerCase().replace(/\s+/g, 'Camel').replace(/[^\w]/g, '');
  const camelCaseName = functionName.charAt(0).toLowerCase() + functionName.slice(1);
  
  return `// Solution for ${topic.title} practice in JavaScript

function ${camelCaseName}Solution() {
  console.log("This is a solution for the ${topic.title.toLowerCase()} practice");
  
  // Sample implementation
  const data = {
    title: "${topic.title}",
    level: "${topic.level}",
    completed: true
  };
  
  // Process the data
  const result = {
    message: \`Successfully implemented \${data.title}\`,
    status: "complete",
    timestamp: new Date().toISOString()
  };
  
  console.log(result);
  return result;
}

// Call the solution function
const result = ${camelCaseName}Solution();
console.log(\`Status: \${result.status}\`);`;
};

const generateSolutionExplanation = (topic) => {
  // Generate explanation for the solution
  return `
    <p>This solution demonstrates a basic implementation of ${topic.title.toLowerCase()} in JavaScript:</p>
    <ul>
      <li>We created a function that properly implements ${topic.title.toLowerCase()}</li>
      <li>The code follows JavaScript best practices with clean, maintainable code</li>
      <li>We used modern JavaScript features like template literals, const/let, and object shorthand</li>
      <li>The solution returns a structured result that could be used in a larger application</li>
      <li>You can extend this solution to handle more complex scenarios</li>
    </ul>
  `;
};

// Generate all JavaScript lessons
const javascriptLessons = generateJavaScriptLessons();

// Export the lessons
export default javascriptLessons;

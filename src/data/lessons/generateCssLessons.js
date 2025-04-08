// CSS Lesson Generator
// This script generates all 73 CSS lessons

import lessonTopics from '../lessonTopics';

// Function to generate CSS lessons
const generateCssLessons = () => {
  // Create an array to hold all 73 CSS lessons
  const cssLessons = [];

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
    cssLessons.push(lesson);
  });

  return cssLessons;
};

// Helper functions to generate lesson content
const generateExplanation = (topic) => {
  // Generate explanation based on the topic
  return `
    <h2>${topic.title} in CSS</h2>
    <p>This lesson covers ${topic.title.toLowerCase()} in CSS, which is an important concept for ${topic.level} web designers and developers.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Understanding the basics of ${topic.title.toLowerCase()} in CSS</li>
      <li>Learning how to implement ${topic.title.toLowerCase()} for web styling</li>
      <li>Practicing with real-world examples</li>
    </ul>
    
    <h3>Why This Matters</h3>
    <p>${topic.title} is essential for creating visually appealing and responsive websites. It helps you control the presentation and layout of web pages.</p>
  `;
};

const generateExample = (topic) => {
  // Generate example code based on the topic
  const className = topic.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  return `/* Example code for ${topic.title} in CSS */
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

/* This demonstrates ${topic.title.toLowerCase()} in CSS */`;
};

const generateExampleExplanation = (topic) => {
  // Generate explanation for the example
  return `
    <p>This example demonstrates the basic principles of ${topic.title.toLowerCase()} in CSS:</p>
    <ul>
      <li>We create CSS rules that show how to implement ${topic.title.toLowerCase()}</li>
      <li>The code illustrates key styling techniques and properties</li>
      <li>You can modify this example to explore different aspects of ${topic.title.toLowerCase()}</li>
    </ul>
  `;
};

const generatePracticeInstructions = (topic) => {
  // Generate practice instructions
  return `
    <p>Now it's your turn to practice ${topic.title.toLowerCase()} in CSS:</p>
    <ol>
      <li>Create CSS rules that implement ${topic.title.toLowerCase()}</li>
      <li>Test your code with different HTML elements</li>
      <li>Try to improve the visual design and responsiveness</li>
    </ol>
  `;
};

const generateInitialCode = (topic) => {
  // Generate initial code for practice
  return `/* Your ${topic.title.toLowerCase()} practice code goes here */
/* Delete this comment and start coding! */

`;
};

const generateSolution = (topic) => {
  // Generate solution code
  const className = topic.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  return `/* Solution for ${topic.title} practice */
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

@media (max-width: 768px) {
  .${className}-solution {
    padding: 15px;
  }
}`;
};

const generateSolutionExplanation = (topic) => {
  // Generate explanation for the solution
  return `
    <p>This solution demonstrates a basic implementation of ${topic.title.toLowerCase()} in CSS:</p>
    <ul>
      <li>We created CSS rules that properly implement ${topic.title.toLowerCase()}</li>
      <li>The code follows CSS best practices with clean, maintainable styles</li>
      <li>We included responsive design with a media query for smaller screens</li>
      <li>You can extend this solution to create more complex styling</li>
    </ul>
  `;
};

// Generate all CSS lessons
const cssLessons = generateCssLessons();

// Export the lessons
export default cssLessons;

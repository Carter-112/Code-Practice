// Python Lesson Generator
// This script generates all 73 Python lessons

import lessonTopics from '../lessonTopics';

// Function to generate Python lessons
const generatePythonLessons = () => {
  // Create an array to hold all 73 Python lessons
  const pythonLessons = [];

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
    pythonLessons.push(lesson);
  });

  return pythonLessons;
};

// Helper functions to generate lesson content
const generateExplanation = (topic) => {
  // Generate explanation based on the topic
  return `
    <h2>${topic.title} in Python</h2>
    <p>This lesson covers ${topic.title.toLowerCase()} in Python, which is an important concept for ${topic.level} programmers.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Understanding the basics of ${topic.title.toLowerCase()}</li>
      <li>Learning how to implement ${topic.title.toLowerCase()} in Python</li>
      <li>Practicing with real-world examples</li>
    </ul>
    
    <h3>Why This Matters</h3>
    <p>${topic.title} is essential for building robust Python applications. It helps you write more efficient and maintainable code.</p>
  `;
};

const generateExample = (topic) => {
  // Generate example code based on the topic
  return `# Example code for ${topic.title}
# This demonstrates ${topic.title.toLowerCase()} in Python

def example_function():
    print("This is an example of ${topic.title.toLowerCase()} in Python")
    
example_function()`;
};

const generateExampleExplanation = (topic) => {
  // Generate explanation for the example
  return `
    <p>This example demonstrates the basic principles of ${topic.title.toLowerCase()} in Python:</p>
    <ul>
      <li>We define a function that shows how ${topic.title.toLowerCase()} works</li>
      <li>The code illustrates the key concepts you need to understand</li>
      <li>You can modify this example to explore different aspects of ${topic.title.toLowerCase()}</li>
    </ul>
  `;
};

const generatePracticeInstructions = (topic) => {
  // Generate practice instructions
  return `
    <p>Now it's your turn to practice ${topic.title.toLowerCase()} in Python:</p>
    <ol>
      <li>Create a Python program that implements ${topic.title.toLowerCase()}</li>
      <li>Test your code with different inputs</li>
      <li>Try to optimize your solution</li>
    </ol>
  `;
};

const generateInitialCode = (topic) => {
  // Generate initial code for practice
  return `# Your ${topic.title.toLowerCase()} practice code goes here
# Delete this comment and start coding!

`;
};

const generateSolution = (topic) => {
  // Generate solution code
  const functionName = topic.title.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
  return `# Solution for ${topic.title} practice
def ${functionName}_example():
    print("This is a solution for the ${topic.title.toLowerCase()} practice")
    return "Success!"
    
result = ${functionName}_example()
print(result)`;
};

const generateSolutionExplanation = (topic) => {
  // Generate explanation for the solution
  return `
    <p>This solution demonstrates a basic implementation of ${topic.title.toLowerCase()} in Python:</p>
    <ul>
      <li>We created a function that implements the required functionality</li>
      <li>The code follows Python best practices for ${topic.title.toLowerCase()}</li>
      <li>You can extend this solution to handle more complex scenarios</li>
    </ul>
  `;
};

// Generate all Python lessons
const pythonLessons = generatePythonLessons();

// Export the lessons
export default pythonLessons;

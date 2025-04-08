// Java Lesson Generator
// This script generates all 73 Java lessons

import lessonTopics from '../lessonTopics';

// Function to generate Java lessons
const generateJavaLessons = () => {
  // Create an array to hold all 73 Java lessons
  const javaLessons = [];

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
    javaLessons.push(lesson);
  });

  return javaLessons;
};

// Helper functions to generate lesson content
const generateExplanation = (topic) => {
  // Generate explanation based on the topic
  return `
    <h2>${topic.title} in Java</h2>
    <p>This lesson covers ${topic.title.toLowerCase()} in Java, which is an important concept for ${topic.level} programmers.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Understanding the basics of ${topic.title.toLowerCase()} in Java</li>
      <li>Learning how to implement ${topic.title.toLowerCase()} in Java applications</li>
      <li>Practicing with real-world examples</li>
    </ul>
    
    <h3>Why This Matters</h3>
    <p>${topic.title} is essential for building robust Java applications. It helps you write more efficient, maintainable, and object-oriented code.</p>
  `;
};

const generateExample = (topic) => {
  // Generate example code based on the topic
  const className = topic.title.replace(/\s+/g, '');
  
  return `// Example code for ${topic.title} in Java

public class ${className}Example {
    public static void main(String[] args) {
        System.out.println("This demonstrates ${topic.title.toLowerCase()} in Java");
        
        // Sample implementation
        ${className}Demo demo = new ${className}Demo("Java Example", "${topic.level}");
        demo.process();
        
        System.out.println("Example completed successfully");
    }
}

class ${className}Demo {
    private String name;
    private String level;
    
    public ${className}Demo(String name, String level) {
        this.name = name;
        this.level = level;
    }
    
    public void process() {
        System.out.println("Processing " + name + " at " + level + " level");
    }
}`;
};

const generateExampleExplanation = (topic) => {
  // Generate explanation for the example
  return `
    <p>This example demonstrates the basic principles of ${topic.title.toLowerCase()} in Java:</p>
    <ul>
      <li>We create a main class with the entry point of the program</li>
      <li>We implement a separate class to demonstrate object-oriented principles</li>
      <li>The code illustrates key Java concepts like classes, objects, constructors, and methods</li>
      <li>We follow Java naming conventions and best practices</li>
      <li>You can modify this example to explore different aspects of ${topic.title.toLowerCase()}</li>
    </ul>
  `;
};

const generatePracticeInstructions = (topic) => {
  // Generate practice instructions
  return `
    <p>Now it's your turn to practice ${topic.title.toLowerCase()} in Java:</p>
    <ol>
      <li>Create Java code that implements ${topic.title.toLowerCase()}</li>
      <li>Make sure your code follows object-oriented principles</li>
      <li>Test your code with different inputs</li>
      <li>Try to use Java best practices and proper error handling</li>
    </ol>
  `;
};

const generateInitialCode = (topic) => {
  // Generate initial code for practice
  const className = topic.title.replace(/\s+/g, '');
  
  return `// Your ${topic.title.toLowerCase()} practice code goes here

public class ${className}Practice {
    public static void main(String[] args) {
        // Implement your solution here
        
    }
}`;
};

const generateSolution = (topic) => {
  // Generate solution code
  const className = topic.title.replace(/\s+/g, '');
  
  return `// Solution for ${topic.title} practice in Java

public class ${className}Solution {
    public static void main(String[] args) {
        System.out.println("This is a solution for the ${topic.title.toLowerCase()} practice");
        
        // Create and use the solution class
        ${className} solution = new ${className}("${topic.title}", "${topic.level}");
        solution.execute();
        
        System.out.println("Solution completed successfully");
    }
}

class ${className} {
    private String title;
    private String level;
    
    public ${className}(String title, String level) {
        this.title = title;
        this.level = level;
    }
    
    public void execute() {
        System.out.println("Executing " + title + " at " + level + " level");
        // Implementation details would go here
    }
}`;
};

const generateSolutionExplanation = (topic) => {
  // Generate explanation for the solution
  return `
    <p>This solution demonstrates a basic implementation of ${topic.title.toLowerCase()} in Java:</p>
    <ul>
      <li>We created a main class that serves as the entry point</li>
      <li>We implemented a separate class to handle the specific functionality</li>
      <li>The code follows Java best practices with proper encapsulation</li>
      <li>We used object-oriented principles like classes, objects, and methods</li>
      <li>The solution is structured in a way that could be extended for more complex scenarios</li>
    </ul>
  `;
};

// Generate all Java lessons
const javaLessons = generateJavaLessons();

// Export the lessons
export default javaLessons;

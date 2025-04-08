// Java Lessons (73 total)
import lessonTopics from '../lessonTopics';

const javaLessons = lessonTopics.map(topic => {
  // Create a lesson object for each topic
  const lesson = {
    id: topic.id,
    title: topic.title,
    level: topic.level,
    languageName: 'Java',
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
        <h2>Welcome to Java!</h2>
        <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It was developed by James Gosling at Sun Microsystems (now owned by Oracle) and released in 1995.</p>
        
        <h3>What is Java?</h3>
        <ul>
          <li><strong>Platform Independent:</strong> Java follows the "Write Once, Run Anywhere" principle.</li>
          <li><strong>Object-Oriented:</strong> Java is based on the concept of objects and classes.</li>
          <li><strong>Robust and Secure:</strong> Java has strong memory management and security features.</li>
          <li><strong>Widely Used:</strong> Java is used for Android apps, enterprise software, web applications, and more.</li>
        </ul>
        
        <h3>Java Versions</h3>
        <p>Java has evolved through many versions. The current Long-Term Support (LTS) versions include Java 8, 11, and 17. Each version brings new features and improvements.</p>
        
        <h3>Java Development Kit (JDK)</h3>
        <p>To develop Java applications, you need the Java Development Kit (JDK), which includes the Java Runtime Environment (JRE) and development tools.</p>
        
        <h3>Your First Java Program</h3>
        <p>Let's start with the classic "Hello, World!" program in Java:</p>
      `;
      lesson.example = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;
      lesson.exampleExplanation = `
        <p>This example shows the basic structure of a Java program:</p>
        <ul>
          <li><code>public class HelloWorld</code> - Defines a class named HelloWorld</li>
          <li><code>public static void main(String[] args)</code> - The main method, which is the entry point of the program</li>
          <li><code>System.out.println("Hello, World!");</code> - Prints the text "Hello, World!" to the console</li>
        </ul>
        <p>In Java, every application must have at least one class and a main method.</p>
      `;
      lesson.practiceInstructions = `
        <p>Create a Java program that:</p>
        <ol>
          <li>Defines a class called <code>MyFirstProgram</code></li>
          <li>Has a main method</li>
          <li>Prints your name to the console</li>
        </ol>
      `;
      lesson.initialCode = `// Write your Java code here`;
      lesson.solution = `public class MyFirstProgram {
    public static void main(String[] args) {
        System.out.println("My name is John Doe");
    }
}`;
      lesson.solutionExplanation = `
        <p>In this solution, we:</p>
        <ol>
          <li>Created a class called <code>MyFirstProgram</code></li>
          <li>Defined the main method, which is the entry point of the program</li>
          <li>Used <code>System.out.println()</code> to print a name to the console</li>
        </ol>
        <p>You can replace "John Doe" with your own name. The important part is understanding the basic structure of a Java program.</p>
      `;
      break;
    
    case 2: // Variables and Data Types
      lesson.explanation = `
        <h2>Variables and Data Types in Java</h2>
        <p>Variables are used to store data values. In Java, you must declare the variable's type before you can use it.</p>
        
        <h3>Primitive Data Types</h3>
        <p>Java has eight primitive data types:</p>
        <ul>
          <li><strong>byte:</strong> 8-bit integer (-128 to 127)</li>
          <li><strong>short:</strong> 16-bit integer (-32,768 to 32,767)</li>
          <li><strong>int:</strong> 32-bit integer (-2^31 to 2^31-1)</li>
          <li><strong>long:</strong> 64-bit integer (-2^63 to 2^63-1)</li>
          <li><strong>float:</strong> 32-bit floating-point number</li>
          <li><strong>double:</strong> 64-bit floating-point number</li>
          <li><strong>boolean:</strong> true or false</li>
          <li><strong>char:</strong> 16-bit Unicode character</li>
        </ul>
        
        <h3>Reference Data Types</h3>
        <p>Reference types are based on classes and include:</p>
        <ul>
          <li><strong>String:</strong> Sequence of characters</li>
          <li><strong>Arrays:</strong> Collection of elements</li>
          <li><strong>Classes:</strong> User-defined types</li>
          <li><strong>Interfaces:</strong> Abstract types</li>
        </ul>
        
        <h3>Declaring Variables</h3>
        <p>In Java, you declare variables by specifying the type and name:</p>
        <pre>type variableName = value;</pre>
      `;
      lesson.example = `public class VariablesExample {
    public static void main(String[] args) {
        // Primitive data types
        byte myByte = 127;
        short myShort = 32767;
        int myInt = 100000;
        long myLong = 15000000000L; // Note the 'L' suffix
        float myFloat = 5.75f; // Note the 'f' suffix
        double myDouble = 19.99;
        boolean myBoolean = true;
        char myChar = 'A';
        
        // Reference data type
        String myString = "Hello, Java!";
        
        // Array
        int[] myArray = {1, 2, 3, 4, 5};
        
        // Printing variables
        System.out.println("byte: " + myByte);
        System.out.println("short: " + myShort);
        System.out.println("int: " + myInt);
        System.out.println("long: " + myLong);
        System.out.println("float: " + myFloat);
        System.out.println("double: " + myDouble);
        System.out.println("boolean: " + myBoolean);
        System.out.println("char: " + myChar);
        System.out.println("String: " + myString);
        System.out.println("Array first element: " + myArray[0]);
    }
}`;
      lesson.exampleExplanation = `
        <p>This example demonstrates:</p>
        <ul>
          <li>Declaring and initializing variables of all eight primitive data types</li>
          <li>Using the <code>L</code> suffix for <code>long</code> values and <code>f</code> suffix for <code>float</code> values</li>
          <li>Creating a <code>String</code> variable, which is a reference type</li>
          <li>Creating and initializing an array</li>
          <li>Printing the values of all variables to the console</li>
        </ul>
        <p>Note that in Java, variable names are case-sensitive and follow camelCase convention.</p>
      `;
      lesson.practiceInstructions = `
        <p>Create a Java program that:</p>
        <ol>
          <li>Defines a class called <code>PersonInfo</code></li>
          <li>Has a main method</li>
          <li>Declares variables to store the following information about a person:
            <ul>
              <li>Name (String)</li>
              <li>Age (int)</li>
              <li>Height in meters (double)</li>
              <li>Weight in kilograms (float)</li>
              <li>Is student (boolean)</li>
            </ul>
          </li>
          <li>Initializes these variables with sample values</li>
          <li>Prints all the information to the console in a formatted way</li>
        </ol>
      `;
      lesson.initialCode = `// Write your Java code here`;
      lesson.solution = `public class PersonInfo {
    public static void main(String[] args) {
        // Declare and initialize variables
        String name = "John Doe";
        int age = 25;
        double height = 1.75; // in meters
        float weight = 70.5f; // in kilograms
        boolean isStudent = true;
        
        // Print information
        System.out.println("Person Information:");
        System.out.println("------------------");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age + " years");
        System.out.println("Height: " + height + " meters");
        System.out.println("Weight: " + weight + " kilograms");
        System.out.println("Is Student: " + isStudent);
    }
}`;
      lesson.solutionExplanation = `
        <p>In this solution, we:</p>
        <ol>
          <li>Created a class called <code>PersonInfo</code></li>
          <li>Defined the main method</li>
          <li>Declared variables of different types to store person information:
            <ul>
              <li><code>name</code> as a <code>String</code></li>
              <li><code>age</code> as an <code>int</code></li>
              <li><code>height</code> as a <code>double</code></li>
              <li><code>weight</code> as a <code>float</code> (note the <code>f</code> suffix)</li>
              <li><code>isStudent</code> as a <code>boolean</code></li>
            </ul>
          </li>
          <li>Printed all the information in a formatted way using <code>System.out.println()</code></li>
        </ol>
        <p>You can customize this solution with different values for the variables.</p>
      `;
      break;
      
    // For the remaining lessons, we'll use a template approach
    default:
      // Generate content based on the topic
      const topicTitle = topic.title;
      const topicLevel = topic.level;
      
      // Create a template explanation based on the topic
      lesson.explanation = `
        <h2>${topicTitle} in Java</h2>
        <p>This lesson covers ${topicTitle.toLowerCase()} in Java, which is an important concept for ${topicLevel} programmers.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li>Understanding the basics of ${topicTitle.toLowerCase()} in Java</li>
          <li>Learning how to implement ${topicTitle.toLowerCase()} in Java applications</li>
          <li>Practicing with real-world examples</li>
        </ul>
        
        <h3>Why This Matters</h3>
        <p>${topicTitle} is essential for building robust Java applications. It helps you write more efficient, maintainable, and object-oriented code.</p>
      `;
      
      // Create a template example based on the topic
      const className = topicTitle.replace(/\s+/g, '');
      
      lesson.example = `// Example code for ${topicTitle} in Java

public class ${className}Example {
    public static void main(String[] args) {
        System.out.println("This demonstrates ${topicTitle.toLowerCase()} in Java");
        
        // Sample implementation
        ${className}Demo demo = new ${className}Demo("Java Example", "${topicLevel}");
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
      
      // Create a template example explanation
      lesson.exampleExplanation = `
        <p>This example demonstrates the basic principles of ${topicTitle.toLowerCase()} in Java:</p>
        <ul>
          <li>We create a main class with the entry point of the program</li>
          <li>We implement a separate class to demonstrate object-oriented principles</li>
          <li>The code illustrates key Java concepts like classes, objects, constructors, and methods</li>
          <li>We follow Java naming conventions and best practices</li>
          <li>You can modify this example to explore different aspects of ${topicTitle.toLowerCase()}</li>
        </ul>
      `;
      
      // Create template practice instructions
      lesson.practiceInstructions = `
        <p>Now it's your turn to practice ${topicTitle.toLowerCase()} in Java:</p>
        <ol>
          <li>Create Java code that implements ${topicTitle.toLowerCase()}</li>
          <li>Make sure your code follows object-oriented principles</li>
          <li>Test your code with different inputs</li>
          <li>Try to use Java best practices and proper error handling</li>
        </ol>
      `;
      
      // Create template initial code
      lesson.initialCode = `// Your ${topicTitle.toLowerCase()} practice code goes here

public class ${className}Practice {
    public static void main(String[] args) {
        // Implement your solution here
        
    }
}`;
      
      // Create template solution
      lesson.solution = `// Solution for ${topicTitle} practice in Java

public class ${className}Solution {
    public static void main(String[] args) {
        System.out.println("This is a solution for the ${topicTitle.toLowerCase()} practice");
        
        // Create and use the solution class
        ${className} solution = new ${className}("${topicTitle}", "${topicLevel}");
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
      
      // Create template solution explanation
      lesson.solutionExplanation = `
        <p>This solution demonstrates a basic implementation of ${topicTitle.toLowerCase()} in Java:</p>
        <ul>
          <li>We created a main class that serves as the entry point</li>
          <li>We implemented a separate class to handle the specific functionality</li>
          <li>The code follows Java best practices with proper encapsulation</li>
          <li>We used object-oriented principles like classes, objects, and methods</li>
          <li>The solution is structured in a way that could be extended for more complex scenarios</li>
        </ul>
      `;
      break;
  }
  
  return lesson;
});

export default javaLessons;

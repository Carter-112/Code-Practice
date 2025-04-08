// Java Lessons (73 total)
const javaLessons = [
  // Lesson 1: Introduction to Java
  {
    title: "Introduction to Java",
    explanation: `
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
    `,
    example: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    exampleExplanation: `
      <p>This example shows the basic structure of a Java program:</p>
      <ul>
        <li><code>public class HelloWorld</code> - Defines a class named HelloWorld</li>
        <li><code>public static void main(String[] args)</code> - The main method, which is the entry point of the program</li>
        <li><code>System.out.println("Hello, World!");</code> - Prints the text "Hello, World!" to the console</li>
      </ul>
      <p>In Java, every application must have at least one class and a main method.</p>
    `,
    practiceInstructions: `
      <p>Create a Java program that:</p>
      <ol>
        <li>Defines a class called <code>MyFirstProgram</code></li>
        <li>Has a main method</li>
        <li>Prints your name to the console</li>
      </ol>
    `,
    initialCode: `// Write your Java code here`,
    solution: `public class MyFirstProgram {
    public static void main(String[] args) {
        System.out.println("My name is John Doe");
    }
}`,
    solutionExplanation: `
      <p>In this solution, we:</p>
      <ol>
        <li>Created a class called <code>MyFirstProgram</code></li>
        <li>Defined the main method, which is the entry point of the program</li>
        <li>Used <code>System.out.println()</code> to print a name to the console</li>
      </ol>
      <p>You can replace "John Doe" with your own name. The important part is understanding the basic structure of a Java program.</p>
    `
  },
  
  // Add more lessons here...
  // For brevity, I'm including just 1 lesson as an example
];

// Fill in the remaining lessons with placeholders
for (let i = javaLessons.length; i < 73; i++) {
  javaLessons.push({
    title: `Java Lesson ${i + 1}`,
    explanation: `<p>This is the explanation for Java Lesson ${i + 1}.</p>`,
    example: `// Example code for Lesson ${i + 1}
public class Example${i + 1} {
    public static void main(String[] args) {
        System.out.println("This is example code for Lesson ${i + 1}");
    }
}`,
    exampleExplanation: `<p>This is the explanation for the example in Lesson ${i + 1}.</p>`,
    practiceInstructions: `<p>Practice instructions for Lesson ${i + 1}.</p>`,
    initialCode: `// Initial code for Lesson ${i + 1}`,
    solution: `// Solution code for Lesson ${i + 1}
public class Solution${i + 1} {
    public static void main(String[] args) {
        System.out.println("This is the solution for Lesson ${i + 1}");
    }
}`,
    solutionExplanation: `<p>This is the explanation for the solution in Lesson ${i + 1}.</p>`
  });
}

export default javaLessons;

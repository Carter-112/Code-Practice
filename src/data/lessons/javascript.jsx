// JavaScript Lessons (73 total)
import lessonTopics from '../lessonTopics';

const javascriptLessons = lessonTopics.map(topic => {
  // Create a lesson object for each topic
  const lesson = {
    id: topic.id,
    title: topic.title,
    level: topic.level,
    languageName: 'JavaScript',
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
      `;
      lesson.example = `// External JavaScript file (script.js)
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
</html>`;
      lesson.exampleExplanation = `
        <p>This example shows:</p>
        <ul>
          <li>An external JavaScript file with a function called greet()</li>
          <li>How to link the JavaScript file to an HTML document using the script element</li>
          <li>How to call a JavaScript function when a button is clicked using the onclick attribute</li>
        </ul>
      `;
      lesson.practiceInstructions = `
        <p>Write a JavaScript function that:</p>
        <ol>
          <li>Creates a function called <code>sayHello</code></li>
          <li>The function should take a name parameter</li>
          <li>The function should return a greeting message with the name</li>
          <li>Call the function with your name and log the result to the console</li>
        </ol>
      `;
      lesson.initialCode = `// Write your JavaScript code here`;
      lesson.solution = `// JavaScript function
function sayHello(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}

// Call the function and log the result
console.log(sayHello("John"));`;
      lesson.solutionExplanation = `
        <p>In this solution, we:</p>
        <ol>
          <li>Created a function called <code>sayHello</code> that takes a name parameter</li>
          <li>The function returns a string that combines "Hello, " with the name and a welcome message</li>
          <li>We called the function with the name "John" and logged the result to the console</li>
          <li>You can replace "John" with your own name</li>
        </ol>
        <p>This demonstrates basic function creation, string concatenation, and console logging in JavaScript.</p>
      `;
      break;

    case 2: // Variables and Data Types
      lesson.explanation = `
        <h2>Variables and Data Types in JavaScript</h2>
        <p>Variables are used to store data values. In JavaScript, you can declare variables using <code>var</code>, <code>let</code>, or <code>const</code>.</p>

        <h3>Declaring Variables</h3>
        <ul>
          <li><strong>var:</strong> Function-scoped variable (older way)</li>
          <li><strong>let:</strong> Block-scoped variable that can be reassigned</li>
          <li><strong>const:</strong> Block-scoped variable that cannot be reassigned</li>
        </ul>

        <h3>Basic Data Types</h3>
        <ul>
          <li><strong>String:</strong> Text values, enclosed in quotes (single or double)</li>
          <li><strong>Number:</strong> Numeric values (integers and floating-point)</li>
          <li><strong>Boolean:</strong> true or false values</li>
          <li><strong>Undefined:</strong> A variable that has been declared but not assigned a value</li>
          <li><strong>Null:</strong> Represents the intentional absence of any value</li>
          <li><strong>Symbol:</strong> Unique and immutable primitive value (ES6)</li>
          <li><strong>BigInt:</strong> For integers larger than Number can represent (ES2020)</li>
        </ul>

        <h3>Complex Data Types</h3>
        <ul>
          <li><strong>Object:</strong> Collection of key-value pairs</li>
          <li><strong>Array:</strong> Ordered list of values</li>
          <li><strong>Function:</strong> Reusable block of code</li>
        </ul>

        <h3>Type Checking</h3>
        <p>You can check the data type of a variable using the <code>typeof</code> operator.</p>
      `;
      lesson.example = `// Variable declarations
var oldWay = "Using var"; // Function-scoped
let modern = "Using let"; // Block-scoped
const constant = "Cannot be reassigned"; // Block-scoped, cannot be reassigned

// Basic data types
let name = "Alice"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let job = undefined; // Undefined
let salary = null; // Null

// Complex data types
let person = { // Object
  firstName: "Alice",
  lastName: "Smith",
  age: 30
};

let colors = ["red", "green", "blue"]; // Array

// Function
function greet(name) {
  return "Hello, " + name;
}

// Type checking
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof job); // "undefined"
console.log(typeof salary); // "object" (this is a known quirk in JavaScript)
console.log(typeof person); // "object"
console.log(typeof colors); // "object" (arrays are objects in JavaScript)
console.log(typeof greet); // "function"`;
      lesson.exampleExplanation = `
        <p>This example demonstrates:</p>
        <ul>
          <li>Different ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code></li>
          <li>Basic data types: strings, numbers, booleans, undefined, and null</li>
          <li>Complex data types: objects, arrays, and functions</li>
          <li>Using the <code>typeof</code> operator to check data types</li>
        </ul>
        <p>Note: There are some quirks in JavaScript's type system. For example, <code>typeof null</code> returns "object", which is considered a bug in the language.</p>
      `;
      lesson.practiceInstructions = `
        <p>Create the following variables:</p>
        <ol>
          <li>A constant called <code>PI</code> with the value 3.14159</li>
          <li>A variable called <code>userName</code> with your name as a string</li>
          <li>A variable called <code>userAge</code> with a number</li>
          <li>A variable called <code>isLoggedIn</code> with a boolean value</li>
          <li>An object called <code>userProfile</code> with properties for name, age, and email</li>
          <li>An array called <code>favoriteColors</code> with at least three colors</li>
          <li>Print the type of each variable using <code>typeof</code></li>
        </ol>
      `;
      lesson.initialCode = `// Create your variables here

// Print the types`;
      lesson.solution = `// Create your variables here
const PI = 3.14159;
let userName = "John Doe";
let userAge = 25;
let isLoggedIn = true;

let userProfile = {
  name: "John Doe",
  age: 25,
  email: "john@example.com"
};

let favoriteColors = ["blue", "green", "purple"];

// Print the types
console.log(typeof PI); // "number"
console.log(typeof userName); // "string"
console.log(typeof userAge); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof userProfile); // "object"
console.log(typeof favoriteColors); // "object"

// Bonus: Check if favoriteColors is an array
console.log(Array.isArray(favoriteColors)); // true`;
      lesson.solutionExplanation = `
        <p>In this solution, we:</p>
        <ul>
          <li>Created a constant <code>PI</code> with the value 3.14159</li>
          <li>Created variables for <code>userName</code>, <code>userAge</code>, and <code>isLoggedIn</code> with appropriate data types</li>
          <li>Created an object <code>userProfile</code> with name, age, and email properties</li>
          <li>Created an array <code>favoriteColors</code> with three colors</li>
          <li>Used <code>typeof</code> to check the data type of each variable</li>
          <li>Added a bonus check using <code>Array.isArray()</code> to properly identify the array (since <code>typeof</code> returns "object" for arrays)</li>
        </ul>
        <p>You can customize this solution with your own values for the variables.</p>
      `;
      break;

    case 3: // Basic Operators
      lesson.explanation = `
        <h2>Basic Operators in JavaScript</h2>
        <p>Operators are symbols that perform operations on variables and values. JavaScript has several types of operators that allow you to manipulate data in various ways.</p>

        <h3>Arithmetic Operators</h3>
        <p>These operators perform mathematical calculations:</p>
        <ul>
          <li><strong>+ (Addition):</strong> Adds numbers or concatenates strings</li>
          <li><strong>- (Subtraction):</strong> Subtracts numbers</li>
          <li><strong>* (Multiplication):</strong> Multiplies numbers</li>
          <li><strong>/ (Division):</strong> Divides numbers</li>
          <li><strong>% (Modulus):</strong> Returns the division remainder</li>
          <li><strong>** (Exponentiation):</strong> Raises to the power of (ES2016)</li>
          <li><strong>++ (Increment):</strong> Increases a value by 1</li>
          <li><strong>-- (Decrement):</strong> Decreases a value by 1</li>
        </ul>

        <h3>Assignment Operators</h3>
        <p>These operators assign values to variables:</p>
        <ul>
          <li><strong>= (Assignment):</strong> Assigns a value</li>
          <li><strong>+= (Addition assignment):</strong> Adds and assigns</li>
          <li><strong>-= (Subtraction assignment):</strong> Subtracts and assigns</li>
          <li><strong>*= (Multiplication assignment):</strong> Multiplies and assigns</li>
          <li><strong>/= (Division assignment):</strong> Divides and assigns</li>
          <li><strong>%= (Modulus assignment):</strong> Takes modulus and assigns</li>
        </ul>

        <h3>Comparison Operators</h3>
        <p>These operators compare values and return a boolean result:</p>
        <ul>
          <li><strong>== (Equal to):</strong> Compares values (with type conversion)</li>
          <li><strong>=== (Strict equal to):</strong> Compares values and types</li>
          <li><strong>!= (Not equal to):</strong> Compares inequality (with type conversion)</li>
          <li><strong>!== (Strict not equal to):</strong> Compares inequality of values and types</li>
          <li><strong>> (Greater than):</strong> Checks if left value is greater than right</li>
          <li><strong>< (Less than):</strong> Checks if left value is less than right</li>
          <li><strong>>= (Greater than or equal to):</strong> Checks if left value is greater than or equal to right</li>
          <li><strong><= (Less than or equal to):</strong> Checks if left value is less than or equal to right</li>
        </ul>

        <h3>Logical Operators</h3>
        <p>These operators perform logical operations:</p>
        <ul>
          <li><strong>&& (Logical AND):</strong> Returns true if both operands are true</li>
          <li><strong>|| (Logical OR):</strong> Returns true if at least one operand is true</li>
          <li><strong>! (Logical NOT):</strong> Returns the opposite boolean value</li>
        </ul>
      `;
      lesson.example = `// Arithmetic Operators
let a = 10;
let b = 3;

let sum = a + b;        // 13
let difference = a - b;  // 7
let product = a * b;     // 30
let quotient = a / b;    // 3.3333...
let remainder = a % b;   // 1
let power = a ** b;      // 1000

let counter = 0;
counter++;              // Increment: counter is now 1
counter--;              // Decrement: counter is back to 0

// Assignment Operators
let x = 5;
x += 3;                 // Same as: x = x + 3 (x is now 8)
x -= 2;                 // Same as: x = x - 2 (x is now 6)
x *= 4;                 // Same as: x = x * 4 (x is now 24)
x /= 3;                 // Same as: x = x / 3 (x is now 8)
x %= 5;                 // Same as: x = x % 5 (x is now 3)

// Comparison Operators
let p = 5;
let q = '5';
let r = 8;

console.log(p == q);    // true (equal value, different type)
console.log(p === q);   // false (different type)
console.log(p != r);    // true (different value)
console.log(p !== q);   // true (different type)
console.log(p > 3);     // true (5 is greater than 3)
console.log(p < r);     // true (5 is less than 8)
console.log(r >= 8);    // true (8 is greater than or equal to 8)
console.log(p <= 4);    // false (5 is not less than or equal to 4)

// Logical Operators
let isAdult = true;
let hasLicense = false;

let canDrive = isAdult && hasLicense;  // false (both must be true)
let canVote = isAdult || hasLicense;   // true (at least one is true)
let isMinor = !isAdult;                // false (opposite of true)

// String Concatenation with +
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"

// Type Coercion
console.log(5 + "5");   // "55" (number is converted to string)
console.log("5" - 2);   // 3 (string is converted to number)
console.log("5" * "2"); // 10 (strings are converted to numbers)`;
      lesson.exampleExplanation = `
        <p>This example demonstrates various operators in JavaScript:</p>
        <ul>
          <li><strong>Arithmetic Operators:</strong> Perform mathematical calculations like addition, subtraction, multiplication, division, modulus, and exponentiation.</li>
          <li><strong>Increment/Decrement:</strong> <code>++</code> increases a value by 1, while <code>--</code> decreases it by 1.</li>
          <li><strong>Assignment Operators:</strong> Combine an operation with assignment (like <code>+=</code>, <code>-=</code>).</li>
          <li><strong>Comparison Operators:</strong> Compare values and return boolean results.
            <ul>
              <li>Note the difference between <code>==</code> (equality with type conversion) and <code>===</code> (strict equality without type conversion).</li>
            </ul>
          </li>
          <li><strong>Logical Operators:</strong> <code>&&</code> (AND), <code>||</code> (OR), and <code>!</code> (NOT) for boolean logic.</li>
          <li><strong>String Concatenation:</strong> The <code>+</code> operator can join strings together.</li>
          <li><strong>Type Coercion:</strong> JavaScript automatically converts types in certain operations, which can sometimes lead to unexpected results.</li>
        </ul>
      `;
      lesson.practiceInstructions = `
        <p>Create a JavaScript program that:</p>
        <ol>
          <li>Declares two number variables with different values</li>
          <li>Performs all arithmetic operations on these numbers and logs the results</li>
          <li>Uses at least three different assignment operators</li>
          <li>Compares the two numbers using at least four different comparison operators</li>
          <li>Creates two boolean variables and demonstrates all three logical operators</li>
          <li>Shows an example of string concatenation</li>
          <li>Demonstrates at least one example of type coercion</li>
        </ol>
        <p>Add comments to explain each operation.</p>
      `;
      lesson.initialCode = `// Declare your variables here

// Arithmetic operations

// Assignment operators

// Comparison operators

// Logical operators

// String concatenation

// Type coercion`;
      lesson.solution = `// Declare two number variables
let num1 = 15;
let num2 = 4;

// Arithmetic operations
console.log("Arithmetic Operations:");
console.log("Addition: " + (num1 + num2));        // 19
console.log("Subtraction: " + (num1 - num2));     // 11
console.log("Multiplication: " + (num1 * num2));  // 60
console.log("Division: " + (num1 / num2));        // 3.75
console.log("Modulus: " + (num1 % num2));         // 3 (remainder of 15/4)
console.log("Exponentiation: " + (num1 ** num2)); // 50625 (15^4)

// Assignment operators
console.log("\nAssignment Operators:");
let x = 10;
console.log("Initial x: " + x);                   // 10
x += 5;  // Add and assign
console.log("After x += 5: " + x);                // 15
x *= 2;  // Multiply and assign
console.log("After x *= 2: " + x);                // 30
x %= 7;  // Modulus and assign
console.log("After x %= 7: " + x);                // 2 (remainder of 30/7)

// Comparison operators
console.log("\nComparison Operators:");
console.log("num1 == num2: " + (num1 == num2));   // false (15 is not equal to 4)
console.log("num1 != num2: " + (num1 != num2));   // true (15 is not equal to 4)
console.log("num1 > num2: " + (num1 > num2));     // true (15 is greater than 4)
console.log("num1 <= num2: " + (num1 <= num2));   // false (15 is not less than or equal to 4)

// Logical operators
console.log("\nLogical Operators:");
let isPositive = num1 > 0;  // true (15 is positive)
let isEven = num1 % 2 === 0;  // false (15 is odd)

console.log("isPositive: " + isPositive);         // true
console.log("isEven: " + isEven);                 // false
console.log("AND: " + (isPositive && isEven));    // false (both must be true)
console.log("OR: " + (isPositive || isEven));     // true (at least one is true)
console.log("NOT: " + (!isPositive));             // false (opposite of true)

// String concatenation
console.log("\nString Concatenation:");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name: " + fullName);            // "John Doe"

// Type coercion
console.log("\nType Coercion:");
console.log("'5' + 2 = " + ('5' + 2));           // "52" (number converted to string)
console.log("'5' - 2 = " + ('5' - 2));           // 3 (string converted to number)
console.log("'5' * '2' = " + ('5' * '2'));       // 10 (strings converted to numbers)
console.log("'5' == 5: " + ('5' == 5));           // true (type coercion happens)
console.log("'5' === 5: " + ('5' === 5));         // false (strict equality, no coercion)`;
      lesson.solutionExplanation = `
        <p>This solution demonstrates:</p>
        <ul>
          <li><strong>Arithmetic Operators:</strong> Addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponentiation (**)</li>
          <li><strong>Assignment Operators:</strong> Basic assignment (=), addition assignment (+=), multiplication assignment (*=), and modulus assignment (%=)</li>
          <li><strong>Comparison Operators:</strong> Equal to (==), not equal to (!=), greater than (>), and less than or equal to (<=)</li>
          <li><strong>Logical Operators:</strong> AND (&&), OR (||), and NOT (!)</li>
          <li><strong>String Concatenation:</strong> Using the + operator to join strings</li>
          <li><strong>Type Coercion:</strong> Several examples showing how JavaScript automatically converts types in operations</li>
        </ul>
        <p>The solution includes detailed comments and console.log statements to explain each operation and show the results. It also demonstrates how the same operator (like +) can behave differently depending on the operand types.</p>
      `;
      break;

    // For the remaining lessons, we'll use a template approach
    default:
      // Generate content based on the topic
      const topicTitle = topic.title;
      const topicLevel = topic.level;

      // Create a template explanation based on the topic
      lesson.explanation = `
        <h2>${topicTitle} in JavaScript</h2>
        <p>This lesson covers ${topicTitle.toLowerCase()} in JavaScript, which is an important concept for ${topicLevel} web developers.</p>

        <h3>Key Concepts</h3>
        <ul>
          <li>Understanding the basics of ${topicTitle.toLowerCase()} in JavaScript</li>
          <li>Learning how to implement ${topicTitle.toLowerCase()} for web interactivity</li>
          <li>Practicing with real-world examples</li>
        </ul>

        <h3>Why This Matters</h3>
        <p>${topicTitle} is essential for creating dynamic and interactive web applications. It helps you build responsive user interfaces and handle complex logic in the browser.</p>
      `;

      // Create a template example based on the topic
      const functionName = topicTitle.toLowerCase().replace(/\s+/g, 'Camel').replace(/[^\w]/g, '');
      const camelCaseName = functionName.charAt(0).toLowerCase() + functionName.slice(1);

      lesson.example = `// Example code for ${topicTitle} in JavaScript

function ${camelCaseName}Example() {
  console.log("This demonstrates ${topicTitle.toLowerCase()} in JavaScript");

  // Sample implementation
  const data = {
    name: "JavaScript Example",
    topic: "${topicTitle}",
    level: "${topicLevel}"
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

      // Create a template example explanation
      lesson.exampleExplanation = `
        <p>This example demonstrates the basic principles of ${topicTitle.toLowerCase()} in JavaScript:</p>
        <ul>
          <li>We create functions that show how to implement ${topicTitle.toLowerCase()}</li>
          <li>The code illustrates key JavaScript concepts like functions, objects, and template literals</li>
          <li>We use modern JavaScript syntax and best practices</li>
          <li>You can modify this example to explore different aspects of ${topicTitle.toLowerCase()}</li>
        </ul>
      `;

      // Create template practice instructions
      lesson.practiceInstructions = `
        <p>Now it's your turn to practice ${topicTitle.toLowerCase()} in JavaScript:</p>
        <ol>
          <li>Create JavaScript code that implements ${topicTitle.toLowerCase()}</li>
          <li>Test your code with different inputs</li>
          <li>Try to use modern JavaScript features and best practices</li>
          <li>Consider how your solution would work in a real web application</li>
        </ol>
      `;

      // Create template initial code
      lesson.initialCode = `// Your ${topicTitle.toLowerCase()} practice code goes here
// Delete this comment and start coding!

function practice() {
  // Implement your solution here
}

// Call your function
practice();`;

      // Create template solution
      lesson.solution = `// Solution for ${topicTitle} practice in JavaScript

function ${camelCaseName}Solution() {
  console.log("This is a solution for the ${topicTitle.toLowerCase()} practice");

  // Sample implementation
  const data = {
    title: "${topicTitle}",
    level: "${topicLevel}",
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

      // Create template solution explanation
      lesson.solutionExplanation = `
        <p>This solution demonstrates a basic implementation of ${topicTitle.toLowerCase()} in JavaScript:</p>
        <ul>
          <li>We created a function that properly implements ${topicTitle.toLowerCase()}</li>
          <li>The code follows JavaScript best practices with clean, maintainable code</li>
          <li>We used modern JavaScript features like template literals, const/let, and object shorthand</li>
          <li>The solution returns a structured result that could be used in a larger application</li>
          <li>You can extend this solution to handle more complex scenarios</li>
        </ul>
      `;
      break;
  }

  return lesson;
});

export default javascriptLessons;

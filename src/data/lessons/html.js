// HTML Lessons (73 total)
import lessonTopics from '../lessonTopics';

const htmlLessons = lessonTopics.map(topic => {
  // Create a lesson object for each topic
  const lesson = {
    id: topic.id,
    title: topic.title,
    level: topic.level,
    languageName: 'HTML',
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
      `;
      lesson.example = `<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first web page.</p>
</body>
</html>`;
      lesson.exampleExplanation = `
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
      `;
      lesson.practiceInstructions = `
        <p>Create a basic HTML document with:</p>
        <ul>
          <li>A title of "About Me"</li>
          <li>A main heading (h1) with your name</li>
          <li>A paragraph introducing yourself</li>
        </ul>
      `;
      lesson.initialCode = `<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>
  
</body>
</html>`;
      lesson.solution = `<!DOCTYPE html>
<html>
<head>
  <title>About Me</title>
</head>
<body>
  <h1>John Doe</h1>
  <p>Hello! My name is John Doe and I'm learning HTML.</p>
</body>
</html>`;
      lesson.solutionExplanation = `
        <p>In this solution, we created a basic HTML document with:</p>
        <ul>
          <li>The document type declaration</li>
          <li>A title "About Me" that appears in the browser tab</li>
          <li>An h1 heading with a name</li>
          <li>A paragraph with a brief introduction</li>
        </ul>
        <p>You can replace "John Doe" with your own name and customize the introduction text.</p>
      `;
      break;
    
    case 2: // HTML Elements
      lesson.explanation = `
        <h2>HTML Elements</h2>
        <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, some content, and an end tag.</p>
        
        <h3>Anatomy of an HTML Element</h3>
        <p>A typical HTML element consists of:</p>
        <ul>
          <li><strong>Opening tag:</strong> The name of the element, wrapped in angle brackets, e.g., <code>&lt;p&gt;</code></li>
          <li><strong>Content:</strong> The content of the element, e.g., text</li>
          <li><strong>Closing tag:</strong> Same as the opening tag, but with a forward slash, e.g., <code>&lt;/p&gt;</code></li>
        </ul>
        
        <h3>Common HTML Elements</h3>
        <ul>
          <li><strong>Headings:</strong> <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></li>
          <li><strong>Paragraphs:</strong> <code>&lt;p&gt;</code></li>
          <li><strong>Links:</strong> <code>&lt;a&gt;</code></li>
          <li><strong>Images:</strong> <code>&lt;img&gt;</code></li>
          <li><strong>Lists:</strong> <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></li>
          <li><strong>Divisions:</strong> <code>&lt;div&gt;</code></li>
          <li><strong>Spans:</strong> <code>&lt;span&gt;</code></li>
        </ul>
        
        <h3>Empty Elements</h3>
        <p>Some elements don't have content or closing tags. These are called empty elements, e.g., <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>.</p>
      `;
      lesson.example = `<!DOCTYPE html>
<html>
<head>
  <title>HTML Elements Example</title>
</head>
<body>
  <!-- Headings -->
  <h1>This is a Heading 1</h1>
  <h2>This is a Heading 2</h2>
  
  <!-- Paragraph -->
  <p>This is a paragraph of text.</p>
  
  <!-- Link -->
  <a href="https://www.example.com">This is a link</a>
  
  <!-- Image -->
  <img src="image.jpg" alt="Description of image">
  
  <!-- Lists -->
  <h3>Unordered List</h3>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  
  <h3>Ordered List</h3>
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  
  <!-- Div and Span -->
  <div>
    This is a div element, which is a block-level container.
    <span>This is a span, which is an inline container.</span>
  </div>
  
  <!-- Empty Elements -->
  <hr>
  Line break: <br>
  Another line after the break.
</body>
</html>`;
      lesson.exampleExplanation = `
        <p>This example demonstrates various HTML elements:</p>
        <ul>
          <li><strong>Headings:</strong> <code>&lt;h1&gt;</code> to <code>&lt;h3&gt;</code> for different levels of headings</li>
          <li><strong>Paragraph:</strong> <code>&lt;p&gt;</code> for text paragraphs</li>
          <li><strong>Link:</strong> <code>&lt;a&gt;</code> with the <code>href</code> attribute to create a hyperlink</li>
          <li><strong>Image:</strong> <code>&lt;img&gt;</code> with <code>src</code> and <code>alt</code> attributes</li>
          <li><strong>Lists:</strong> <code>&lt;ul&gt;</code> for unordered lists, <code>&lt;ol&gt;</code> for ordered lists, and <code>&lt;li&gt;</code> for list items</li>
          <li><strong>Containers:</strong> <code>&lt;div&gt;</code> (block-level) and <code>&lt;span&gt;</code> (inline)</li>
          <li><strong>Empty Elements:</strong> <code>&lt;hr&gt;</code> for a horizontal rule and <code>&lt;br&gt;</code> for a line break</li>
        </ul>
      `;
      lesson.practiceInstructions = `
        <p>Create an HTML document that includes:</p>
        <ol>
          <li>A main heading with the title "My Favorite Things"</li>
          <li>A paragraph introducing the topic</li>
          <li>A subheading called "My Favorite Foods"</li>
          <li>An unordered list with at least 3 favorite foods</li>
          <li>A subheading called "My Favorite Places"</li>
          <li>An ordered list with at least 3 favorite places</li>
          <li>An image (you can use a placeholder URL like "placeholder.jpg")</li>
          <li>A link to a website you like</li>
        </ol>
      `;
      lesson.initialCode = `<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Things</title>
</head>
<body>
  <!-- Your code here -->
  
</body>
</html>`;
      lesson.solution = `<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Things</title>
</head>
<body>
  <h1>My Favorite Things</h1>
  <p>Here are some of my favorite things in the world.</p>
  
  <h2>My Favorite Foods</h2>
  <ul>
    <li>Pizza</li>
    <li>Ice Cream</li>
    <li>Sushi</li>
  </ul>
  
  <h2>My Favorite Places</h2>
  <ol>
    <li>Paris</li>
    <li>Tokyo</li>
    <li>New York</li>
  </ol>
  
  <img src="placeholder.jpg" alt="My favorite place">
  
  <p>Check out my <a href="https://www.example.com">favorite website</a>!</p>
</body>
</html>`;
      lesson.solutionExplanation = `
        <p>In this solution, we created an HTML document that includes:</p>
        <ul>
          <li>A main heading (<code>&lt;h1&gt;</code>) with the title "My Favorite Things"</li>
          <li>A paragraph (<code>&lt;p&gt;</code>) introducing the topic</li>
          <li>Two subheadings (<code>&lt;h2&gt;</code>) for different categories</li>
          <li>An unordered list (<code>&lt;ul&gt;</code>) with three favorite foods</li>
          <li>An ordered list (<code>&lt;ol&gt;</code>) with three favorite places</li>
          <li>An image (<code>&lt;img&gt;</code>) with a placeholder source and alt text</li>
          <li>A link (<code>&lt;a&gt;</code>) to a website</li>
        </ul>
        <p>You can customize this with your own favorite things and add more elements as you like.</p>
      `;
      break;
      
    // For the remaining lessons, we'll use a template approach
    default:
      // Generate content based on the topic
      const topicTitle = topic.title;
      const topicLevel = topic.level;
      
      // Create a template explanation based on the topic
      lesson.explanation = `
        <h2>${topicTitle} in HTML</h2>
        <p>This lesson covers ${topicTitle.toLowerCase()} in HTML, which is an important concept for ${topicLevel} web developers.</p>
        
        <h3>Key Concepts</h3>
        <ul>
          <li>Understanding the basics of ${topicTitle.toLowerCase()} in HTML</li>
          <li>Learning how to implement ${topicTitle.toLowerCase()} in web pages</li>
          <li>Practicing with real-world examples</li>
        </ul>
        
        <h3>Why This Matters</h3>
        <p>${topicTitle} is essential for building well-structured web pages. It helps you create more accessible and maintainable websites.</p>
      `;
      
      // Create a template example based on the topic
      const className = topicTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      lesson.example = `<!DOCTYPE html>
<html>
<head>
  <title>${topicTitle} Example</title>
</head>
<body>
  <h1>${topicTitle} in HTML</h1>
  
  <div class="${className}-example">
    <p>This demonstrates ${topicTitle.toLowerCase()} in HTML</p>
    <!-- Example implementation would go here -->
  </div>
  
  <div class="sample-content">
    <h2>Sample Content</h2>
    <p>This is a sample paragraph to demonstrate HTML structure.</p>
  </div>
</body>
</html>`;
      
      // Create a template example explanation
      lesson.exampleExplanation = `
        <p>This example demonstrates the basic principles of ${topicTitle.toLowerCase()} in HTML:</p>
        <ul>
          <li>We create a basic HTML structure with proper DOCTYPE and HTML tags</li>
          <li>The code illustrates how to implement ${topicTitle.toLowerCase()} in a web page</li>
          <li>We use semantic HTML elements to structure the content</li>
          <li>You can modify this example to explore different aspects of ${topicTitle.toLowerCase()}</li>
        </ul>
      `;
      
      // Create template practice instructions
      lesson.practiceInstructions = `
        <p>Now it's your turn to practice ${topicTitle.toLowerCase()} in HTML:</p>
        <ol>
          <li>Create an HTML document that implements ${topicTitle.toLowerCase()}</li>
          <li>Make sure to use proper HTML structure and semantic elements</li>
          <li>Test your code in a browser to see how it renders</li>
          <li>Try to improve the accessibility and semantics of your HTML</li>
        </ol>
      `;
      
      // Create template initial code
      lesson.initialCode = `<!DOCTYPE html>
<html>
<head>
  <title>${topicTitle} Practice</title>
</head>
<body>
  <h1>${topicTitle} Practice</h1>
  
  <!-- Your code here -->
  
</body>
</html>`;
      
      // Create template solution
      lesson.solution = `<!DOCTYPE html>
<html>
<head>
  <title>${topicTitle} Solution</title>
</head>
<body>
  <h1>${topicTitle} Solution</h1>
  
  <div class="${className}-solution">
    <h2>Implementation of ${topicTitle}</h2>
    <p>This is a solution for the ${topicTitle.toLowerCase()} practice.</p>
    
    <!-- Solution implementation -->
    <section class="example-section">
      <h3>Example Section</h3>
      <p>This demonstrates proper implementation of ${topicTitle.toLowerCase()} in HTML.</p>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    </section>
  </div>
</body>
</html>`;
      
      // Create template solution explanation
      lesson.solutionExplanation = `
        <p>This solution demonstrates a basic implementation of ${topicTitle.toLowerCase()} in HTML:</p>
        <ul>
          <li>We created a well-structured HTML document with proper DOCTYPE and HTML tags</li>
          <li>The solution uses semantic HTML elements like <code>&lt;section&gt;</code> to improve structure</li>
          <li>We included appropriate headings, paragraphs, and lists to demonstrate content hierarchy</li>
          <li>The code follows HTML best practices for ${topicTitle.toLowerCase()}</li>
          <li>You can extend this solution to create more complex web pages</li>
        </ul>
      `;
      break;
  }
  
  return lesson;
});

export default htmlLessons;

import "./App.css";

function App() {
  const QandA = [
    {
      key: 1,
      question: "What is the purpose of the <head> tag in HTML?",
      rightAnswer:
        "The purpose of the <head> tag in HTML is to provide information about the HTML document, such as the title of the page, links to stylesheets and scripts, metadata, and more. It contains elements like <title>, <meta>, and <link>.",
    },
    {
      key: 2,
      question: "How do you create a new paragraph in HTML?",
      answer:
        "To create a new paragraph in HTML, you can use the <p> tag. Simply place the content you want to be in the paragraph between the opening <p> tag and the closing </p> tag.",
    },
    {
      key: 3,
      question:
        "What is the difference between inline and block elements in CSS?",
      answer:
        "In CSS, inline elements are displayed without starting a new line and only occupy the space they need. Examples include <span>, <a>, and <strong>. Block elements, on the other hand, start on a new line and take up the full available width. Examples include <div>, <p>, and <h1> to <h6>.",
    },
    {
      key: 4,
      question:
        "How can you include an external JavaScript file in an HTML document?",
      answer:
        "You can include an external JavaScript file in an HTML document by using the <script> tag with the src attribute. The src attribute specifies the URL or file path of the external JavaScript file. For example: <script src=script.js></script>.",
    },
    {
      key: 5,
      question:
        "What is the purpose of the *DOMContentLoaded* event in JavaScript?",
      answer:
        "The *DOMContentLoaded* event in JavaScript is triggered when the initial HTML document has been completely loaded and parsed. It is commonly used to perform actions that require the DOM (Document Object Model) to be fully constructed before executing JavaScript code.",
    },
    {
      key: 6,
      question: "How do you select an element by its ID using JavaScript?",
      answer:
        "To select an element by its ID using JavaScript, you can use the getElementById() method. For example: document.getElementById(*elementId*).",
    },
    {
      key: 7,
      question: "What is the CSS box model and how does it work?",
      answer:
        "The CSS box model is a way of representing the layout and sizing of elements in CSS. It consists of four main components: content, padding, border, and margin. The content area holds the actual content, while padding adds spacing between the content and the border. The border surrounds the padding and content, and the margin creates spacing around the element.",
    },
    {
      key: 8,
      question: "How do you create a hyperlink in HTML?",
      answer:
        "To create a hyperlink in HTML, you can use the <a> tag. The href attribute specifies the URL or destination of the link. For example: <a href=*https://example.com*>Link</a>.",
    },
    {
      key: 9,
      question:
        "What is the difference between *==* and *===* operators in JavaScript?",
      answer:
        "In JavaScript, the *==* operator is used for loose equality comparison, meaning it performs type coercion if necessary. On the other hand, the *===* operator is used for strict equality comparison, which checks both value and type without performing type coercion.",
    },
    {
      key: 10,
      question: "How do you center align an element horizontally in CSS?",
      answer:
        "To center align an element horizontally in CSS, you can use the margin property with the value auto. For example: margin: 0 auto;.",
    },
    {
      key: 11,
      question: "What is the purpose of the <script> tag in HTML?",
      answer:
        "The <script> tag in HTML is used to embed or reference JavaScript code in an HTML document. It can be placed in the <head> section or the <body> section of the document.",
    },
    {
      key: 12,
      question:
        "How can you change the text content of an HTML element using JavaScript?",
      answer:
        "To change the text content of an HTML element using JavaScript, you can access the element and modify its textContent property. For example: document.getElementById(*elementId*).textContent = *New Text*;.",
    },
    {
      key: 13,
      question: "What is the difference between margin and padding in CSS?",
      answer:
        "In CSS, margin is the space outside an element, creating a gap between it and other elements. Padding, on the other hand, is the space between the content and the border of an element.",
    },
    {
      key: 14,
      question: "How do you add comments in an HTML document?",
      answer:
        "To add comments in an HTML document, you can use the <!-- --> syntax. Anything placed between these comment tags will not be rendered by the browser. For example: <!-- This is a comment -->.",
    },
    {
      key: 15,
      question: "How can you loop through an array in JavaScript?",
      answer:
        "You can loop through an array in JavaScript using various methods such as for loops, forEach() method, map() method, and more. These methods allow you to iterate over each element of the array and perform operations as needed.",
    },
    {
      key: 16,
      question: "What is the purpose of the *float* property in CSS?",
      answer:
        "The *float* property in CSS is used to specify how an element should float or align within its parent container. It is commonly used for creating layouts where elements can be positioned side by side.",
    },
    {
      key: 17,
      question: "How do you define a function in JavaScript?",
      answer:
        "To define a function in JavaScript, you can use the function keyword followed by the function name, parentheses, and curly braces. For example: myFunction () {//body}",
    },
    {
      key: 18,
      question:
        "What is the role of the *href* attribute in an anchor tag in HTML?",
      answer:
        "The *href* attribute in an anchor tag (<a>) in HTML specifies the destination URL or location that the link points to. When a user clicks on the link, they are redirected to the specified URL.",
    },
    {
      key: 19,
      question: "How do you apply a background color to an element in CSS?",
      answer:
        "To apply a background color to an element in CSS, you can use the background-color property. You can set it to a specific color using color names, hexadecimal values, RGB values, or HSL values. For example: background-color: blue;.",
    },
    {
      key: 20,
      question:
        "What is the difference between *let*, *var*, and *const* in JavaScript?",
      answer:
        "In JavaScript, let, var, and const are used to declare variables. The main difference between them is in their scope and hoisting behavior. let and const are used for block-scoping and have block-level scope, while var has function scope. Additionally, let and const are not hoisted to the top of their containing block like var is. let allows variable reassignment, while const creates a read-only, constant variable that cannot be reassigned once it is assigned a value.",
    },
  ];

  return (
    <div className="wrapper">
      <section className="question">
        <div>
          <p>This is the question</p>
          <button>Next question</button>
        </div>
      </section>
      <section className="answer">
        <div className="box">
          <p>This is the answer</p>
          <button>Reveal answer</button>
        </div>
      </section>
    </div>
  );
}

export default App;

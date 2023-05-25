# How can we access HTML elements using the Document Object Model (DOM) in JavaScript?

## Step 1: Setting up the HTML file
Start by creating an HTML file. Open a text editor and create a new file with a .html extension (e.g., index.html). Inside the file, add the necessary HTML structure, including the elements you want to access using JavaScript. For example, let's say we have a simple HTML file with a button and a paragraph element:

```

<!DOCTYPE html>
<html>
  <head>
    <title>DOM Access Tutorial</title>
  </head>
  <body>
    <button id="myButton">Click me!</button>
    <p id="myParagraph">This is a paragraph.</p>

    <script src="script.js"></script>
  </body>
</html>


```

## Step 2: Link the JavaScript file
Create a JavaScript file in the same directory as your HTML file. Name it something like script.js. In your HTML file, add the script tag just before the closing body tag to link the JavaScript file:

```

<script src="script.js"></script>

```

## Step 3: Accessing elements in JavaScript
Open the script.js file in your text editor. This is where we'll write our JavaScript code to access the HTML elements using the DOM. Start by writing the following code to wait for the HTML document to load:

```

document.addEventListener('DOMContentLoaded', function() {
  // Your code here
});

```

## Step 4: Accessing elements by ID
To access an element by its ID, we can use the *'getElementById'* method. Inside the *'DOMContentLoaded'* event listener, add the following code to access the button and paragraph elements we defined earlier:

```

document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('myButton');
  var myParagraph = document.getElementById('myParagraph');
  
  // Your code here
});


```

Now you can use the *'myButton'* and *'myParagraph'* variables to manipulate these elements using JavaScript.

## Step 5: Manipulating element properties
Once you have access to an element, you can modify its properties. For example, let's change the text of the paragraph element when the button is clicked. Add the following code inside the *'DOMContentLoaded'* event listener:

```

document.addEventListener('DOMContentLoaded', function() {
  var myButton = document.getElementById('myButton');
  var myParagraph = document.getElementById('myParagraph');

  myButton.addEventListener('click', function() {
    myParagraph.textContent = 'Button clicked!';
  });
});


```

In this code, we're adding an event listener to the button element so that when it's clicked, the text content of the paragraph element will be changed to "Button clicked!".

## Step 6: Testing the code
Save your HTML and JavaScript files. Open the HTML file in a web browser, and you should see the button and paragraph elements. When you click the button, the text in the paragraph element should change to "Button clicked!".
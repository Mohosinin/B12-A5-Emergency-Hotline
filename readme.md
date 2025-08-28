# JavaScript DOM and Events - Explained Simply

## 1. What is the difference between **getElementById**, **getElementsByClassName**, and **querySelector/querySelectorAll**?

- **getElementById** returns a single element with the exact matching ID. It’s fast but only works for one unique element because IDs should be unique.
  
- **getElementsByClassName** returns a live collection (like an array) of all elements that have the specified class name. If the DOM changes, this collection updates automatically.

- **querySelector** returns the *first* element matching a CSS selector. It’s very flexible because you can use any CSS selector (class, ID, tag, or combinations).

- **querySelectorAll** returns a static list of *all* elements matching a CSS selector. This list does not update if the DOM changes after the call.

---

## 2. How do you **create and insert a new element into the DOM**?

You can create a new element using `document.createElement()`. Then you can set its properties (like text content, classes, attributes) and insert it into the DOM using methods like `appendChild`, `insertBefore`, or `replaceChild`.

Example:

const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, I am new here!';
document.body.appendChild(newDiv); // adds to the end of the <body>


---

## 3. What is **Event Bubbling** and how does it work?

Event bubbling is when an event triggers on an element and then "bubbles up" through its ancestors (parent, grandparent, and so on) all the way up to the document root.

For example, if you click on a button inside a div, the click event happens first on the button, then the div, then its parent elements, unless you stop it. This allows multiple layers to react to the same event.

---

## 4. What is **Event Delegation** in JavaScript? Why is it useful?

Event delegation means setting up an event listener on a *parent* element rather than many individual child elements. Because events bubble, the parent can catch events from all its children.

This is useful because:

- You can manage fewer event listeners (better performance).
- It works well even if child elements are added dynamically in the future.

Example: Instead of putting a click listener on every item in a list, put one on the list container and check which item was clicked.

---

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?

- **preventDefault()** stops the browser’s default behavior for an event. For example, it stops a link from opening its URL or a form from submitting.

- **stopPropagation()** stops the event from bubbling (or capturing) further up or down the DOM tree. It prevents parent or child listeners from being triggered for the same event.

---

This simple understanding helps make DOM manipulation and event handling clearer for everyday coding!

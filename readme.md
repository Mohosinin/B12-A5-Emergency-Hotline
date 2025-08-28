<h1>Answers</h1>
1. Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll
getElementById finds one element by its unique ID.

getElementsByClassName finds all elements with a specific class and gives a live list that updates if the page changes.

querySelector finds the first matching element using any CSS selector.

querySelectorAll finds all matching elements but the list does not update if the page changes.

2. How to create and insert a new element in the DOM
Make a new element with document.createElement().

Add text or attributes to it.

Insert it into the page with appendChild() or similar methods.

Example:

js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);
3. What is Event Bubbling and how does it work?
When you click on an element, the event starts there and then moves up through its parent elements until it reaches the top (document).

4. What is Event Delegation and why is it useful?
Instead of adding event listeners to many child elements, add one listener on their parent. Because events bubble, the parent can catch all child events.
This saves memory and works for new elements added later.

5. Difference between preventDefault() and stopPropagation()
preventDefault() stops the browser’s default action (like opening a link or submitting a form).

stopPropagation() stops the event from moving up or down the DOM tree, so other listeners don’t get triggered.
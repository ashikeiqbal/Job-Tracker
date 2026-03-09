1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById → Selects one element by its id.

getElementsByClassName → Selects all elements with the same class (returns a collection).

querySelector → Selects the first element that matches a CSS selector.

querySelectorAll → Selects all elements that match a CSS selector.

2. How do you create and insert a new element into the DOM?

First create the element, then add content, then insert it into the page.

Example:

const div = document.createElement("div");
div.innerText = "Hello World";
document.body.appendChild(div);
3. What is Event Bubbling? And how does it work?

Event bubbling means an event starts from the target element and then moves up to its parent elements.

Example:
If you click a button inside a div →
Button event runs → then div event runs → then body event runs.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of many listeners to child elements.

It is useful because:

Less code

Better performance

Works for dynamically added elements

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() → Stops the browser’s default action.
Example: Stop a form from submitting.

stopPropagation() → Stops the event from bubbling to parent elements.
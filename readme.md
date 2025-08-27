### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById select a single element by its unique id. It gives Single element or null(if there is noting to give) getElementsByClassName select multiple elements that has the same class. It gives HTMLCollection. querySelector Selects the first element that matches a CSS selector. It give a single element or null. querySelectorAll Selects all elements that match the CSS selector.It gives a NodeList. We can use forEach() for this NodeList**

---

### 2. How do you create and insert a new element into the DOM?

- **First we create a new element by document.createElement("tag name"). Then we can add content in this tag by .innerHTML & .innerText . Then we can add id, class, or style to this element. Then we can insert it into DOM by .appendChild() method**

---

### 3. What is Event Bubbling and how does it work?

- **In JavaScript, when an event is triggered, it first reaches the target element, and then it propagates upward to its parent, then their parents until it reaches the document object. This mechanism is called Event Bubbling.**
- **How it works: When we perform any action(like click) , that element becomes the targeted element. Then event triggers on that targeted element. Then it propagates upward to its parent, then their parents until it reaches the document object.**

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

- **Event Delegation in JavaScript is when you add event listener to the parent element instead of giving it to its child elements.**
- **How It works: we add event listener to the parent of the targeted child elements. When the child elements are clicked it goes to the parent by event bubbling.In this event listener We can handle the targeted child accordingly**

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault() stops the default action of an element from happening. But it does not stop event propagation. stopPropagation() stops the event from bubbling up. But it does not prevent default actions.**

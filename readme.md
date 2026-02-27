1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   ===> Using the getElementById we target an particular element which is given an id name.
   USing the getElementsByClassName we target all those elements on which a class name is defined and can store it like an array (html element array).
   We can select any kind of selector using the querySelector. But it will only picks up the first selector it gets from the html elements page.
   the querySelectorAll on the other hand works like querySelector except it picks up every selector from the html elements page regarding the given selector into the braces.

2. How do you create and insert a new element into the DOM?
   ===> To create a element first I will use document.createElement() method and after that I will use appendChild() method on the parent element to insert it in the parent element as a child.

3. What is Event Bubbling? And how does it work?
   ===> When an event happens on a child element it also triggers the same event on its parent then the parent’s parent and continues up to the top of the page like a tree.

4. What is Event Delegation in JavaScript? Why is it useful?
   ===> It's a technique where I can use a single eventListener instead of using multiple eventListener. It keeps code cleaner, improves performance and reduces memory usage.

5. What is the difference between preventDefault() and stopPropagation() methods?
   ===> preventDefault() stops the default behavior of the browser for an event.
   stopPropagation() stops the event from moving to the parent elements in the DOM.

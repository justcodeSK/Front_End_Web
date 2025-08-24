# 🌐 Frontend Web Development Repository

This repository contains resources, examples, and practice projects related to **frontend web technologies** including **HTML, CSS, JavaScript, jQuery, and Bootstrap**. It serves as a learning hub and a demonstration of core frontend skills required to build modern, responsive, and interactive web applications.  

---

## 📌 Technologies Covered  

### 1️⃣ HTML (HyperText Markup Language)
- The backbone of any webpage.
- Provides **structure** and defines the elements of the web document.
- Common elements:
  - Headings, paragraphs, links, lists
  - Forms, tables, images, multimedia
  - Semantic elements like `<header>`, `<footer>`, `<article>`, `<section>`  

👉 **Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to Frontend Repository</h1>
  <p>This is a basic example of HTML structure.</p>
</body>
</html>
```
### CSS (Cascading Style Sheets)

- Used to style HTML elements.
- Adds colors, layouts, fonts, animations, and responsiveness.
Supports:
- Inline, Internal, and External CSS
- Flexbox & Grid for layouts
- Media queries for responsive design
```bash
body {
  background-color: #121212;
  color: #ffffff;
  font-family: Arial, sans-serif;
}
h1 {
  color: #ff9800;
  text-align: center;
}
```
### JavaScript (JS)

- A programming language that makes web pages interactive.
- Handles dynamic content, form validation, events, and API calls.
- Supports modern ES6+ features like arrow functions, promises, async/await.
Example:
```bash
document.getElementById("btn").addEventListener("click", function() {
  alert("Hello! You clicked the button!");
});
```
### jQuery

- A JavaScript library that simplifies DOM manipulation, event handling, and animations.
- Uses shorter syntax compared to vanilla JS.
- Great for handling AJAX requests and simple UI effects.
Example:
```bash
$(document).ready(function() {
  $("#btn").click(function() {
    $("p").toggle();
  });
});
```
### Bootstrap

- A frontend framework for building responsive and mobile-first websites.
- Provides pre-designed CSS classes and JS components like:
- Navbar, Buttons, Cards
- Grid system for layout
- Modals, Alerts, Carousels
Example:
```bash
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="container text-center mt-5">
  <button class="btn btn-primary">Bootstrap Button</button>
</div>
```
### Features of This Repository

✔️ Organized examples for each technology
✔️ Beginner-friendly and practical demos
✔️ Responsive designs using CSS & Bootstrap
✔️ Interactive scripts using JavaScript & jQuery
✔️ Ready-to-use templates for quick start

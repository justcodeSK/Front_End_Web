#  Front-End Shopping Website

This is a **shopping cart web application** built using **HTML, CSS, JavaScript, jQuery, and Bootstrap**.  
The project fetches product data from a **Fake Store API** and allows users to browse products, add them to the cart, update quantities, remove items, and proceed to checkout.

---

##  Features
✔ Fetches product list dynamically from **[Fake Store API](https://fakestoreapi.com/)**  
✔ Displays products with **image, title, description, and price**  
✔ Add items to the cart with **quantity management**  
✔ Increase / decrease item quantity with **+ and - buttons**  
✔ Update item price dynamically based on quantity  
✔ Remove individual items or clear the entire cart  
✔ Shows **total price** of all items in cart  
✔ Persists cart data using **localStorage** on checkout  
✔ Responsive UI using **Bootstrap**  

---

##  Technologies Used
- **HTML5** – Structure of the website  
- **CSS3** – Styling the product cards and cart  
- **Bootstrap 4/5** – Responsive UI and design  
- **JavaScript (ES6)** – Cart logic & dynamic updates  
- **jQuery** – DOM manipulation and event handling  
- **Fake Store API** – Product data source  

---

##  How It Works
1. **Product Listing**  
   - Products are fetched from `https://fakestoreapi.com/products/`.  
   - Each product card shows **image, title, short description, price, and "Add to Cart" button**.  

2. **Shopping Cart**  
   - When a product is added, it appears in the cart sidebar.  
   - Users can:  
     - Increase or decrease **quantity**  
     - Remove a single item  
     - Clear all items  

3. **Cart Summary**  
   - Displays the total number of items in cart.  
   - Shows the **total price** dynamically.  
   - If the cart is empty → `"Cart is Empty"` message is shown.  

4. **Checkout Process**  
   - On clicking **Checkout**, cart data is stored in `localStorage`.  
   - User is redirected to `bill.html`, where stored items can be retrieved and displayed as a bill.  

---

##  Folder Structure
shopping-site/
│── index.html # Main shopping page
│── bill.html # Checkout / billing page
│── style.css # Custom styles
│── script.js # Core logic (cart & API handling)
│── README.md # Documentation

---

## ▶️ How to Run
1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/shopping-site.git
2. Open index.html in a browser.

3. Browse products and add them to the cart.

4. Update quantities or remove items as needed.

5. Click Checkout to save items and view the bill in bill.html.

### Example Workflow

1. Open website → Product list loads
2. Click Add to Cart on a product
3. Cart opens showing added item
4. Adjust quantity with + / - buttons
5. Click Checkout → Cart items stored in localStorage
6. Redirect to bill.html to view items

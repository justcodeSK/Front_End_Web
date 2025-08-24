#  Magic Box (3×3 Magic Square)

This project is a **web-based Magic Box checker** built with **HTML, CSS, JavaScript (jQuery), and Bootstrap**.  
It allows users to input numbers into a 3×3 grid and check if the numbers form a **Magic Square**.

---

##  What is a Magic Box?
A **Magic Box (Magic Square)** is a square grid where:
- The sum of **all rows, columns, and diagonals** is the same.
- Each number must be **unique** (no duplicates).

Example (3×3 Magic Square):  
8 1 6

3 5 7

4 9 2

|  8  |  1  |  6  |
|-----|-----|-----|
|  3  |  5  |  7  |
|  4  |  9  |  2  |


Every row, column, and diagonal adds up to **15**.

---

##  Features
✔ User can enter numbers into a **3×3 grid**.  
✔ Checks if numbers form a **valid Magic Box**.  
✔ Ensures **no duplicate values** are entered.  
✔ Displays **success (green)** if valid, or **error (red)** if not.  
✔ Built with **Bootstrap UI** for responsiveness.  

---

##  Technologies Used
- **HTML5** – Structure of the web page.  
- **CSS3** – Styling (with custom `magicbox.css`).  
- **Bootstrap 3 & 5** – For responsive design and UI components.  
- **JavaScript (jQuery)** – For input validation and magic square logic.  

---

##  Rules of the Magic Box
1. Fill all **9 boxes** with numbers.  
2. All numbers must be **unique** (no duplicates allowed).  
3. The sum of numbers in:  
   - Each **row**  
   - Each **column**  
   - Both **diagonals**  
   must be the **same constant**.  
4. If the conditions are met → ✅ **"It is a Magic Box"** message appears in **green**.  
5. If not → ❌ **"It is not a Magic Box"** message appears in **red**.  

---

##  How It Works (Logic)
1. **Input Validation**
   - Collects values from all 9 input boxes.  
   - Checks for duplicates → If duplicates exist, shows error.  

2. **Magic Box Check**
   - Converts inputs into numbers.  
   - Calculates sums:
     - Row sums: `(1+2+3), (4+5+6), (7+8+9)`  
     - Column sums: `(1+4+7), (2+5+8), (3+6+9)`  
     - Diagonals: `(1+5+9), (3+5+7)`  
   - If **all sums are equal**, it’s a Magic Box.  

---

##  Folder Structure
magic-box/

│── index.html # Main HTML file

│── magicbox.css # Custom styles

│── README.md # Project documentation

---

## ▶️ How to Run
1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/magic-box.git
   ```
2. Open index.html in a browser.
3. Enter 9 numbers in the grid.
4. Click Check to verify if it’s a Magic Box.

#  Signup Form with Validation

This project is a **Signup Form** built using **HTML, CSS, Bootstrap, jQuery, and JavaScript** with real-time form validation.  
The form validates **Name, Email, Address, Date of Birth, Gender, Age, Password, and Confirm Password** fields before submission.

---

##  Features
✔ **Form Validation** for all input fields  
✔ **Name validation** – must be at least 3 characters and not contain numbers  
✔ **Email validation** – must follow standard email format  
✔ **Address validation** – cannot be empty  
✔ **DOB validation** – auto-calculates age and restricts invalid dates  
✔ **Gender validation** – ensures only one option is selected  
✔ **Password validation** – must contain:  
   - At least 8 characters  
   - At least one uppercase letter  
   - At least one lowercase letter  
   - At least one number  
   - At least one special character  
✔ **Confirm Password validation** – must match the entered password  
✔ **Password Visibility Toggle** – Show/Hide password with eye icon  
✔ **Error Messages** displayed dynamically using jQuery  
✔ **Bootstrap Modal Popup** for mandatory field errors  
✔ Redirects to external site (`https://www.cybrosys.com`) on successful validation  

---

##  Technologies Used
- **HTML5** – Form structure  
- **CSS3** – Custom styling (`signup.css`)  
- **Bootstrap 3** – Responsive layout and modal  
- **jQuery 3.6** – DOM manipulation and validation  
- **Font Awesome** – Eye icons for password visibility toggle  

---

##  How It Works
1. User fills the signup form.  
2. Each field is validated in **real-time** (on `keyup`, `change`, or `mouseleave`).  
3. If invalid → error message shown under the field.  
4. Password field checks for **strength rules**.  
5. Confirm password must match the entered password.  
6. DOB auto-calculates **Age**.  
7. If all fields are empty and **Sign Up** button is clicked → A **Bootstrap modal** is displayed with an error message.  
8. If all validations pass → User is redirected to `https://www.cybrosys.com`.  

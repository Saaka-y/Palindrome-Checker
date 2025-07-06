# 🔁 Palindrome Checker

This is a simple web app that checks whether a given word or sentence is a **palindrome** — a string that reads the same backward as forward (ignoring punctuation, case, and spacing).  
It was created as part of a learning project from [freeCodeCamp](https://www.freecodecamp.org/).

---

## 📌 Features

- Users can enter any word or sentence
- Alerts if the input is empty
- Displays whether the input is a palindrome
- Cleans input by removing spaces, punctuation, and capitalization before checking

---

## 🛠️ Technologies Used

- **HTML**
- **CSS**
- **JavaScript (Vanilla)**

---

## 💻 How to Use

1. Open `index.html` in your browser  
3. Enter text and click **Check** to see if it's a palindrome

### ✅ Example

- **Input**: `A man, a plan, a canal, Panama`  
- **Output**: `is a palindrome`

- **Input**: `hello`  
- **Output**: `is not a palindrome`

---

## 🎓 Learning Purpose

This project was built as a hands-on exercise to practice:

- DOM manipulation
- Event handling (`addEventListener`)
- Input validation and user feedback
- Regular expressions for text processing
- Writing and returning boolean values in functions
- CSS Flexbox layout and UI styling

---

## 📘 Key Concepts Learned

- `[^a-z0-9]` in RegEx is used to **negate** characters that are not alphanumeric  
  - `[^]` = not these characters  
  - `^[]` (outside of `[]`) = start of line  
- **Method chaining** allows combining `.toLowerCase().replace().split().reverse().join()`  
- Boolean expressions like `return cleaned === reversed` can replace `if` statements  
- `HTMLInputElement` is the JavaScript object that represents an `<input>` element in the DOM

---

## ⚠️ Note

This palindrome checker is intended for learning/demo purposes only.  

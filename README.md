# Medical File Management System

A simple **web-based application** for managing patient records. This project allows medical professionals or clinics to **add, search, and display patient records** efficiently. It is fully **mobile-friendly** and stores data locally in the browser using `localStorage`.

---

## **Features**

1. **Add Patient Record**
   - Enter **Card Number**, **Patient Name**, **Disease**, **Date**, and **Doctor Name**.
   - Automatically checks for **duplicate Card Numbers**.
   - Displays a success message after adding.

2. **Search Patient by Card Number**
   - Quickly find a patient by entering their **Card Number**.
   - Displays **only the matched patient**.
   - Shows an error message if the card number does not exist.

3. **Show All Records**
   - Displays **all patients** in a responsive table.
   - Table supports **horizontal scrolling on mobile devices**.

4. **Mobile-Friendly**
   - Uses **flexbox** layout for responsive design.
   - Inputs and buttons are **optimized for touch**.
   - Works on **desktop, tablet, and mobile screens**.

5. **Local Storage**
   - Stores all patient records in the **browser's local storage**.
   - Data persists across page refreshes.
   - No backend server is required.

---

## **Technologies Used**

- HTML5
- CSS3 (Responsive Design, Flexbox)
- JavaScript (ES6)
- Font Awesome (for search icon)
- Browser `localStorage` for data persistence

---

## **Usage**

1. **Clone the Repository**
```bash
git clone https://github.com/Hanayaregal/Medical-File-Management-System.git

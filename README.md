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


Open the Project

Open the index.html file in your web browser.

No server is required; works locally.

Add a Patient Record

Fill out the form on the left side.

Click “Add Record” to save.

Search for a Patient

Enter the Card Number in the search box.

Click “Search” to find the patient.

Click “Show All” to display all patients.

Project Structure
Medical-File-Management-System/
│
├── index.html        # Main HTML page
├── style.css         # CSS file for styling and responsiveness
├── script.js         # JavaScript logic for adding/searching/displaying patients
└── README.md         # Project documentation
Screenshots
Add Patient Record

Search Patient

Show All Records

Note: Screenshots folder is optional. You can capture images of your app and save them in a screenshots/ folder.

Future Improvements

Add Edit/Delete functionality for records.

Add filter by disease or doctor name.

Migrate to a backend database (like MySQL or Firebase) for multi-device access.

Add authentication for secure access.

Author

Solomon Worku (Hana Yaregal)
Final Year Software Engineering Student
GitHub Repository

License

This project is open-source and free to use for educational purposes.

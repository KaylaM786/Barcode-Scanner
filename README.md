# 📷 Barcode Scanner Web App

A simple barcode scanning web app built with HTML, JavaScript, and Google Apps Script. It scans barcodes using your device's camera, stores them in a Google Sheet, and allows you to delete or undo entries directly from the UI.

## 🚀 Features

- Live camera barcode scanning (supports CODE_128, CODE_39, and EAN_13)
- Automatically saves scanned codes to Google Sheets
- UI displays a list of scanned codes
- Ability to delete individual codes from the sheet
- Undo functionality for deleted codes
- Flashlight toggle and zoom control (if supported by device)

## 📁 Project Structure

├── index.html # Main UI and JavaScript logic (includes ZXing)
├── code.gs # Google Apps Script backend (data handling)
└── README.md # This file

## 🛠️ Setup Instructions

### 1. Google Sheet & Apps Script

1. Create a new [Google Sheet](https://sheets.new)
3. Click **Extensions > Apps Script**
4. Replace the default code with the contents of `Code.gs`
5. Create a new HTML file named `Index.html` and paste the HTML code in it.
6. Save the script and name the project
7. Deploy the script:
   - Go to **Deploy > Test deployments** or **Manage deployments**
   - Set `doGet()` as the entry point
   - Select **"Anyone"** (if needed) under "Execute as"

### 3. Test It

1. Run `doGet()` as a test or publish the web app
2. Open the deployed URL on a device with a camera
3. Start scanning!

## 📦 Libraries Used

- [ZXing Browser (zxing-js)](https://github.com/zxing-js/library) for barcode decoding
- Native HTML, CSS, and JavaScript
- Google Apps Script for serverless backend

---

## 📌 Notes

- Works best on modern mobile browsers (Chrome, Safari)
- Zoom and flashlight support may vary by device and browser
- Google Apps Script quotas may apply for high-volume usage

---

📸 Demo 
https://docs.google.com/spreadsheets/d/1jn6_Mq8lWzLkHrGnzdlm6m4RG4o5YZV7qdmsYzOyLdM/edit?usp=sharing

---

## 👨‍💻 Author

[Kayla Ma](https://github.com/KaylaM786)  


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
2. Rename the first sheet to `Sheet1`
3. Click **Extensions > Apps Script**
4. Replace the default code with the contents of `code.gs`
5. Save the script and name the project
6. Deploy the script:
   - Go to **Deploy > Test deployments** or **Manage deployments**
   - Set `doGet()` as the entry point
   - Select **"Anyone"** (if needed) under "Execute as"

### 2. HTML Interface

1. In the same Apps Script project, go to **File > New > HTML**
2. Name it `Index`
3. Paste in the contents of `index.html`

### 3. Test It

1. Run `doGet()` as a test or publish the web app
2. Open the deployed URL on a device with a camera
3. Start scanning!

---

## 🔐 Permissions & Security

- Make sure your script is authorized to access the Google Sheet
- If deploying for others, use **"Anyone with the link"** or **"Only myself"** as needed
- HTTPS is recommended for camera access

---

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

## 📃 License

MIT License

---

## 👨‍💻 Author

[Your Name](https://github.com/yourusername)  
Feel free to fork, contribute, or ask questions!

//Change these constant variables according to your sheet
const sheet = (() => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // Use the first sheet (or change to a specific one like "Sheet1")
  return spreadsheet.getSheets()[0];
})();

const cell = (() => {
  const col = "A2:A"; //the barcode data will be inputted into the sheet starting from column A row 2
  return col;
})();

//This is automatically called when a user accesses the web app via a GET request (e.g., opening a URL).It's like the homepage loader.
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index') // tells Apps Script to load the HTML file
    .setTitle('Barcode Scanner') //set browser tab title
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

//This function records the barcode data onto the 
function recordBarcodes(barcodes) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); // <-- Your sheet name
  if (!sheet) return "Sheet not found.";

  const clean = barcodes.map(b => b.trim()).filter(b => b.length > 0);
  const col = sheet.getRange(cell).getValues().flat();
  let nextRow = col.findIndex(val => !val);
  if (nextRow === -1) nextRow = col.length;

  const data = clean.map(code => [code]);
  sheet.getRange(nextRow + 2, 1, data.length, 1).setValues(data);

  return `Saved ${data.length} barcode(s).`;
}

function deleteBarcode(barcode) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  if (!sheet) return "Sheet not found.";

  const data = sheet.getRange(cell).getValues(); // Only from A2 down
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === barcode) {
      sheet.deleteRow(i + 2); // +2: i is 0-indexed and we start from row 2
      return `Deleted barcode: ${barcode}`;
    }
  }

  return "Barcode not found.";
}

function undoDeleteBarcode(barcode) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  if (!sheet) return "Sheet not found.";

  const col = sheet.getRange(cell).getValues().flat(); // Column A starting from A2
  let nextRow = col.findIndex(val => !val);
  if (nextRow === -1) nextRow = col.length;

  sheet.getRange(nextRow + 2, 1).setValue(barcode); // Column A = 1
  return `Restored: ${barcode}`;
}

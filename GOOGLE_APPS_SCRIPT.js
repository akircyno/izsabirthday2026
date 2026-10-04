// Google Apps Script - RSVP Webhook Handler
// Purpose: Receives RSVP data from the website and writes to Google Sheets

// ============================================
// Main Webhook Handler
// ============================================
function doPost(e) {
  try {
    // Parse incoming JSON
    const data = JSON.parse(e.postData.contents);

    // Get the active spreadsheet (must be open/edited first)
    const sheet = SpreadsheetApp.getActiveSheet();

    // Add headers if first row is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Full Name',
        'Attending',
        'Guest Count',
        'Additional Guests',
        'Submitted At',
        'ID'
      ];
      sheet.appendRow(headers);
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#8b1e2c');
      headerRange.setFontColor('#fff1d6');
      headerRange.setFontWeight('bold');
    }

    // Prepare row data
    const row = [
      new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      data.fullName || '',
      data.attending === 'yes' ? 'YES' : 'NO',
      data.guestCount || 0,
      data.additionalGuests ? data.additionalGuests.join(', ') : '',
      data.submittedAt || new Date().toISOString(),
      data.id || ''
    ];

    // Append row to sheet
    sheet.appendRow(row);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'RSVP recorded successfully' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// Optional: Test function (run in Google Apps Script)
// ============================================
function testRSVP() {
  const testData = {
    fullName: 'John Doe',
    attending: 'yes',
    guestCount: 2,
    additionalGuests: ['Jane Smith'],
    submittedAt: new Date().toISOString(),
    id: Date.now().toString()
  };

  const sheet = SpreadsheetApp.getActiveSheet();
  
  // Add headers if needed
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Full Name',
      'Attending',
      'Guest Count',
      'Additional Guests',
      'Submitted At',
      'ID'
    ];
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground('#8b1e2c');
    headerRange.setFontColor('#fff1d6');
    headerRange.setFontWeight('bold');
  }

  const row = [
    new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    testData.fullName,
    testData.attending === 'yes' ? 'YES' : 'NO',
    testData.guestCount,
    testData.additionalGuests.join(', '),
    testData.submittedAt,
    testData.id
  ];

  sheet.appendRow(row);
  Logger.log('Test RSVP added successfully!');
}

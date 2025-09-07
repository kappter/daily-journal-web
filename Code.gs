function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Master24");
  var data = {
    date: sheet.getRange("A1").getValue(),
    meals: sheet.getRange("B2:B5").getValues().flat().filter(Boolean),
    events: sheet.getRange("C2:C7").getValues().flat().filter(Boolean),
    photos: sheet.getRange("D1").getValue().split(","),
    planets: sheet.getRange("H2:J10").getValues().map(r => ({name: r[0], rise: r[1], set: r[2]})),
    weather: sheet.getRange("E1:E10").getValues().flat().filter(Boolean),
    tarot: { card: sheet.getRange("Q1").getValue(), orientation: sheet.getRange("Q2").getValue(), keywords: sheet.getRange("Q3").getValue() },
    reflections: sheet.getRange("T1").getValue(),
    steps: [15014, 309635, 381576] // Placeholder; update with real data
  };
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

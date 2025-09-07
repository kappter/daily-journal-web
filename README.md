# Daily Journal Web

A dynamic web-based journaling tool that integrates with a Google Sheet to capture daily entries and generate a PDF. Hosted at [https://kappter.github.io/daily-journal-web/](https://kappter.github.io/daily-journal-web/).

## Features
- **Manual Inputs**: Record meals, events from the previous day, and upload three photos (puzzle, orrery, photo roll).
- **Dynamic Data**: Automatically fetches weather, planetary data, tarot pulls, and Merriam-Webster trends.
- **PDF Export**: Download a daily journal PDF with all content.
- **Visualization**: Includes a basic chart for steps or other metrics.

## Setup
1. **Google Sheet**: Use the sheet at [this link](https://docs.google.com/spreadsheets/d/175O7HYVrHn7aWqliooTIKGPoAyNwASeLoUVD4EY0GCw/edit?usp=sharing) with a "Master24" tab. Set up a Google Form to collect entries and sync with the sheet via Apps Script.
2. **GitHub Pages**: Clone this repo, update `script.js` with your deployed Apps Script ID, and push changes.
3. **Deploy Apps Script**: Add the provided `Code.gs`, deploy as a web app, and share the sheet with the script’s service account.

## Usage
- Submit entries via the Google Form.
- Visit the GitHub page to view the rendered journal and download the PDF.

## Contributing
Feel free to fork and submit pull requests. Suggestions for new dynamic insights are welcome!

## License
MIT License

# CAT Performance Summary Analysis Tool

This project fulfills the assignment requirements for developing a web-based tool that dynamically generates a summary of a student's CAT test performance using AI. It leverages the provided JSON data, constructs a dynamic prompt for the Gemini AI model, and presents the results in a user-friendly interface.

## Project Overview

The tool dynamically generates a detailed, bullet-pointed analysis of CAT test performance, focusing on Accuracy, Question Selection Strategy, and Improvement Areas.  It presents performance analytics in interactive tables and provides AI-powered insights in a modal window.

## Deployment

The project is deployed and hosted on Vercel. You can access the live tool at: https://catperformanceanalyzer.vercel.app/


## Features

- **Dynamic Prompt Generation:** Constructs a prompt for the Gemini AI model based on the provided JSON performance data, ensuring relevant and personalized insights.
- **AI-Powered Summary:** Generates a structured summary covering Accuracy, Question Selection Strategy, and Improvement Areas, offering actionable recommendations.
- **Interactive Performance Tables:** Displays performance data in HTML tables with expandable subsections for detailed analysis.
- **Floating "Deep Insights" Button:** Provides easy access to the AI-generated summary.
- **Modal Display with Loading Animation:** Presents the AI summary in a scrollable modal window with a loading animation during processing.
- **Error Handling:** Gracefully handles API errors and displays informative messages.
- **Deployed on Vercel:** Accessible via the provided Vercel URL.
- **Public GitHub Repository:** Source code available on GitHub.


## Screenshots

![Screenshot 2025-02-23 211156](https://github.com/user-attachments/assets/5c0852fe-98b7-425d-add9-0fea19c12f51)
!
![Screenshot 2025-02-23 211250](https://github.com/user-attachments/assets/3e72b729-7100-4b57-a0c2-ceeae530bcec)
![Screenshot 2025-02-23 211353](https://github.com/user-attachments/assets/7bf28ea0-cf51-46b6-abed-2980f46a06c3) 
![Screenshot 2025-02-23 211448](https://github.com/user-attachments/assets/6eab354f-6a97-4d57-bbc2-07f2053683d0)



## Technologies Used

- HTML
- CSS
- JavaScript
- Gemini AI API

## Setup

1. Clone the repository: `git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git`
2. Replace YOUR_API_KEY in generateSummary.js with your actual Gemini API key.   
3. Open `index.html` in your browser.


## Usage

1. **Performance Tables:** Review the performance data in the tables. Click on section headers (VARC, DILR, QA) to expand/collapse subsection details.
2. **Deep Insights:** Click the floating "Deep Insights" button. A modal will appear with a loading animation while the AI summary is generated.
3. **AI Summary:** Once generated, the AI summary will be displayed in the modal.  The modal is scrollable if the content is too long.



## File Descriptions:
- **`index.html`**: The main interface containing the performance table.
- **`style.css`**: Styles for the main interface.
- **`generateSummary.js`**: Handles communication with the Gemini API and dynamic prompt generation.
- **`summary.html`**: Contains the HTML layout for the AI summary modal.
- **`summary.css`**: Styles the summary modal page.
- **`data.json`**: Contains the student’s performance data in JSON format.
- **`README.md`**: Project documentation file.







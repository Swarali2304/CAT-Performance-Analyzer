document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from data.json 
    fetch('data.json')
        .then(response => response.json())
        .then(jsonData => populateTable(jsonData))
        .catch(error => console.error("Error loading JSON:", error));
});

// Function to populate the table dynamically
function populateTable(data) {
    const tableBody = document.querySelector("#performanceTable tbody");

    // Function to insert a row
    function addRow(section, questions, attempts, correct, accuracy, timeSpent, className = "") {
        const row = document.createElement("tr");
        row.className = className; // Add class for styling/toggling

        row.innerHTML = `
            <td class="${className.includes('dropdown') ? 'dropdown' : ''}">${section}</td>
            <td>${questions}</td>
            <td>${attempts}</td>
            <td>${correct}</td>
            <td>${accuracy}</td>
            <td>${timeSpent || '-'}</td>
        `;
        tableBody.appendChild(row);
        return row;
    }

    // Insert overall data
    addRow("Overall", data.overall.questions, data.overall.attempts, data.overall.correct, data.overall.accuracy, data.overall.timeSpent);

    // Insert main sections with dropdowns
    ["varc", "dilr", "qa"].forEach(section => {
        if (data[section]) {
            let sectionRow = addRow(section.toUpperCase(), data[section].questions, data[section].attempts, data[section].correct, data[section].accuracy, data[section].timeSpent, "dropdown");

            // Insert subsection data
            for (let key in data[section]) {
                if (typeof data[section][key] === 'object' && "questions" in data[section][key]) {
                    addRow(
                        `${key.toUpperCase()}`,
                        data[section][key].questions,
                        data[section][key].attempts,
                        data[section][key].correct,
                        data[section][key].accuracy,
                        data[section][key].timeSpent || '-',
                        `hidden ${section}`
                    );
                }
            }

            // Add event listener for toggling subsections
            sectionRow.addEventListener("click", function () {
                document.querySelectorAll(`.${section}`).forEach(subRow => {
                    subRow.classList.toggle("hidden");
                    subRow.classList.toggle("visible");
                });

                // Rotate the dropdown arrow
                this.classList.toggle("active");
            });
        }
    });
}

// Event listener for Deep Insights button
document.getElementById("insightsButton").addEventListener("click", function () {
    window.location.href = "summary.html";
});

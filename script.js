'use strict';

const API_KEY = 'AIzaSyDzOC2_OhVMgAKA3NzfYyt_iCs8-rqz3C0';  
const spreadsheetId = '1GcKLQwm5OeGB21NZH74a74vOzfR78Pb8TtJ4BQDMDi4'; 
const sheetName = 'Activist Organizations Database';
const baseUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${API_KEY}`;

document.addEventListener("DOMContentLoaded", function () {
    var quizForm = document.getElementById("quiz-form");
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result-text");
    var personaImage = document.getElementById("persona-image");
    var actionLink = document.getElementById("action-link");
    var localOrgsContainer = document.getElementById("local-orgs");

    async function fetchOrganizations() {
        try {
            console.log("Fetching organization data...");
            const response = await fetch(baseUrl);
            const data = await response.json();
            console.log("API Response:", data);

            if (!data.values) {
                throw new Error("No data found in Google Sheets response.");
            }

            const rows = data.values;
            const headers = rows[0];
            const orgs = rows.slice(1).map(row => {
                let org = {};
                headers.forEach((header, index) => {
                    org[header] = row[index] || "";
                });
                return org;
            });

            displayOrganizations(orgs);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayOrganizations(orgs) {
        localOrgsContainer.innerHTML = orgs.map(org => 
            `<li><a href="${org["Website URL"]}" target="_blank">${org["Organization Name"]}</a>: ${org["Description"]}</li>`
        ).join('');
    }

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        var answerCounts = {};
        Object.keys(activistTypes).forEach(type => answerCounts[type] = 0);
        
        var answers = new FormData(quizForm);
        answers.forEach((value) => {
            Object.keys(activistTypes).forEach(type => {
                if (activistTypes[type].letters.includes(value)) {
                    answerCounts[type]++;
                }
            });
        });
        
        var topType = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);
        var result = activistTypes[topType];

        resultText.innerHTML = `<h2>${result.name}</h2>`;
        personaImage.src = `images/${result.image}`;
        actionLink.href = result.action;
        actionLink.innerText = "Take Action Now!";
        
        resultContainer.style.display = "block";
    });

    fetchOrganizations();  // Fetch organizations after page loads
});

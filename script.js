'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var quizForm = document.getElementById("quiz-form");
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result-text");
    var personaImage = document.getElementById("persona-image");
    var actionLink = document.getElementById("action-link");

    var activistTypes = {
        "firestarter": { name: "🔥 Frontline Firestarter", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Frontline_Firestarter.png", action: "#" },
        "guardian": { name: "📡 Digital Guardian", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Digital_Guardian.png", action: "#" },
        "community_helper": { name: "🤲 Community Helper", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Community_Helper.png", action: "#" },
        "remote_strategist": { name: "💻 Remote Strategist", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Remote_Strategist.png", action: "#" },
        "fundraiser": { name: "💰 Fundraising Champion", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Fundraising_Champion.png", action: "#" },
        "content_creator": { name: "🎥 Content Creator", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Content_Creator.png", action: "#" },
        "legal_advocate": { name: "⚖️ Legal Advocate", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Legal_Advocate.png", action: "#" },
        "tech_supporter": { name: "🖥️ Tech Supporter", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Tech_Supporter.png", action: "#" },
        "educator": { name: "📚 Knowledge Spreader", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Knowledge_Spreader.png", action: "#" },
        "environmentalist": { name: "🌱 Earth Defender", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png", action: "#" },
        "voter_mobilizer": { name: "🗳️ Democracy Protector", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Democracy_Protector.png", action: "#" },
        "labor_advocate": { name: "⚒️ Workers' Rights Champion", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Workers_Rights_Champion.png", action: "#" },
        "healthcare_advocate": { name: "🏥 Health Equity Fighter", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Health_Equity_Fighter.png", action: "#" },
        "logistics_coordinator": { name: "🚛 Logistics Coordinator", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Logistics_Coordinator.png", action: "#" },
        "policy_influencer": { name: "🏛️ Policy Influencer", image: "https://upliftservicenetwork.github.io/activist-quiz/images/Policy_Influencer.png", action: "#" }
    };

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        var answerCounts = {};
        Object.keys(activistTypes).forEach(type => answerCounts[type] = 0);
        
        var answers = new FormData(quizForm);
        answers.forEach((value) => {
            Object.keys(activistTypes).forEach(type => {
                if (activistTypes[type].name.toLowerCase().includes(value.toLowerCase())) {
                    answerCounts[type]++;
                }
            });
        });
        
        var topType = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b);
        var result = activistTypes[topType];

        resultText.innerHTML = `<h2>${result.name}</h2>`;
        personaImage.src = result.image; 
        actionLink.href = result.action;
        actionLink.innerText = "Take Action Now!";
        
        resultContainer.style.display = "block";
    });
});

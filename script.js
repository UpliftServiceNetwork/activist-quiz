'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var quizForm = document.getElementById("quiz-form");
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result-text");
    var personaImage = document.getElementById("persona-image");
    var actionLink = document.getElementById("action-link");

    var activistTypes = {
        "firestarter": { name: "🔥 Frontline Firestarter", image: "firestarter.jpg", action: "#" },
        "guardian": { name: "📡 Digital Guardian", image: "digital_guardian.jpg", action: "#" },
        "community_helper": { name: "🤲 Community Helper", image: "community_helper.jpg", action: "#" },
        "remote_strategist": { name: "💻 Remote Strategist", image: "remote_strategist.jpg", action: "#" },
        "fundraiser": { name: "💰 Fundraising Champion", image: "fundraiser.jpg", action: "#" },
        "content_creator": { name: "🎥 Content Creator", image: "content_creator.jpg", action: "#" },
        "legal_advocate": { name: "⚖️ Legal Advocate", image: "legal_advocate.jpg", action: "#" },
        "tech_supporter": { name: "🖥️ Tech Supporter", image: "tech_supporter.jpg", action: "#" },
        "educator": { name: "📚 Knowledge Spreader", image: "educator.jpg", action: "#" },
        "environmentalist": { name: "🌱 Earth Defender", image: "environmentalist.jpg", action: "#" },
        "voter_mobilizer": { name: "🗳️ Democracy Protector", image: "voter_mobilizer.jpg", action: "#" },
        "labor_advocate": { name: "⚒️ Workers' Rights Champion", image: "labor_advocate.jpg", action: "#" },
        "healthcare_advocate": { name: "🏥 Health Equity Fighter", image: "healthcare_advocate.jpg", action: "#" },
        "logistics_coordinator": { name: "🚛 Logistics Coordinator", image: "logistics_coordinator.jpg", action: "#" },
        "policy_influencer": { name: "🏛️ Policy Influencer", image: "policy_influencer.jpg", action: "#" }
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
        personaImage.src = `my-folder/${result.image}`;  // 👈 Uses `my-folder/` instead of `images/`
        actionLink.href = result.action;
        actionLink.innerText = "Take Action Now!";
        
        resultContainer.style.display = "block";
    });
});

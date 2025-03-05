'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var quizForm = document.getElementById("quiz-form");
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result-text");
    var personaImage = document.getElementById("persona-image");
    var actionLink = document.getElementById("action-link");

    var activistTypes = {
        "firestarter": { letters: ["A", "D", "G", "J", "L"], name: "🔥 Frontline Firestarter", image: "firestarter.jpg", action: "https://blacklivesmatter.com" },
        "guardian": { letters: ["B", "E", "I", "K", "M"], name: "📡 Digital Guardian", image: "digital_guardian.jpg", action: "https://www.eff.org" },
        "community_helper": { letters: ["C", "H", "J", "O", "R"], name: "🤲 Community Helper", image: "community_helper.jpg", action: "https://www.feedingamerica.org" },
        "remote_strategist": { letters: ["B", "F", "I", "K", "M"], name: "💻 Remote Strategist", image: "remote_strategist.jpg", action: "https://www.mediamatters.org" },
        "fundraiser": { letters: ["C", "E", "H", "K", "R"], name: "💰 Fundraising Champion", image: "fundraiser.jpg", action: "https://www.habitat.org" },
        "content_creator": { letters: ["B", "E", "N", "K", "S"], name: "🎥 Content Creator", image: "content_creator.jpg", action: "https://www.creativecommons.org" },
        "legal_advocate": { letters: ["A", "F", "G", "J", "Q"], name: "⚖️ Legal Advocate", image: "legal_advocate.jpg", action: "https://www.aclu.org" },
        "tech_supporter": { letters: ["B", "F", "I", "M", "T"], name: "🖥️ Tech Supporter", image: "tech_supporter.jpg", action: "https://opensource.org" },
        "educator": { letters: ["C", "E", "H", "K", "S"], name: "📚 Knowledge Spreader", image: "educator.jpg", action: "https://www.khanacademy.org" },
        "environmentalist": { letters: ["A", "G", "O", "J", "P"], name: "🌱 Earth Defender", image: "environmentalist.jpg", action: "https://www.sierraclub.org" },
        "voter_mobilizer": { letters: ["A", "E", "G", "K", "P"], name: "🗳️ Democracy Protector", image: "voter_mobilizer.jpg", action: "https://www.vote.org" },
        "labor_advocate": { letters: ["A", "G", "H", "J", "Q"], name: "⚒️ Workers' Rights Champion", image: "labor_advocate.jpg", action: "https://www.aflcio.org" },
        "healthcare_advocate": { letters: ["C", "H", "O", "J", "Q"], name: "🏥 Health Equity Fighter", image: "healthcare_advocate.jpg", action: "https://www.healthcare.gov" },
        "logistics_coordinator": { letters: ["B", "F", "I", "K", "T"], name: "🚛 Logistics Coordinator", image: "logistics_coordinator.jpg", action: "https://www.redcross.org" },
        "policy_influencer": { letters: ["A", "F", "G", "K", "Q"], name: "🏛️ Policy Influencer", image: "policy_influencer.jpg", action: "https://www.brookings.edu" }
    };

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh

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

        resultContainer.style.display = "block"; // Show results
    });
});

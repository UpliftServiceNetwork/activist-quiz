'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var quizForm = document.getElementById("quiz-form");
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result-text");
    var personaImage = document.getElementById("persona-image");
    var actionLink = document.getElementById("action-link");

    var activistTypes = {
        "firestarter": { 
            name: "🔥 Frontline Firestarter", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Frontline_Firestarter.png",
            action: "https://www.indivisible.org/",
            description: "You are the spark that ignites change! Whether you're leading a protest, speaking truth to power, or mobilizing people on the ground, you thrive in the heat of action."
        },
        "guardian": { 
            name: "📡 Digital Guardian", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Digital_Guardian.png",
            action: "https://www.fightforthefuture.org/",
            description: "You are the protector of truth in the digital age! You fight misinformation, organize movements online, and use technology to connect and empower communities."
        },
        "community_helper": { 
            name: "🤲 Community Helper", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Community_Helper.png",
            action: "https://www.volunteermatch.org/",
            description: "You are the heart of the movement! Whether you're feeding the hungry, helping displaced families, or creating safe spaces, you make direct change in people's lives."
        },
        "remote_strategist": { 
            name: "💻 Remote Strategist", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Remote_Strategist.png",
            action: "https://www.volunteermatch.org/virtual-volunteering",
            description: "You may not be in the streets, but you are behind every powerful movement! Your strategic mind ensures that activism is effective and well-organized."
        },
        "fundraiser": { 
            name: "💰 Fundraising Champion", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Fundraising_Champion.png",
            action: "https://www.gofundme.com/start/fundraising-ideas",
            description: "You turn passion into power! You know how to gather resources, whether through crowdfunding, grant writing, or organizing benefit events."
        },
        "content_creator": { 
            name: "🎥 Content Creator", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Content_Creator.png",
            action: "https://www.canva.com/",
            description: "Your voice and creativity inspire action! Whether through videos, social media, art, or writing, you shift perspectives and rally people behind important causes."
        },
        "legal_advocate": { 
            name: "⚖️ Legal Advocate", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Legal_Advocate.png",
            action: "https://www.aclu.org/",
            description: "Justice needs warriors! You fight unjust laws, protect the rights of the vulnerable, and hold those in power accountable."
        },
        "tech_supporter": { 
            name: "🖥️ Tech Supporter", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Tech_Supporter.png",
            action: "https://www.codeforamerica.org/",
            description: "You are the architect of revolution! You ensure that networks are secure, websites function, and technology is used to empower activists."
        },
        "educator": { 
            name: "📚 Knowledge Spreader", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Knowledge_Spreader.png",
            action: "https://www.khanacademy.org/",
            description: "You turn knowledge into power! You educate, inform, and empower communities with the facts and history they need to take action."
        },
        "environmentalist": { 
            name: "🌱 Earth Defender", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png",
            action: "https://www.sierraclub.org/get-involved",
            description: "You fight for the planet! Whether it's climate justice, sustainability, or environmental activism, you're on the frontlines of protecting the Earth."
        },
        "voter_mobilizer": { 
            name: "🗳️ Democracy Protector", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Democracy_Protector.png",
            action: "https://www.whenweallvote.org/",
            description: "You defend democracy! By registering voters, fighting voter suppression, and mobilizing election turnout, you make sure every voice is heard."
        },
        "labor_advocate": { 
            name: "⚒️ Workers' Rights Champion", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Labor_Advocate.png",
            action: "https://aflcio.org/",
            description: "You stand up for workers! Whether fighting for fair wages, safer conditions, or labor rights, you ensure dignity in the workplace."
        },
        "healthcare_advocate": { 
            name: "🏥 Health Equity Fighter", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Health_Equity_Fighter.png",
            action: "https://familiesusa.org/",
            description: "Healthcare should be a right, not a privilege. You work to ensure that all people have access to quality medical care."
        },
        "logistics_coordinator": { 
            name: "🚛 Logistics Coordinator", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Logistics_Coordinator.png",
            action: "https://mutualaidhub.org/",
            description: "You keep movements running smoothly! Whether organizing transportation, supplies, or event logistics, you make activism possible."
        },
        "policy_influencer": { 
            name: "🏛️ Policy Influencer", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Policy_Influencer.png",
            action: "https://commoncause.org/",
            description: "You work to change the system from within! Whether through lobbying, policy writing, or community advocacy, you shape the future."
        }
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

        resultText.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p>`;
        personaImage.src = result.image;
        personaImage.style.display = "block";

        actionLink.setAttribute("href", result.action);
        actionLink.setAttribute("target", "_blank");
        actionLink.innerText = "Take Action Now!";
        actionLink.style.display = "inline-block";

        resultContainer.style.display = "block";
    });
});

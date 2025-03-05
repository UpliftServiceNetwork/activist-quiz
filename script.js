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
            action: "https://www.indivisible.org/",  // 🔗 Indivisible: Take direct action
            description: "🌟 **You are the spark that ignites change!** Whether you're leading a protest, speaking truth to power, or mobilizing people on the ground, you **thrive in the heat of action**. You bring **energy, passion, and boldness** wherever you go. The world doesn’t change unless people like you **step up and demand it**—so grab your megaphone and **lead the charge!** 💥🔥"
        },
        "guardian": { 
            name: "📡 Digital Guardian", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Digital_Guardian.png",
            action: "https://www.fightforthefuture.org/",  // 🔗 Fight for the Future: Digital rights activism
            description: "🛡️ **You are the protector of truth in the digital age!** While others scroll, **you act.** You fight misinformation, organize movements online, and **use technology to connect, empower, and mobilize communities**. Your **sharp mind** and **quick keystrokes** make you an unstoppable force in **spreading awareness and keeping movements alive**. 🌍💻"
        },
        "community_helper": { 
            name: "🤲 Community Helper", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Community_Helper.png",
            action: "https://www.volunteermatch.org/",  // 🔗 Find local volunteer opportunities
            description: "💖 **You are the heart of the movement!** You **see the people behind the policies**, and your mission is to **uplift, support, and empower those in need**. Whether you’re **feeding the hungry, helping displaced families, or creating safe spaces**, you prove that **change starts with kindness and action**. Your compassion is **contagious**, and the world needs more people like **you**! 🌱✨"
        },
        "remote_strategist": { 
            name: "💻 Remote Strategist", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Remote_Strategist.png",
            action: "https://www.volunteermatch.org/virtual-volunteering",  // 🔗 Virtual volunteer opportunities
            description: "🌎 **You may not be in the streets, but you are behind every powerful movement!** From planning **campaigns and outreach** to crafting messages that inspire, you are **the mastermind** making activism **smarter, stronger, and more effective**. Your **tactical mind and strategic approach** ensure that every action has **impact**—and because of you, **movements don’t just grow—they thrive!** 📈🎯"
        },
        "fundraiser": { 
            name: "💰 Fundraising Champion", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Fundraising_Champion.png",
            action: "https://www.gofundme.com/start/fundraising-ideas",  // 🔗 GoFundMe: Crowdfunding & fundraising ideas
            description: "💸 **You turn passion into power!** Movements **need resources to survive**, and you know exactly how to get them. Whether through **crowdfunding, grant writing, or organizing benefit events**, you **turn generosity into action**. You are the **lifeblood** of any organization, ensuring they have the fuel they need to **keep fighting, keep growing, and keep winning**. 🔥💡"
        },
        "environmentalist": { 
            name: "🌱 Earth Defender", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png",
            action: "https://www.sierraclub.org/get-involved",  // 🔗 Sierra Club: Environmental activism
            description: "🌍 **You don’t just fight for change—you fight for the planet!** Whether it's **climate justice, sustainability, or environmental activism**, you are on the frontlines protecting **the future of humanity**. You rally people to **reduce waste, fight pollution, and demand clean energy**. Because of you, future generations will **inherit a planet worth living on**. 🍃🌿"
        },
        "voter_mobilizer": { 
            name: "🗳️ Democracy Protector", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Democracy_Protector.png",
            action: "https://www.whenweallvote.org/",  // 🔗 When We All Vote: Voter engagement
            description: "🗳️ **You are the defender of democracy!** You ensure that **every voice is heard and every vote is counted**. Whether you're **registering voters, fighting voter suppression, or mobilizing election turnout**, you **hold the system accountable**. Because of you, **democracy remains strong, and people remain empowered**. The future belongs to those who show up—**and you make sure they do!** 📩✅"
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

        console.log("Action Button URL Set:", actionLink.href); // Debugging

        resultText.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p>`;
        personaImage.src = result.image;
        personaImage.style.display = "block";
        actionLink.setAttribute("href", result.action);
        actionLink.setAttribute("target", "_blank"); // Opens in new tab
        actionLink.style.pointerEvents = "auto"; // Ensures it's clickable
        actionLink.innerText = "Take Action Now!";
        actionLink.style.display = "inline-block"; // Ensure the button is visible
        
        resultContainer.style.display = "block";
    });
});

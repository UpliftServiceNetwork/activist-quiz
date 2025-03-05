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
            action: "#",
            description: "🌟 **You are the spark that ignites change!** Whether you're leading a protest, speaking truth to power, or mobilizing people on the ground, you **thrive in the heat of action**. You bring **energy, passion, and boldness** wherever you go. The world doesn’t change unless people like you **step up and demand it**—so grab your megaphone and **lead the charge!** 💥🔥"
        },
        "guardian": { 
            name: "📡 Digital Guardian", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Digital_Guardian.png",
            action: "#",
            description: "🛡️ **You are the protector of truth in the digital age!** While others scroll, **you act.** You fight misinformation, organize movements online, and **use technology to connect, empower, and mobilize communities**. Your **sharp mind** and **quick keystrokes** make you an unstoppable force in **spreading awareness and keeping movements alive**. 🌍💻"
        },
        "community_helper": { 
            name: "🤲 Community Helper", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Community_Helper.png",
            action: "#",
            description: "💖 **You are the heart of the movement!** You **see the people behind the policies**, and your mission is to **uplift, support, and empower those in need**. Whether you’re **feeding the hungry, helping displaced families, or creating safe spaces**, you prove that **change starts with kindness and action**. Your compassion is **contagious**, and the world needs more people like **you**! 🌱✨"
        },
        "remote_strategist": { 
            name: "💻 Remote Strategist", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Remote_Strategist.png",
            action: "#",
            description: "🌎 **You may not be in the streets, but you are behind every powerful movement!** From planning **campaigns and outreach** to crafting messages that inspire, you are **the mastermind** making activism **smarter, stronger, and more effective**. Your **tactical mind and strategic approach** ensure that every action has **impact**—and because of you, **movements don’t just grow—they thrive!** 📈🎯"
        },
        "fundraiser": { 
            name: "💰 Fundraising Champion", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Fundraising_Champion.png",
            action: "#",
            description: "💸 **You turn passion into power!** Movements **need resources to survive**, and you know exactly how to get them. Whether through **crowdfunding, grant writing, or organizing benefit events**, you **turn generosity into action**. You are the **lifeblood** of any organization, ensuring they have the fuel they need to **keep fighting, keep growing, and keep winning**. 🔥💡"
        },
        "content_creator": { 
            name: "🎥 Content Creator", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Content_Creator.png",
            action: "#",
            description: "📢 **Your voice, your creativity, your vision—these are your weapons!** You turn **ideas into inspiration** and **stories into action**. Whether through **videos, social media, art, or writing**, you **ignite emotions, shift perspectives, and rally people behind causes that matter**. The world doesn’t just need change—it needs people like you to **show them why it matters!** 🎬📸"
        },
        "legal_advocate": { 
            name: "⚖️ Legal Advocate", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Legal_Advocate.png",
            action: "#",
            description: "⚖️ **Justice needs warriors, and you are one of them!** Whether you're **fighting unjust laws, protecting the rights of the vulnerable, or holding those in power accountable**, you **turn knowledge into power**. You know that **real change happens when policies shift, when courts rule, and when rights are defended**—and you **won’t stop** until justice prevails! 💪📜"
        },
        "environmentalist": { 
            name: "🌱 Earth Defender", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png",
            action: "#",
            description: "🌍 **You don’t just fight for change—you fight for the planet!** Whether it's **climate justice, sustainability, or environmental activism**, you are on the frontlines protecting **the future of humanity**. You rally people to **reduce waste, fight pollution, and demand clean energy**. Because of you, future generations will **inherit a planet worth living on**. 🍃🌿"
        },
        "healthcare_advocate": { 
            name: "🏥 Health Equity Fighter", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Health_Equity_Fighter.png",
            action: "#",
            description: "🏥 **Healthcare should be a right, not a privilege, and you fight to make it so!** You **advocate for patient rights, push for policy changes, and ensure that vulnerable populations get the care they deserve**. Whether you're working in public health, policy, or direct patient care, you are **saving lives and changing the system**. 💉🚑"
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

        console.log("Selected Type:", topType);
        console.log("Result Name:", result.name);
        console.log("Result Description:", result.description); 
        
        resultText.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p>`;
        personaImage.src = result.image;
        personaImage.style.display = "block";
        actionLink.href = result.action;
        actionLink.innerText = "Take Action Now!";
        
        resultContainer.style.display = "block";
    });
});

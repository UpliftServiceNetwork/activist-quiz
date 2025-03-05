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
    action: "https://www.indivisible.org/",  // ✅ Join a movement and take immediate action
    resources: [
        {
            name: "Movement for Black Lives",
            link: "https://m4bl.org/",
            description: "A platform for Black-led organizations fighting for racial justice through protests, advocacy, and policy change."
        },
        {
            name: "Rising Majority",
            link: "https://risingmajority.com/",
            description: "A coalition of grassroots activists organizing protests, direct action, and advocacy to dismantle systemic injustice."
        }
        {
            name: "Women’s March",
            link: "https://www.womensmarch.com/",
            description: "A global movement fighting for women's rights, social justice, and civic engagement through protests and direct action."
        }
    ],
    description: "You are the spark that ignites change! Whether you're leading a protest, speaking truth to power, or mobilizing people on the ground, you thrive in the heat of action."
},

"guardian": { 
    name: "📡 Digital Guardian", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Digital_Guardian.png",
    action: "https://www.fightforthefuture.org/",  // ✅ Engage in digital activism campaigns
    resources: [
        {
            name: "Access Now",
            link: "https://www.accessnow.org/",
            description: "A nonprofit advocating for global internet freedom and fighting against censorship and digital surveillance."
        },
        {
            name: "Electronic Frontier Foundation (EFF)",
            link: "https://www.eff.org/",
            description: "A leading organization defending digital privacy, free speech, and innovation online."
        }
    ],
    description: "You are the protector of truth in the digital age! You fight misinformation, organize movements online, and use technology to connect and empower communities."
},

"community_helper": { 
    name: "🤲 Community Helper", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Community_Helper.png",
    action: "https://www.volunteermatch.org/",  // ✅ Find local volunteer opportunities
    resources: [
        {
            name: "Mutual Aid Hub",
            link: "https://www.mutualaidhub.org/",
            description: "Connects people with local mutual aid networks that provide direct assistance to those in need."
        },
        {
            name: "AmeriCorps",
            link: "https://www.americorps.gov/",
            description: "A national service program offering long-term volunteer opportunities for community impact."
        }
    ],
    description: "You are the heart of the movement! Whether you're feeding the hungry, helping displaced families, or creating safe spaces, you make direct change in people's lives."
},

"fundraiser": { 
    name: "💰 Fundraising Champion", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Fundraising_Champion.png",
    action: "https://secure.actblue.com",  // ✅ Start a fundraising campaign
    resources: [
        {
            name: "Network for Good",
            link: "https://www.networkforgood.com/",
            description: "A platform providing tools and training to help individuals fundraise effectively for nonprofits."
        },
        {
            name: "Classy",
            link: "https://www.classy.org/",
            description: "An online fundraising platform that helps individuals and organizations create successful fundraising campaigns."
        }
    ],
    description: "You are the engine that powers movements! Every campaign, every protest, every grassroots effort needs funding—and you make that happen."
},

"content_creator": { 
    name: "🎥 Content Creator", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Content_Creator.png",
    action: "https://www.catchafire.org/volunteer/",  // ✅ Offer your creative skills to a nonprofit
    resources: [
        {
            name: "Canva",
            link: "https://www.canva.com/",
            description: "A powerful, easy-to-use design tool for creating engaging activist content."
        },
        {
            name: "Buffer",
            link: "https://buffer.com/",
            description: "A social media management tool to help activists and organizations amplify their message online."
        }
    ],
    description: "Your creativity shapes movements! Whether through videos, social media, branding, or design, your work shifts perspectives and rallies people behind causes that matter."
},
"legal_advocate": { 
    name: "⚖️ Legal Advocate", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Legal_Advocate.png",
    action: "https://www.aclu.org/action/",  // ✅ Get involved in legal activism with ACLU
    resources: [
        {
            name: "Equal Justice Initiative",
            link: "https://eji.org/",
            description: "A legal advocacy group fighting against mass incarceration, racial injustice, and excessive punishment."
        },
        {
            name: "National Lawyers Guild",
            link: "https://www.nlg.org/",
            description: "A network of activist lawyers providing legal support for social justice movements."
        }
    ],
    description: "Justice needs warriors! You fight unjust laws, protect the rights of the vulnerable, and hold those in power accountable."
},

"tech_supporter": { 
    name: "🖥️ Tech Supporter", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Tech_Supporter.png",
    action: "https://www.codeforamerica.org/",  // ✅ Volunteer your tech skills for social good
    resources: [
        {
            name: "Catchafire",
            link: "https://www.catchafire.org/volunteer/",
            description: "Connects skilled volunteers (including IT professionals) with nonprofits in need of digital support."
        },
        {
            name: "Mozilla Foundation",
            link: "https://foundation.mozilla.org/",
            description: "Advocates for internet privacy, security, and open-source technology for social good."
        }
    ],
    description: "You are the architect of revolution! You ensure that networks are secure, websites function, and technology is used to empower activists."
},

"educator": { 
    name: "📚 Knowledge Spreader", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Knowledge_Spreader.png",
    action: "https://www.catchafire.org/volunteer/",  // ✅ Use your teaching skills for nonprofit causes
    resources: [
        {
            name: "Khan Academy",
            link: "https://www.khanacademy.org/",
            description: "A nonprofit platform offering free education in various subjects for learners worldwide."
        },
        {
            name: "EdX",
            link: "https://www.edx.org/",
            description: "Provides high-quality online courses from top universities on social justice, education, and activism."
        }
    ],
    description: "You turn knowledge into power! You educate, inform, and empower communities with the facts and strategies they need to take action."
},

"environmentalist": { 
    name: "🌱 Earth Defender", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png",
    action: "https://www.sierraclub.org/get-involved",  // ✅ Join environmental activism
    resources: [
        {
            name: "Greenpeace",
            link: "https://www.greenpeace.org/international/",
            description: "A global network leading campaigns to stop climate change, protect forests, and reduce pollution."
        },
        {
            name: "Sunrise Movement",
            link: "https://www.sunrisemovement.org/",
            description: "A youth-led movement fighting for climate justice and the Green New Deal."
        }
    ],
    description: "You fight for the planet! Whether it's climate justice, sustainability, or environmental activism, you're on the frontlines of protecting the Earth."
},

"voter_mobilizer": { 
    name: "🗳️ Democracy Protector", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Democracy_Protector.png",
    action: "https://www.whenweallvote.org/",  // ✅ Register voters and take action
    resources: [
        {
            name: "Coalition for Community for Democracy",
            link: "https://cc4democracy.com/",
            description: "A grassroots group committed to strengthening democratic engagement and protecting voting rights."
        },
        {
            name: "Fair Fight Action",
            link: "https://fairfight.com/",
            description: "An organization dedicated to fighting voter suppression and ensuring fair elections."
        }
    ],
    description: "You defend democracy! By registering voters, fighting voter suppression, and mobilizing election turnout, you make sure every voice is heard."
},
"labor_advocate": { 
    name: "⚒️ Workers' Rights Champion", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Labor_Advocate.png",
    action: "https://aflcio.org/take-action",  // ✅ Join a labor rights movement
    resources: [
        {
            name: "Jobs with Justice",
            link: "https://www.jwj.org/",
            description: "A grassroots network advocating for fair wages, workers' rights, and better labor conditions."
        },
        {
            name: "National Domestic Workers Alliance",
            link: "https://www.domesticworkers.org/",
            description: "Fights for fair pay, protections, and dignity for domestic workers across the U.S."
        }
    ],
    description: "You stand up for workers! Whether fighting for fair wages, safer conditions, or labor rights, you ensure dignity in the workplace."
},

"healthcare_advocate": { 
    name: "🏥 Health Equity Fighter", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Health_Equity_Fighter.png",
    action: "https://familiesusa.org/take-action/",  // ✅ Join healthcare advocacy efforts
    resources: [
        {
            name: "Physicians for a National Health Program",
            link: "https://pnhp.org/",
            description: "A nonprofit advocating for single-payer healthcare and universal access to medical care."
        },
        {
            name: "Health Leads",
            link: "https://healthleadsusa.org/",
            description: "Works to address social determinants of health and expand access to care for underserved communities."
        }
    ],
    description: "Healthcare should be a right, not a privilege. You work to ensure that all people have access to quality medical care."
},

"logistics_coordinator": { 
    name: "🚛 Logistics Coordinator", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Logistics_Coordinator.png",
    action: "https://mutualaidhub.org/",  // ✅ Connect with local mutual aid networks
    resources: [
        {
            name: "Direct Action Everywhere",
            link: "https://www.directactioneverywhere.com/",
            description: "Organizes protests and direct action events, often requiring logistical coordination."
        },
        {
            name: "World Central Kitchen",
            link: "https://wck.org/",
            description: "Provides rapid food distribution in disaster-stricken areas, requiring logistical coordination."
        }
    ],
    description: "You keep movements running smoothly! Whether organizing transportation, supplies, or event logistics, you make activism possible."
},

"policy_influencer": { 
    name: "🏛️ Policy Influencer", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Policy_Influencer.png",
    action: "https://commoncause.org/take-action/",  // ✅ Engage in policy advocacy
    resources: [
        {
            name: "Coalition for Community for Democracy",
            link: "https://cc4democracy.com/",
            description: "A movement working to engage communities in policy advocacy and civic participation."
        },
        {
            name: "Brennan Center for Justice",
            link: "https://www.brennancenter.org/",
            description: "A nonpartisan law and policy institute focused on democracy, justice reform, and voting rights."
        }
    ],
    description: "You work to change the system from within! Whether through lobbying, policy writing, or community advocacy, you shape the future."
},

"remote_strategist": { 
    name: "💻 Remote Strategist", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Remote_Strategist.png",
    action: "https://www.catchafire.org/volunteer/",  // ✅ Provide remote support for nonprofits
    resources: [
        {
            name: "VolunteerMatch Virtual Opportunities",
            link: "https://www.volunteermatch.org/virtual-volunteering",
            description: "A platform to find virtual volunteer opportunities with nonprofits that need remote help."
        },
        {
            name: "Idealist Remote Volunteering",
            link: "https://www.idealist.org/en/remote-volunteering",
            description: "Connects activists with remote volunteer roles, including research, project management, and advocacy."
        }
    ],
    description: "You may not be in the streets, but you are behind every powerful movement! Your strategic mind ensures that activism is effective and well-organized."
},
"environmentalist": { 
    name: "🌱 Earth Defender", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png",
    action: "https://www.sierraclub.org/get-involved",  // ✅ Join environmental activism
    resources: [
        {
            name: "Greenpeace",
            link: "https://www.greenpeace.org/international/",
            description: "A global network leading campaigns to stop climate change, protect forests, and reduce pollution."
        },
        {
            name: "Sunrise Movement",
            link: "https://www.sunrisemovement.org/",
            description: "A youth-led movement fighting for climate justice and the Green New Deal."
        }
    ],
    description: "You fight for the planet! Whether it's climate justice, sustainability, or environmental activism, you're on the frontlines of protecting the Earth."
},
"veterans_advocate": { 
    name: "🎖️ Veterans Advocate", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Veterans_Advocate.png",
    action: "https://www.woundedwarriorproject.org/programs",  // ✅ Engage in direct veteran support programs
    resources: [
        {
            name: "IAVA (Iraq and Afghanistan Veterans of America)",
            link: "https://iava.org/",
            description: "Advocates for policy change and provides community support for post-9/11 veterans."
        },
        {
            name: "Veterans Crisis Line",
            link: "https://www.veteranscrisisline.net/",
            description: "Provides immediate mental health support for veterans in crisis."
        }
    ],
    description: "You are a fierce advocate for those who have served. Whether helping veterans navigate benefits, supporting mental health initiatives, or fighting for policy changes, you ensure that veterans receive the care, respect, and resources they deserve."
},
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

        // Generate Resources Section
        var resourceLinks = result.resources.map(resource => 
            `<li><a href="${resource.link}" target="_blank">${resource.name}</a>: ${resource.description}</li>`
        ).join("");

        // Display Results
        resultText.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p><ul>${resourceLinks}</ul>`;
        personaImage.src = result.image;
        personaImage.style.display = "block";

        actionLink.setAttribute("href", result.action);
        actionLink.setAttribute("target", "_blank");
        actionLink.innerText = "Take Action Now!";
        actionLink.style.display = "inline-block";

        resultContainer.style.display = "block";
    });
});

'use strict';

document.addEventListener("DOMContentLoaded", function () {
    var quizForm = document.getElementById("quiz-form");
    var resultContainer = document.getElementById("result-container");
    var resultText = document.getElementById("result-text");
    var personaImage = document.getElementById("persona-image");

    var activistTypes = {
        "firestarter": { 
            name: "🔥 Frontline Firestarter", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Frontline_Firestarter.png",
            action: "https://www.indivisible.org/",
            resources: [
                {
                    name: "**Take Action Now!**",
                    link: "https://www.indivisible.org/",
                    description: "Research shows that people are more likely to make a difference when they act immediately. If you wait, life’s demands may push this aside, and your opportunity to contribute could be lost. [Start here](https://www.indivisible.org/)."
                },
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
            ],
            description: "You are the spark that ignites change! Whether you're leading a protest, speaking truth to power, or mobilizing people on the ground, you thrive in the heat of action."
        },

        "guardian": { 
            name: "📡 Digital Guardian", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Digital_Guardian.png",
            action: "https://www.fightforthefuture.org/",
            resources: [
                {
                    name: "**Take Action Now!**",
                    link: "https://www.fightforthefuture.org/",
                    description: "The best time to act is now. Take immediate action to protect digital rights. [Start here](https://www.fightforthefuture.org/)."
                },
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
            action: "https://www.volunteermatch.org/",
            resources: [
                {
                    name: "**Take Action Now!**",
                    link: "https://www.volunteermatch.org/",
                    description: "Volunteering locally starts with a single step. Find an opportunity near you today. [Start here](https://www.volunteermatch.org/)."
                },
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
            action: "https://secure.actblue.com",
            resources: [
                {
                    name: "**Take Action Now!**",
                    link: "https://secure.actblue.com",
                    description: "Raising funds is the key to keeping movements alive. Start your campaign today. [Start here](https://secure.actblue.com)."
                },
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

        "environmentalist": { 
            name: "🌱 Earth Defender", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Earth_Defender.png",
            action: "https://www.sierraclub.org/get-involved",
            resources: [
                {
                    name: "**Take Action Now!**",
                    link: "https://www.sierraclub.org/get-involved",
                    description: "The environment needs you today, not tomorrow. Take action for the planet. [Start here](https://www.sierraclub.org/get-involved)."
                },
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
            resources: [
                {
                    name: "Take Action Now",
                    link: "https://www.woundedwarriorproject.org/programs",
                    description: "Support programs that help veterans reintegrate, receive medical care, and access benefits."
                },
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
            description: "You are a fierce advocate for those who have served. You help veterans access healthcare, fight for policy changes, and ensure they get the support they deserve."
        },
        
"voter_mobilizer": { 
    name: "🗳️ Democracy Protector", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Democracy_Protector.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.whenweallvote.org/",
            description: "Ensure that everyone has access to voting and is informed about their rights."
        },
        {
            name: "Coalition for Community for Democracy",
            link: "https://cc4democracy.com/",
            description: "A grassroots group committed to strengthening democratic engagement and voter rights."
        },
        {
            name: "Fair Fight Action",
            link: "https://fairfight.com/",
            description: "An organization dedicated to fighting voter suppression and ensuring fair elections."
        }
    ],
    description: "You defend democracy! By registering voters, fighting suppression, and encouraging civic engagement, you make sure every voice is heard."
},
        "home_activist": { 
            name: "🏡 Home-Based Activist", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Home_Activist.png",
            action: "https://cc4democracy.com/",
            resources: [
                { 
                    name: "Take Action Now!", 
                    link: "https://cc4democracy.com/", 
                    description: "Make an impact without leaving your home! Join the CC4D Card Campaign and encourage civic engagement through handwritten letters." 
                },
                { 
                    name: "VolunteerMatch Virtual Opportunities", 
                    link: "https://www.volunteermatch.org/virtual-volunteering", 
                    description: "Find meaningful ways to contribute remotely through volunteer projects that fit your skills." 
                },
                { 
                    name: "Fair Fight Action", 
                    link: "https://fairfight.com/", 
                    description: "Support efforts to fight voter suppression and ensure fair elections across the country." 
                }
            ],
            description: "You take action from home! Whether writing letters, organizing online, fundraising, or spreading awareness, your work fuels movements without stepping outside your door."
        }
    };
    
    "labor_advocate": { 
    name: "⚒️ Workers' Rights Champion", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Labor_Advocate.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://aflcio.org/take-action",
            description: "Support workers' rights and advocate for fair wages and better working conditions."
        },
        {
            name: "Jobs with Justice",
            link: "https://www.jwj.org/",
            description: "A grassroots network advocating for labor rights and economic justice."
        },
        {
            name: "National Domestic Workers Alliance",
            link: "https://www.domesticworkers.org/",
            description: "Fights for fair pay and protections for domestic workers across the U.S."
        }
    ],
    description: "You stand up for workers! Whether fighting for fair wages, safer conditions, or labor rights, you ensure dignity in the workplace."
},

"healthcare_advocate": { 
    name: "🏥 Health Equity Fighter", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Health_Equity_Fighter.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://familiesusa.org/take-action/",
            description: "Join efforts to make healthcare more accessible and equitable for all."
        },
        {
            name: "Physicians for a National Health Program",
            link: "https://pnhp.org/",
            description: "Advocates for universal healthcare and medical access for all."
        },
        {
            name: "Health Leads",
            link: "https://healthleadsusa.org/",
            description: "Works to address social determinants of health for underserved communities."
        }
    ],
    description: "You believe healthcare should be a right, not a privilege. You fight for policies that expand access to quality medical care for all."
},

"logistics_coordinator": { 
    name: "🚛 Logistics Coordinator", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Logistics_Coordinator.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://mutualaidhub.org/",
            description: "Support mutual aid efforts by organizing essential supplies and resources."
        },
        {
            name: "Direct Action Everywhere",
            link: "https://www.directactioneverywhere.com/",
            description: "Organizes protests and direct action events requiring logistics coordination."
        },
        {
            name: "World Central Kitchen",
            link: "https://wck.org/",
            description: "Provides food relief in disaster-stricken areas through rapid response coordination."
        }
    ],
    description: "You keep movements running smoothly! Whether managing transportation, supplies, or event logistics, your planning makes activism possible."
},

"policy_influencer": { 
    name: "🏛️ Policy Influencer", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Policy_Influencer.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://commoncause.org/take-action/",
            description: "Engage in policy advocacy and work toward systemic change."
        },
        {
            name: "Coalition for Community for Democracy",
            link: "https://cc4democracy.com/",
            description: "A movement focused on engaging communities in policy advocacy."
        },
        {
            name: "Brennan Center for Justice",
            link: "https://www.brennancenter.org/",
            description: "A law and policy institute focused on democracy, justice reform, and voting rights."
        }
    ],
    description: "You work to change the system from within! Whether through lobbying, policy writing, or advocacy, you shape the future of legislation."
},

"remote_strategist": { 
    name: "💻 Remote Strategist", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Remote_Strategist.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.catchafire.org/volunteer/",
            description: "Use your remote skills to support nonprofits from anywhere in the world."
        },
        {
            name: "VolunteerMatch Virtual Opportunities",
            link: "https://www.volunteermatch.org/virtual-volunteering",
            description: "Find remote volunteer opportunities with organizations in need of support."
        },
        {
            name: "Idealist Remote Volunteering",
            link: "https://www.idealist.org/en/remote-volunteering",
            description: "Offers remote roles for activists in research, advocacy, and project management."
        }
    ],
    description: "You may not be in the streets, but you are behind every powerful movement! Your strategic mind ensures activism is effective and well-organized."
},

"tech_supporter": { 
    name: "🖥️ Tech Supporter", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Tech_Supporter.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.codeforamerica.org/",
            description: "Volunteer your tech skills to build innovative solutions for social good."
        },
        {
            name: "Catchafire",
            link: "https://www.catchafire.org/volunteer/",
            description: "Matches skilled tech volunteers with nonprofits needing digital support."
        },
        {
            name: "Mozilla Foundation",
            link: "https://foundation.mozilla.org/",
            description: "Advocates for internet privacy, security, and open-source technology."
        }
    ],
    description: "You are the architect of digital activism! You ensure technology is used to empower people, protect privacy, and support grassroots movements."
}
"content_creator": { 
    name: "🎥 Content Creator", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Content_Creator.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.catchafire.org/volunteer/",
            description: "Your skills are needed to amplify important causes. Volunteer your creative talents to make a difference."
        },
        {
            name: "Canva",
            link: "https://www.canva.com/",
            description: "A powerful, easy-to-use design tool for creating engaging activist content."
        },
        {
            name: "Buffer",
            link: "https://buffer.com/",
            description: "A social media management tool to help activists and organizations amplify their message."
        }
    ],
    description: "Your creativity shapes movements! Whether through videos, social media, branding, or design, your work shifts perspectives and rallies people behind causes that matter."
},

"legal_advocate": { 
    name: "⚖️ Legal Advocate", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Legal_Advocate.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.aclu.org/action/",
            description: "Get involved in legal activism and help fight unjust laws and protect rights."
        },
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

"knowledge_spreader": { 
    name: "📚 Knowledge Spreader", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Knowledge_Spreader.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.catchafire.org/volunteer/",
            description: "Use your teaching skills to educate and empower others through nonprofit organizations."
        },
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

"tech_supporter": { 
    name: "🖥️ Tech Supporter", 
    image: "https://upliftservicenetwork.github.io/activist-quiz/images/Tech_Supporter.png",
    resources: [
        {
            name: "Take Action Now",
            link: "https://www.codeforamerica.org/",
            description: "Volunteer your tech skills to build innovative solutions for social good."
        },
        {
            name: "Catchafire",
            link: "https://www.catchafire.org/volunteer/",
            description: "Matches skilled tech volunteers with nonprofits needing digital support."
        },
        {
            name: "Mozilla Foundation",
            link: "https://foundation.mozilla.org/",
            description: "Advocates for internet privacy, security, and open-source technology."
        }
    ],
    description: "You are the architect of digital activism! You ensure technology is used to empower people, protect privacy, and support grassroots movements."
},
"home_activist": { 
            name: "🏡 Home-Based Activist", 
            image: "https://upliftservicenetwork.github.io/activist-quiz/images/Home_Activist.png",
            resources: [
                {
                    name: "Take Action Now",
                    link: "https://cc4democracy.com/",
                    description: "Engage in powerful activism from home by writing letters, making calls, and supporting key movements remotely."
                },
                {
                    name: "Vote Forward",
                    link: "https://votefwd.org/",
                    description: "Write letters to encourage voter participation and protect democracy from home."
                },
                {
                    name: "5 Calls",
                    link: "https://5calls.org/",
                    description: "Make impactful calls to legislators and representatives advocating for social justice."
                }
            ],
            description: "You make an impact without ever leaving home! By writing letters, signing petitions, phone banking, and supporting digital advocacy, you play a crucial role in activism."
        }
    };
    
quizForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var answerCounts = {};
        Object.keys(activistTypes).forEach(type => answerCounts[type] = 0);

        var selectedAnswers = new FormData(quizForm);

        selectedAnswers.forEach((value) => {
            Object.keys(activistTypes).forEach(type => {
                if (activistTypes[type].name.toLowerCase().includes(value.toLowerCase())) {
                    answerCounts[type]++;
                }
            });
        });

        var topType = Object.keys(answerCounts).reduce((a, b) => answerCounts[a] > answerCounts[b] ? a : b, "home_activist"); // Default to Home-Based Activist
        var result = activistTypes[topType];

        var resourceLinks = [
            `<li><strong>Take Action Now!</strong><br>Act now to make an impact from home. <a href="${result.action}" target="_blank">Start here</a>.</li>`
        ];
        resourceLinks.push(...result.resources.map(resource => 
            `<li><a href="${resource.link}" target="_blank">${resource.name}</a>: ${resource.description}</li>`
        ));

        resultText.innerHTML = `<h2>${result.name}</h2><p>${result.description}</p><ul>${resourceLinks.join("")}</ul>`;
        personaImage.src = result.image;
        personaImage.style.display = "block";

        resultContainer.style.display = "block";
    });
});

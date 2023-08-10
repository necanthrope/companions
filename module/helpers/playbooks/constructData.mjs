export const ConstructData = {};

ConstructData.abilityBlocks = {
    "0": {"cool": "+1", "bold": "-1", "appeal": "+0", "clever": "+2", "vortex": "+1"},
    "1": {"cool": "+0", "bold": "-1", "appeal": "-1", "clever": "+2", "vortex": "+2"},
    "2": {"cool": "-1", "bold": "+2", "appeal": "-1", "clever": "+2", "vortex": "+1"},
    "3": {"cool": "-1", "bold": "+1", "appeal": "-1", "clever": "+2", "vortex": "+1"},
}

ConstructData.abilityTags = {
    "0": ["+androgyne", "+vortex"],
    "1": ["+aware", "+vortex"],
    "2": ["+eternal", "+vortex"],
    "3": ["+flexible", "+vortex"],
}

ConstructData.moves = {
    "playbook": {
        "eideticPolymath": {
            "title": "Eidetic Polymath",
            "description": "Not much gets past you. And what you don't notice you can almost always infer from known variables. Your memory is perfect, as well. +1 Clever (Clever +3)",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "theCalculusOfDeath": {
            "title": "The Calculus of Death",
            "description": "Your accelerated synthetic mind can analyze enemies and calculate all possible outcomes. When you Control a Dire Situation, roll +Clever instead of +Bold.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "madeOfHarderStuff": {
            "title": "Made of Harder Stuff",
            "description": "You are immune to all stress tags, and you cannot be stunned.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "inTheDoctorsImage": {
            "title": "In the Doctor's Image",
            "description": "You were designed by the Doctor, and therefore value sentient life above all things. Take +1 forward when you use a +stun weapon.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "todayYouGetToLive": {
            "title": "Today You Get to Live",
            "description": "When someone you value dies, you may slightly bend time to position yourself to switch places with them. When you do this, mark an experience circle, die, and make The Death Move.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
    },
    "romance": {
        "constructRomance": {
            "title": "The Construct's Romance Move",
            "description": "Sometimes biological beings fall for you. When you can manage a moment of intimacy, their History with you resets, and you mark experience. It's usually a bizarre experience for them, and an enlightening one for you.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    }
};

ConstructData.tags = {
    "androgyne" : {
        "title" : "Androgyne",
        "description" : "You are programmed to perfectly emulate a human being. Only sensing gear with +vortex can tell you're a construct. Also, when you Convince with Emotions, take +1.",
    },
    "aware" : {
        "title" : "Aware",
        "description" : "You possess an affinity for the Vortex. You begin the game with the Vortex Move of your choice.",
    },
    "eternal" : {
        "title" : "Eternal",
        "description" : "You automatically get a full hit (10+) when you make The Death Move.",
    },
    "flexible" : {
        "title" : "Flexible",
        "description" : "You start the game with one additional move from any other playbook.",
    },
    "vortex" : {
        "title" : "Vortex",
        "description" : "As with things' tags. You are constructed from Gallifreyan technology.",
    },
};

ConstructData.bonds = {
    1 : {
        "historyText" : "%s once repaired my logic core, leaving an impression of their\n" +
            "personality.",
        "bonus" : 2
    },
    2 : {
        "historyText" : "%s was there when I first came online. Like the Doctor, they are my\n" +
            "parent.",
        "bonus" : 3
    },
    3 : {
        "historyText" : "%s always treated me like an equal instead of a thing.",
        "bonus" : 1
    },
    4 : {
        "historyText" : "%s reminds me of the Doctor. I love them for this.",
        "bonus" : 1
    },
    5 : {
        "historyText" : "The Doctor's last words to me were \"Keep an eye on %s.\"",
        "bonus" : 1
    },
};
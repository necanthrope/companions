export const WitnessData = {};

WitnessData.abilityBlocks = {
    "0": {"cool": "+2", "bold": "+1", "appeal": "+0", "clever": "+1", "vortex": "-1"},
    "1": {"cool": "+1", "bold": "+0", "appeal": "+2", "clever": "+1", "vortex": "-1"},
    "2": {"cool": "-1", "bold": "+2", "appeal": "-1", "clever": "+2", "vortex": "+0"},
    "3": {"cool": "+0", "bold": "-1", "appeal": "+1", "clever": "+2", "vortex": "+1"},
}

WitnessData.createBlocks = {
    "names": "Emma, Sofia, Eden, Fatima, Yeon, JIng, Maeva, Anna, Maria, Sara.<br/>\nMohammed, Jayden, Noah, Wei, George, Marc, Andrei, Jun, Carl, Hiro.",
    "genderPresentation": "Feminine, masculine, androgynous, fluid, nonhuman.",
    "clothes": "Flashy outfits, retro duds, business wear, timeless fashion, second hand clothes, jeans & hoodie.",
    "face": "Broad face, nondescript face, lean face, round face, weary face.",
    "eyes": "Bright eyes, eager eyes, deep eyes, quick eyes, soft eyes.",
    "body": "Stocky body, strong body, soft body, thick body, petite body,",
};

WitnessData.moves = {
    "playbook": {
        "getIntoTrouble": {
            "title": "Get into Trouble",
            "description": "You have a knack for getting yourself into interesting and dangerous situations. When you use sneaking or guile to learn about something or someone, tell the the MC how you get into a position to do so, then roll +Clever. On a 10+, you are well hidden. Take +1 forward when maintain the element of surprise. On a 7-9, you are hidden, but you have somehow alerted the danger to your presence. If appropriate, it is actively searching for you. On a miss, you wind up in a Dire Situation, and the MC will have the danger take appropriate action.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "You are well hidden. Take +1 forward when maintain the element of surprise.",
            "partialHit": "7-9, You are hidden, but you have somehow alerted the danger to your presence. If appropriate, it is actively searching for you.",
            "miss": "You wind up in a Dire Situation, and the MC will have the danger take appropriate action.",
            "options": "",
        },
        "prodigy": {
            "title": "Prodigy",
            "description": "You always had a knack for the strange and alien, even before meeting the Doctor. Raise your Vortex to +1, then check off your highest Spark box. If you take this move during play, you must justify it in the fiction.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "spooky": {
            "title": "Spooky",
            "description": "When the Doctor died, you died by her side. Take the The Oncoming Storm, then mark off your highest Spark box. You have a reputation around the Universe, like she did. People who have heard of her have heard of you too, and have bestowed a title on you, just like her. That title is The Witness, unless you know a better one. If you take this move during play, you must already have another Vortex move.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "babeInTheWoods": {
            "title": "Babe in the Woods",
            "description": "When someone Bonds with you, mark Experience. Additionally, when someone saves your life, they mark Experience.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "whatDoesThisDo": {
            "title": "What Does This Do?",
            "description": "When you treat something dangerous as a mundane curiosity out of ignorance, mark Experience.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "aLittleHelp": {
            "title": "A Little Help",
            "description": "When you learn something new from another Companion explaining what’s happening, mark Experience. If this results in an advance, both of you take +1 Bond with each other.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
    },
    "romance": {
        "witnessRomance": {
            "title": "The Witness's Romance Move",
            "description": "When you have a moment of closeness or intimacy with another Companion, take +1 Bond with them.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    }
};

WitnessData.moveInstructions = "You get all the basic moves, plus Get into Trouble and A Little Help.<br/>\nChoose one additional Witness move.";

WitnessData.bonds = {
    1: {
        "historyText": "%s was there for me on the Day She Died.",
        "bonus": 1
    },
};

WitnessData.advances = {
    "bumpCool": {
        text: "+1 Cool (max +2)",
        types: ["early", "late"],
    },
    "bumpBold": {
        text: "+1 Bold (max +2)",
        types: ["early", "late"],
    },
    "bumpAppeal": {
        text: "+1 Appeal (max +2)",
        types: ["early", "late"],
    },
    "newMove1": {
        text: "A new Witness Move",
        types: ["early", "late"],
    },
    "newMove2": {
        text: "A new Witness Move",
        types: ["early", "late"],
    },
    "newExtMove": {
        text: "A new move from another playbook",
        types: ["early", "late"],
    },
    "leaveTheTardis": {
        text: "Leave the TARDIS and live your life",
        types: ["late"],
    },
    "embraceYourPotential": {
        text: "Embrace your Potential",
        types: ["late"],
    },
};
WitnessData.takenAdvances = {};
export const WarriorPoetData = {};

WarriorPoetData.abilityBlocks = {
    "0": {"cool": "+1", "bold": "+2", "appeal": "+1", "clever": "+0", "vortex": "-1"},
    "1": {"cool": "+0", "bold": "+2", "appeal": "+1", "clever": "+1", "vortex": "-1"},
    "2": {"cool": "-1", "bold": "+2", "appeal": "+1", "clever": "+1", "vortex": "+0"},
    "3": {"cool": "+2", "bold": "+2", "appeal": "-1", "clever": "+0", "vortex": "-1"},
}

WarriorPoetData.createBlocks = {
    "names": "Windstorm, Lightning, Falling Star, Tornado, Night. Bear, Turtle, Stag, Lapwing, Crow, Owl.<br/>\nWisdom, Luck, Joy, Strength, Truth. Tree, Sky, Cloud, Mountain, River",
    "genderPresentation": "Feminine, masculine, androgynous, fluid, nonhuman.",
    "clothes": "Battered armor, patchwork armor, mismatched armor, modern armor, future armor.",
    "face": "Stoic face, lined face, scowling face, weathered face, scarred face, flat face.",
    "eyes": "Calculating eyes, wild eyes, psycho eyes, cunning eyes, sad eyes, dead eyes.",
    "body": "Hard body, rangy body, huge body, buff body, wiry body, compact body, stocky body.",
};

WarriorPoetData.moves = {
    "playbook": {
        "keenEyes": {
            "title": "Keen Eyes",
            "description": "Your experiences in battle and hunting have finely honed your senses. When you Read a Dire Situation, you may roll +Bold instead of +Clever.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityBold"],
            "fullHit": "Ask 3:",
            "partialHit": "Ask 1:",
            "miss": "",
            "options": "<ul><li>Where's my best escape route / way in / way past?</li><li>Who or what is the biggest threat?</li><li>Who is willing to talk?</li><li>What should I be on the lookout for?</li><li>Who stands to lose/gain the most?</li><li>Who is in control here?</li></ul>",
        },
        "theFavourOfTheGods": {
            "title": "The Favour of the Gods",
            "description": "When you risk your life to save others, take +1 forward when Tempting Fate. Additionally, if you die, take +1 forward during The Death Move.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "battlescars": {
            "title": "Battlescars",
            "description": "+1 Bold (Bold +3). Describe them. Make it awesome.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "stormOfDeath": {
            "title": "Storm of Death",
            "description": "When you are in combat against overwhelming odds or numbers, add +area and +loud to whatever weapons you use for the duration of the fight. Afterwards, if your fate is before 9:00, advance it to 9:00. If it is at 9:00 or after, advance it to 12:00. Do this before Tempting Fate.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "theSongOfMyPeople": {
            "title": "The Song of my People",
            "description": "When someone asks you for advice, tell them a story from your culture that applies to the situation, then roll +Bond with them. On a hit, they get a +1 ongoing while the story's moral/advice applies. On a 10+, mark experience.",
            "type": "roll",
            "stat": ["history"],
            "fullHit": "The person who heard your story gets +1 ongoing while the story's moral/advice applies. Also, mark experience.",
            "partialHit": "The person who heard your story gets +1 ongoing while the story's moral/advice applies.",
            "miss": "",
            "options": "",
        },
        "deathIsMyCompanion": {
            "title": "Death is my Companion",
            "description": "When your fate is 9:00 or later, take +1 ongoing when you Control a Dire Situation. You can also sense that your end is drawing near.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
    },
    "romance": {
        "warriorPoetRomance": {
            "title": "The Warrior-Poet's Romance Move",
            "description": "Your mate has +1 forward when Tempting Fate if they are near you, just from your protection. If someone is a danger to them, take +1 ongoing against them until your mate is safe.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    }
};

WarriorPoetData.bonds = {
    1: {
        "historyText": "%s is my Elder. They have taught me much already.",
        "bonus": 2
    },
    2: {
        "historyText": "I hold %s in contempt for their past actions.",
        "bonus": 1
    },
    3: {
        "historyText": "%s has shown me that violence isn't always the answer.",
        "bonus": 1
    },
    4: {
        "historyText": "%s friendship is worth more to me than the Way of the Warrior.",
        "bonus": 3
    },
    5: {
        "historyText": "I have sworn a blood oath to protect %s.",
        "bonus": 2
    },
};

WarriorPoetData.advances = {
    "bumpCool": {
        text: "+1 Cool (max +2)",
        types: ["early", "late"],
    },
    "bumpClever": {
        text: "+1 Clever (max +2)",
        types: ["early", "late"],
    },
    "bumpAppeal": {
        text: "+1 Appeal (max +2)",
        types: ["early", "late"],
    },
    "newMove1": {
        text: "A new Warrior-Poet Move",
        types: ["early", "late"],
    },
    "newMove2": {
        text: "A new Warrior-Poet Move",
        types: ["early", "late"],
    },
    "newExtMove1": {
        text: "A new move from another playbook",
        types: ["early", "late"],
    },
    "newExtMove2": {
        text: "A new move from another playbook",
        types: ["early", "late"],
    },
    "vortexMove": {
        text: "Take any Vortex Move",
        types: ["late"],
    },
    "bumpAny": {
        text: "+1 to any stat (max +3)",
        types: ["late"],
    },
    "changeRomance": {
        text: "Change your Romance Move to another",
        types: ["late"],
    },
    "changePlaybook": {
        text: "Change to another playbook",
        types: ["late"],
    },
    "leaveTheTardis": {
        text: "Leave the TARDIS and live your life",
        types: ["late"],
    },
};

WarriorPoetData.takenAdvances = {};
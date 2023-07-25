export const WarriorPoetData = {};

WarriorPoetData.moves = {
    "playbook": {
        "keenEyes": {
            "title": "Keen Eyes",
            "description": "Your experiences in battle and hunting have finely honed your senses. When you Read a Dire Situation, use Bold instead of Clever.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityBold"],
            "fullHit": "Ask 3:",
            "partialHit": "Ask 1:",
            "miss": "",
            "options": "<ul><li>Where’s my best escape route / way in / way past?</li><li>Who or what is the biggest threat?</li><li>Who is willing to talk?</li><li>What should I be on the lookout for?</li><li>Who stands to lose/gain the most?</li><li>Who is in control here?</li></ul>",
        },
        "theFavourOfTheGods": {
            "title": "The Favour of the Gods",
            "description": "When you risk your life to save others, take +1 forward when Tempting Fate. Additionally, if you die, gain +1 forward during The Death Move.",
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
            "description": "When someone asks you for advice, tell them a story from your culture that applies to the situation, then roll +Bond with them. On a hit, they get a +1 ongoing while the story’s moral/advice applies. On a 10+, mark experience.",
            "type": "roll",
            "stat": ["COMPANIONS.Ability"],
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
    1 : {
        "1stText" : "",
        "3rdText" : "",
        "bonus" : 1
    },
};
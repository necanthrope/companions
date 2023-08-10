export const AgentData = {};

AgentData.abilityBlocks = {
    "0": {"cool": "+2", "bold": "+0", "appeal": "+1", "clever": "-1", "vortex": "+1"},
    "1": {"cool": "+2", "bold": "+1", "appeal": "+0", "clever": "+1", "vortex": "-1"},
    "2": {"cool": "+2", "bold": "-1", "appeal": "+2", "clever": "-1", "vortex": "+0"},
    "3": {"cool": "+2", "bold": "+1", "appeal": "+1", "clever": "+0", "vortex": "-1"},
};


AgentData.moves = {
    "playbook": {
        "notMyFirstTimeAtTheDance": {
            "title": "Not My First Time at the Dance",
            "description": "You're from the future, and have direct experience with technologies from all over spacetime. When Using Unfamiliar Technology, you may roll +Cool instead of +Vortex. Additionally, if you hit on that move, you gain insight into who made the device, and what other applications it may have.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityCool"],
            "fullHit": "It works without problems.",
            "partialHit": "It works once, but it breaks. Only a Whiz or an appropriate NPC can fix it.",
            "miss": "Someone gets hurt, the device is destroyed, or there are unforeseen consequences.",
            "options": "",
        },
        "youDontStandAChance": {
            "title": "You Don't Stand a Chance",
            "description": "When you Convince with Reason or Emotions, you may roll +Cool instead of +Appeal. Additionally, you may seduce just about any living being that values reproduction.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityCool"],
            "fullHit": "NPCs do what you want. For PCs, take both of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "partialHit": "NPCs do what you want, but with some strings attached. For PCs, choose one of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "miss": "",
            "options": "",
        },
        "tradecraft": {
            "title": "Tradecraft",
            "description": "When you are in a Dire Situation, roll +Clever, then describe a brief flashback scene in which you foresaw your predicament and used your experience as a spy or available advanced technology to save yourself. On a 10+, it works; you escape the situation without serious danger. On a 7–9, take +1 forward to get out of the jam.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "It works; you escape the situation without serious danger.",
            "partialHit": "Take +1 forward to get out of the jam.",
            "miss": "",
            "options": "",
        },
        "silverTongued": {
            "title": "Silver Tongued",
            "description": "When you roll +Bond, you may roll +Appeal instead, if your move involves lies or other manipulation. On a miss, in addition to whatever move the MC elects to do, the person you are rolling against automatically resets their History with you. They've learned what a manipulative piece of work you can be.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityAppeal"],
            "fullHit": "Reduce both of your Fates to 6:00, and clear all stress tags on you both. Their history with you goes up by 1.",
            "partialHit": "Reduce both of your Fates to 6:00, and clear all stress tags on you both.",
            "miss": "In addition to whatever move the MC elects to do, the person you are rolling against automatically resets their History with you. They've learned what a manipulative piece of work you can be.",
            "options": "",
        },
        "becauseILoveYou": {
            "title": "Because I Love You",
            "description": "When you lie to someone with whom you are Romantically Entangled, mark History with them. If they figure out the truth, their History with you resets, and you mark Experience.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "beenThereDoneThat": {
            "title": "Been There, Done That",
            "description": "Cool +1 (Cool +3).",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
    },
    "romance": {
        "agentRomance": {
            "title": "The Agent's Romance Move",
            "description": "When you have an intimate moment someone with whom you are Romantically Entangled, take 2 hold. Spend 1 for 1 to instinctively know where they are. Take +1 ongoing to any move you make trying to save their life while you have hold.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    },

};

AgentData.bonds = {
    1 : {
        "historyText" : "%s knows something about me that I wish they didn't.",
        "bonus" : 1
    },
    2 : {
        "historyText" : "I once left %s to die.",
        "bonus" : 3
    },
    3 : {
        "historyText" : "Before I was a companion, I tried to recruit %s to the Agency.",
        "bonus" : 1
    },
    4 : {
        "historyText" : "%s and I once fought our way out of impossible odds.",
        "bonus" : 2
    },
    5 : {
        "historyText" : "Of all the people I've seduced, I only ever truly loved %s.",
        "bonus" : 1
    },
};

AgentData.advances = {
    "bumpBold": {
        text: "+1 Bold (max +2)",
        types: ["early"],
    },
    "bumpClever": {
        text: "+1 Clever (max +2)",
        types: ["early"],
    },
    "bumpAppeal": {
        text: "+1 Appeal (max +2)",
        types: ["early"],
    },
    "newMove1": {
        text: "A new Agent Move",
        types: ["early"],
    },
    "newMove2": {
        text: "A new Agent Move",
        types: ["early"],
    },
    "newExtMove1": {
        text: "A new move from another playbook",
        types: ["early"],
    },
    "newExtMove2": {
        text: "A new move from another playbook",
        types: ["early"],
    },
    "vortexMove": {
        text: "Take any Vortex Move",
        types: ["early", "late"],
    },
    "bumpAny": {
        text: "+1 to any stat (max +3)",
        types: ["early", "late"],
    },
    "changeRomance": {
        text: "Change your Romance Move to another",
        types: ["early", "late"],
    },
    "changePlaybook": {
        text: "Change to another playbook",
        types: ["early", "late"],
    },
    "leaveTheTardis": {
        text: "Leave the TARDIS and live your life",
        types: ["early", "late"],
    },

};


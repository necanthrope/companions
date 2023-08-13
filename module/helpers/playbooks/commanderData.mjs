export const CommanderData = {};

CommanderData.abilityBlocks = {
    "0": {"cool": "+2", "bold": "+1", "appeal": "-1", "clever": "+0", "vortex": "+0"}, //+commando
    "1": {"cool": "+1", "bold": "+1", "appeal": "+2", "clever": "-1", "vortex": "+1"}, //+intelligence
    "2": {"cool": "+1", "bold": "+2", "appeal": "+0", "clever": "+1", "vortex": "-1"}, //+infantry
    "3": {"cool": "-1", "bold": "+1", "appeal": "+0", "clever": "+2", "vortex": "+1"}, //+technical
}

CommanderData.createBlocks = {

    "rank": "Colonel, Brigadier, General. Senator, Lady/Lord, Prime Minister.<br/>Torchwood Actual.</br>Force Captain, Foremost, Storm Leader, Hive Control, Lady/Lord-General.",
    "names": "Fitzpatrick, Patel, Donoghue, Rodriguez, Taylor, Murphy, Lynch, Mbenge.<br/>\nChan, O’Connor, Khan, Quinn, Bibi, Duffy, Ali, Mahmood, Campbell.<br/>,Thal, Voord, Koquilliax, Harbi, Xero, Dhravin, Rill, Makra.<br/>\nUraxi, Pelad, Solona, Drashe, Wirri, Ogri, Jagar-Ki, Sylar.",
    "genderPresentation": "Feminine, masculine, androgynous, fluid, nonhuman.",
    "clothes": "Crisp uniform, rumpled uniform, worn uniform, Robes of office, power suit, Seville Row.",
    "face": "Lined face, cold face, shrewd face, baby face, scarred face.",
    "eyes": "Distant eyes, sharp eyes, calculating eyes, darting eyes, staring eyes.",
    "body": "Wiry body, soft body, tough body, strange body, exotic body.",
};

CommanderData.abilityTags = {
    "0": ["+commando"],
    "1": ["+intelligence"],
    "2": ["+infantry"],
    "3": ["+technical"],
}

CommanderData.moves = {
    "playbook": {
        "intoTheBreach": {
            "title": "Into the Breach",
            "description": "When a Team member makes a move in a Dire Situation, do the following in addition to whatever the move tells you to do: on a 10+, they survive; choose one Team member and increase their esteem by one. On a 7-9, one Team member of your choice is grievously wounded; reduce their Fate by one and mark experience. On a miss, in addition to whatever hard move the MC makes, you send one or more of them to their deaths. The MC decides who.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "rememberTheFallen": {
            "title": "Remember the Fallen",
            "description": "You feel personally responsible for your Team, beyond mere duty. When you order one or more of your Team members to their deaths, take the following based on the one you held in the highest esteem:",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "<ul><li>0-esteem: take +1 forward. Not on your watch.</li><li>1-esteem: mark experience. You learn something from your awful mistake.</li><li>2-esteem: take one advance. You won't let this tragedy happen again.</li><li>3-esteem: take one advance or change one emotional key. You are changed by the horror and stress.</li></ul>",
        },
        "secureThePerimeter": {
            "title": "Secure the Perimeter",
            "description": "When you risk your Team by sending them to secure a dangerous or unknown area, roll +members sent, maximum +3. On a 10+, ask questions about the area as if you got a full hit on Read a Dire Situation. On a 7–9, you may ask the same questions, but reduce all their Fates by 1. On a miss, one or more of them dies (MC's choice).",
            "type": "roll",
            "stat": [
                {
                    "value": 1,
                    "label": "1 Team member"
                },
                {
                    "value": 2,
                    "label": "2 Team members"
                },
                {
                    "value": 3,
                    "label": "3 Team members"
                }],
            "fullHit": "Ask questions about the area as if you got a full hit on Read a Dire Situation.",
            "partialHit": "Ask questions about the area as if you got a full hit on Read a Dire Situation, but reduce all sent Team members Fate by 1.",
            "miss": "One or more Team members die (MC's choice).",
            "options": "",
        },
        "lookOut": {
            "title": "Look Out!",
            "description": "When a Companion Tempts Fate, you may offer the fate of any Team members in the vicinity instead of their own. The MC decides which Team member. Narrate how the Team member valiantly risks themselves to protect that Companion.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "searchAndRescue": {
            "title": "Search and Rescue",
            "description": "When any Companions or any of your Team members are held in a Dire Situation, take +1 ongoing to any move you make to save them.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "operationalExperience": {
            "title": "Operational Experience",
            "description": "When you give orders to other Companions in a Dire Situation, and they obey, they each take +1 forward. If they deny your commands, they each take −1 forward, expose you to danger, and mark History with you.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
    },
    "romance": {
        "commanderRomance": {
            "title": "The Commander's Romance Move",
            "description": "Mark experience whenever you or your orders come between a Team member — including you — and their romantic entanglement.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    }
};

CommanderData.bonds = {
    1: {
        "historyText": "I am considering offering %s membership on the Team.",
        "bonus": 1
    },
    2: {
        "historyText": "I would go through hell or high water to assure the safety of %s.",
        "bonus": 3
    },
    3: {
        "historyText": "%s saved my team when I couldn't.",
        "bonus": 2
    },
    4: {
        "historyText": "If %s were under my command, I would have brought them up on charges.",
        "bonus": 1
    },
    5: {
        "historyText": "I will never understand %s, and they will never understand me.",
        "bonus": 1
    },
};

CommanderData.advances = {
    "bumpTeamSize1": {
        text: "Increase your team by size by one",
        types: ["early", "late"],
    },
    "changeAoS1": {
        text: "Change one AoS tag, yours or others",
        types: ["early", "late"],
    },
    "changeAoS2": {
        text: "Change one AoS tag, yours or others",
        types: ["early", "late"],
    },
    "bumpAny1": {
        text: "+1 to any stat (max +3)",
        types: ["late"],
    },
    "newMove1": {
        text: "A new Commander Move",
        types: ["early", "late"],
    },
    "newMove2": {
        text: "A new Commander Move",
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
    "bumpTeamSize2": {
        text: "Increase your team by size by one",
        types: ["late"],
    },
    "bumpAny2": {
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

CommanderData.takenAdvances = {};
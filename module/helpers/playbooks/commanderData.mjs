export const CommanderData = {};

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
            "description": "You feel personally responsible for your Team, beyond mere duty. When you order one or more of your Team members to their deaths, take the following based on the Team member you held in the highest esteem:",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "<ul><li>0-esteem: take +1 forward. Not on your watch.</li><li>1-esteem: mark experience. You learn something from your awful mistake.</li><li>2-esteem: take one advance. You won’t let this tragedy happen again.</li><li>3-esteem: take one advance or change one emotional key. You are changed by the horror and stress.</li></ul>",
        },
        "secureThePerimeter": {
            "title": "Secure the Perimeter",
            "description": "When you risk your Team by sending them to secure a dangerous or unknown area, roll +members sent, maximum +3. On a 10+, ask questions about the area as if you got a full hit on Read a Dire Situation. On a 7–9, you may ask the same questions, but reduce all their Fates by 1. On a miss, one or more of them dies (MC’s choice).",
            "type": "roll",
            "stat": [
                {
                    "value":1,
                    "label":"1 Team member"
                },
                {
                    "value":2,
                    "label":"2 Team members"
                },
                {
                    "value":3,
                    "label":"3 Team members"
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
    1 : {
        "1stText" : "",
        "3rdText" : "",
        "bonus" : 1
    },
};
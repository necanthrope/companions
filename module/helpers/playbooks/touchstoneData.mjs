export const TouchstoneData = {};

TouchstoneData.moves = {
    "playbook": {
        "somethingAboutYou": {
            "title": "Something About You",
            "description": "When you Read a Person, you may roll +Appeal instead of +Clever. When you do so, describe how you use your graces (social or otherwise) to compel the target of your scrutiny to reveal more than they normally would. On a 10+, They're utterly unaware of how you've manipulated them.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityAppeal"],
            "fullHit": "Hold 3. While interacting with the person you're reading, spend your hold to ask their player questions, 1 for 1. They're utterly unaware of how you've manipulated them.",
            "partialHit": "Hold 1. While interacting with the person you're reading, spend your hold to ask their player questions, 1 for 1. They may be aware of how you've manipulated them.",
            "miss": "",
            "options": "<ul><li> Is your character telling the truth?</li><li> What's your character really feeling?</li><li> What does your character intend to do?</li><li> What does your character wish I'd do?</li><li> How could I get your character to ...?</li></ul>",

        },
        "suchAnUnbelievableFlirt": {
            "title": "Such an Unbelievable Flirt",
            "description": "When you can flirt with someone for a while (at least a short conversation), roll +Appeal. On 10+, hold 3. On a 7–9, hold 1. Spend your hold 1 for 1 to compel that person to act to help or protect you. If you leave their presence long enough for them to miss you, the MC can spend your remaining hold to make them give you something they think you want. For PCs, if they refuse, they act under pressure. NPCs are glad to help you, without reservation. ",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityAppeal"],
            "fullHit": "Hold 3. Spend your hold 1 for 1 to compel that person to act to help or protect you. If you leave their presence long enough for them to miss you, the MC can spend your remaining hold to make them give you something they think you want. For PCs, if they refuse, they act under pressure. NPCs are glad to help you, without reservation.",
            "partialHit": "Hold 1. Spend your hold to compel that person to act to help or protect you. If you leave their presence long enough for them to miss you, the MC can spend your remaining hold to make them give you something they think you want. For PCs, if they refuse, they act under pressure. NPCs are glad to help you, without reservation.",
            "miss": "",
            "options": "",
        },
        "naturalCharm": {
            "title": "Natural Charm",
            "description": "+1 Appeal (Appeal +3).",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "vortexsKiss": {
            "title": "Vortex's Kiss",
            "description": "Once, long ago, the Vortex became intertwined with you. Somehow you lived, but it left permanent marks on your soul. +1 Vortex (Vortex +2). When you take this move, write down a sentence or two about what happened.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "aGoodListener": {
            "title": "A Good Listener",
            "description": "When another Companion Bonds with you, mark experience. Also, you may use your Romance Moves with each other once, as if you were Romantically Entangled. This is not a romantic indiscretion, but rather the expression of the connection and friendship from the bond.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "cleverClever": {
            "title": "Clever Clever",
            "description": "Like the Doctor, you abhor weapons. If you wish to Control a Dire Situation without resorting to their use, roll +Clever instead of +Bold. On a 10+, hold 3. On a 7–9, hold 1. Then spend your hold 1 for 1 to briefly describe mistakes made by your enemy or environmental factors that you exploit to stop them. These are new facts you are introducing to the scene. Your attack is +stun. On a 12+, you may choose for your attack to be deadly; your opponent Tempts Fate.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "Choose 3:",
            "partialHit": "Choose 2:",
            "miss": "",
            "options": "<ul><li>You indisputably take control of the situation.</li><li>You avoid the worst of the danger. Take +1 when you Tempt Fate.</li><li>You overcome all of your opponents.</li><li>You impress, dismay, or frighten your opponents and any witnesses.</li><li>No innocent bystanders are caught in the crossfire.</li></ul>",
        },
        "shepherd": {
            "title": "Shepherd",
            "description": "When you RUN!, you may spend 1 of your hold to allow everyone who follows you to escape without Tempting Fate.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
    },
    "romance": {
        "touchstoneRomance": {
            "title": "The Touchstone's Romance Move",
            "description": "When you are Romantically Entangled with someone, you are each other's lucky charm. When you have an intimate moment with this person, regardless of circumstances, you both take +1 forward. This works even at a distance, using communication technology.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    }
};

TouchstoneData.bonds = {
    1 : {
        "historyText" : "%s once saved my family's lives. I'll never forget that.",
        "bonus" : 3
    },
    2 : {
        "historyText" : "I totally have a crush on %s.",
        "bonus" : 1
    },
    3 : {
        "historyText" : "%s is my current BFF. We have been spending a lot of time together lately.",
        "bonus" : 2
    },
    4 : {
        "historyText" : "%s is my confidante. We tell each other everything.",
        "bonus" : 2
    },
    5 : {
        "historyText" : "%s once totally stabbed me in the back. Not cool.",
        "bonus" : 1
    },
};

export const BasicData = {};

BasicData.moves = {
    "basic": {
        "actUnderPressure": {
            "title": "Act Under Pressure",
            "description": "When you do something under pressure or endure duress, roll +Cool.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityCool"],
            "fullHit": "You do it.",
            "partialHit": "The MC can offer you success at a cost — a worse outcome, a hard bargain, or an ugly choice.",
            "miss": "",
            "options": "",
        },
        "readADireSituation": {
            "title": "Read a Dire Situation",
            "description": "When you read a Dire Situation, roll +Clever. On a hit, you can ask the MC questions. Whenever you act on one of the MC's answers, take +1 forward. On a 10+, ask 3.  On a 7-9, ask 1:",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "Ask 3:",
            "partialHit": "Ask 1:",
            "miss": "",
            "options": "<ul><li>Where's my best escape route / way in / way past?</li><li>Who or what is the biggest threat?</li><li>Who is willing to talk?</li><li>What should I be on the lookout for?</li><li>Who stands to lose/gain the most?</li><li>Who is in control here?</li></ul>",
        },
        "controlADireSituation": {
            "title": "Control a Dire Situation",
            "description": "When you take control of a Dire Situation with direct, physical action, roll +Bold. On a 10+, choose 3. On a 7-9, choose 2:",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityBold"],
            "fullHit": "Choose 3:",
            "partialHit": "Choose 2:",
            "miss": "",
            "options": "<ul><li>You indisputably take control of the situation.</li><li>You avoid the worst of the danger. Take +1 when you Tempt Fate.</li><li>You overcome all of your opponents.</li><li>You impress, dismay, or frighten your opponents and any witnesses.</li><li>No innocent bystanders are caught in the crossfire.</li></ul>",
        },
        "run": {
            "title": "RUN!",
            "description": "When you escape from a Dire Situation, Roll +Cool and run for your life. On a 10+, choose 3. On a 7-9, choose 2. In any event, mark experience.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityCool"],
            "fullHit": "Choose 3:",
            "partialHit": "Choose 2:",
            "miss": "",
            "options": "<ul><li>You escape without Tempting Fate.</li><li>One person (of your choice) who follows you is safe; they do not Tempt Fate.</li><li>The threat loses track of where you are.</li><li>You know where you're going.</li></ul>",
        },
        "helpingOrHindering": {
            "title": "Helping or Hindering",
            "description": "When you assist, or get in the way, of someone else's move, briefly describe how you have the means to get involved. The other person takes +1 or -2 forward, respectively. This counts as making a move in a Dire Situation.<br/>Multiple people may Help or Hinder the same person, but the bonuses are not cumulative. If you make this move after the other person rolls, spend 1-Fate.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "readAPerson": {
            "title": "Read a Person",
            "description": "When you look beneath the surface while interacting with a sentient being, roll +Clever. On a 10+, hold 3. On a 7-9, hold 1. While you're interacting with them, spend your hold to ask their player questions, 1 for 1:",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "Hold 3. While interacting with the person you're reading, spend your hold to ask their player questions, 1 for 1.",
            "partialHit": "Hold 1. While interacting with the person you're reading, spend your hold to ask their player questions, 1 for 1.",
            "miss": "",
            "options": "<ul><li> Is your character telling the truth?</li><li> What's your character really feeling?</li><li> What does your character intend to do?</li><li> What does your character wish I'd do?</li><li> How could I get your character to ...?</li></ul>",
        },
        "convinceAPerson": {
            "title": "Convince a Person",
            "description": "When you have have leverage and attempt to convince someone ... <ul><li>...with reason, roll +Clever.</li><li>...with an appeal to the emotions, roll +Appeal.</li><li>...with intimidation, roll +Bold.</li></ul>For NPCs, on a 10+, they do what you want. On a 7-9, they do what you want, but with some strings attached.<br/>With PCs, on a 10+, take both of the following. On a 7-9, choose one of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever", "COMPANIONS.AbilityAppeal", "COMPANIONS.AbilityBold"],
            "fullHit": "NPCs do what you want. For PCs, take both of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "partialHit": "NPCs do what you want, but with some strings attached. For PCs, choose one of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "miss": "",
            "options": "",
        },
        "useUnfamiliarTechnology": {
            "title": "Use Unfamiliar Technology",
            "description": "Whenever using a technology unknown to you, roll +Vortex. On a 10+, it works without problems. On a 7-9, it works once, but it breaks. Only a Whiz or an appropriate NPC can fix it. On a miss, someone gets hurt, the device is destroyed, or there are unforeseen consequences.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "It works without problems.",
            "partialHit": "It works once, but it breaks. Only a Whiz or an appropriate NPC can fix it.",
            "miss": "Someone gets hurt, the device is destroyed, or there are unforeseen consequences.",
            "options": "",
        },
        "talkToHer": {
            "title": "Talk to Her",
            "description": "When you attune your mind to the sprawling, inhuman intelligence at the heart of the TARDIS, roll +Vortex. For a short period, you let her in, and she shows you things. The images are disjointed and sometimes horrifying.<br/>On a hit, the MC will tell you something new and interesting about the current situation, and might ask you a question or two; answer them. On a 10+, the MC will give you good detail. On a 7-9, the MC will give you a good impression. If you already know all there is to know, the MC will tell you that.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "The MC will tell you something new and interesting about the current situation, and might ask you a question or two; answer them. The MC will give you good detail. If you already know all there is to know, the MC will tell you that.",
            "partialHit": "The MC will tell you something new and interesting about the current situation, and might ask you a question or two; answer them. The MC will give you a good impression. If you already know all there is to know, the MC will tell you that.",
            "miss": "",
            "options": "",
        },
        "bondWithAPerson": {
            "title": "Bond with a Person",
            "description": "When you have down time and connect with someone, open up and tell them something you hold dear: a worry, a fear, a secret, a belief-something important.<br/>Then, roll +Bond with them. On a hit, reduce both of your Fates to 6:00, and clear all stress tags on you both. On a 10+, their history with you goes up by 1. On a miss, they take an appropriate stress tag. You cannot bond with each other until it clears.<br/>If the person you're bonding with is your romantic interest, take +1 now.",
            "type": "roll",
            "stat": ["history"],
            "fullHit": "Reduce both of your Fates to 6:00, and clear all stress tags on you both. Their history with you goes up by 1.",
            "partialHit": "Reduce both of your Fates to 6:00, and clear all stress tags on you both.",
            "miss": "They take an appropriate stress tag. You cannot bond with each other until it clears.",
            "options": "",
        },
    },
    "vortex": {
        "eyesOpenedWide": {
            "title": "Eyes Opened Wide",
            "description": "+1 Vortex (Vortex +1). You become hyper-aware of your position in spacetime. When you Read a Dire Situation, you may choose to roll +Vortex instead of +Clever. Also, your new senses allow you to detect energy and matter like the Agent's Vortex Manipulator.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "mindworm": {
            "title": "Mindworm",
            "description": "+1 Vortex (Vortex +1). When you take a moment to concentrate and touch someone’s skin, you may probe their thoughts. Roll +Vortex. On a 10+, hold 3. On a 7-9, hold 1. Spend your hold 1 for 1 to ask them the following questions:",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "Hold 3. Spend your hold 1 for 1 to ask them the following questions:",
            "partialHit": "Hold 1. Spend your hold 1 for 1 to ask them the following questions:",
            "miss": "",
            "options": "<ul><li>What is your character thinking right now?</li><li>What is your character hiding from me?</li><li>What is your character afraid of right now?</li><li>Is your character acting on your own, or for someone else?</li><li>Why is your character doing what they’re doing?</li></ul>",
        },
        "iJustKnow": {
            "title": "I Just Know",
            "description": "+1 Vortex (Vortex +1). At the beginning of each game session (and when you first take this move), roll +Vortex. On 10+, hold 2. On 7–9, hold 1. During this session, you may spend this hold 1 for 1 to choose from the following:<ul><li>You know a loophole or an Achilles’ heel of an immediate threat.</li><li>You know a fact that turns an indefensible situation around to your favor.</li></ul>The MC will tell you what you know, and what hard choices you have to make to utilize the information you’ve gained.<br/>On a miss, the MC tells you what you know, and either you are powerless to act on information you gleaned, or using it has consequences that are even worse than doing nothing.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "Hold 2. On 7–9, hold 1. During this session, you may spend this hold 1 for 1 to choose from the following:<ul><li>You know a loophole or an Achilles’ heel of an immediate threat.</li><li>You know a fact that turns an indefensible situation around to your favor.</li></ul>The MC will tell you what you know, and what hard choices you have to make to utilize the information you’ve gained.",
            "partialHit": "Hold 1. During this session, you may spend this hold to choose from the following:<ul><li>You know a loophole or an Achilles’ heel of an immediate threat.</li><li>You know a fact that turns an indefensible situation around to your favor.</li></ul>The MC will tell you what you know, and what hard choices you have to make to utilize the information you’ve gained.",
            "miss": "On a miss, the MC tells you what you know, and either you are powerless to act on information you gleaned, or using it has consequences that are even worse than doing nothing.",
            "options": "",
        },
        "theRingOfTruth": {
            "title": "The Ring of Truth",
            "description": "+1 Vortex (Vortex +1). When you plainly speak the unvarnished truth to someone, roll +Vortex. On a 10+, the truth of your words sinks in, and they believe you, regardless of circumstance. On a 7–9, they hear what you have to say, but they still have their doubts. You can influence what they’re doing right now, but that’s it. If the fiction demands it, they will see the truth of your words upon reflection. On a miss, they just cannot handle what you’ve laid on them; they react impulsively or violently, trying to deny your words.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "On a 10+, the truth of your words sinks in, and they believe you, regardless of circumstance.",
            "partialHit": "They hear what you have to say, but they still have their doubts. You can influence what they’re doing right now, but that’s it. If the fiction demands it, they will see the truth of your words upon reflection.",
            "miss": " They just cannot handle what you’ve laid on them; they react impulsively or violently, trying to deny your words.",
            "options": "<br/>This does not count as Manipulation of any kind for the purposes of Vortex tags.",
        },
        "quantumEntanglement": {
            "title": "Quantum Entanglement",
            "description": "+1 Vortex (Vortex +1). When you have an intimate moment with your romantic entanglement, take 1 hold. When they are separated from you and are threatened with death, spend your hold to open the Vortex before you. You (and you alone) tumble down into it, appearing somewhere near your love. Then roll +Vortex. On a 10+, you fall out the other side without any problems. On a 7–9, you are stunned on arrival. On a miss, Tempt Fate. Additionally, the situation your love is in goes bad; either they die, or something worse happens. Whatever the case, your arrival is to blame, and you know it.<br/>This is a romance move. You gain it in addition to your playbook’s romance move.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "You fall out the other side without any problems.",
            "partialHit": "You are stunned on arrival.",
            "miss": "Tempt Fate. Additionally, the situation your love is in goes bad; either they die, or something worse happens. Whatever the case, your arrival is to blame, and you know it.",
            "options": "",
        },
        "theOncomingStorm": {
            "title": "The Oncoming Storm",
            "description": "+1 Vortex (Vortex +1). Some of the awe and fear surrounding the Doctor’s name has rubbed off on you. When interacting with a sentient being that means you harm, and you are in their direct physical presence, roll +Vortex. On a hit, take +1 forward against them. On a 10+, they won’t make a move to hurt you, as long as you acquiesce to their demands. On a miss, they panic, and act accordingly.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "Take +1 forward against them. they won’t make a move to hurt you, as long as you acquiesce to their demands.",
            "partialHit": "Take +1 forward against them.",
            "miss": "They panic, and act accordingly.",
            "options": "Regardless of success, invoking the Doctor’s legacy like this means all eyes are on you, for better or worse.",
        },
    }
};

BasicData.emotionalKeys = {
    "tagNobility": {
        "mark": "Mark XP when you help someone who is helpless at cost to yourself.",
        "advance": "Advance & replace key when ignoring a plea for help causes harm.",
    },
    "tagOptimism": {
        "mark": "Mark XP when you act with confidence nothing is as bad as it seems.",
        "advance": "Advance & replace key when your optimism is shattered by hard reality.",
    },
    "tagTrust": {
        "mark": "Mark XP when you entrust your safety to someone without hesitation.",
        "advance": "Advance & replace key when your trust is betrayed.",
    },
    "tagLove": {
        "mark": "Mark XP when you defend or support someone you love.",
        "advance": "Advance & replace key when you sever the relationship with your love.",
    },
    "tagLoyalty": {
        "mark": "Mark XP when you are loyal to someone at your own expense.",
        "advance": "Advance & replace key when your betrayal of someone causes harm.",
    },
    "tagCuriosity": {
        "mark": "Mark XP when you disregard a Dire SItuation to pursue knowledge.",
        "advance": "Advance & replace key you forego discovery to avoid a Dire Situation.",
    },
    "tagFear": {
        "mark": "Mark XP when you avoid a Dire Situation out of fear for your own safety.",
        "advance": "Advance & replace key when you leap into a Dire Situation without hesitation.",
    },
    "tagAnger": {
        "mark": "Mark XP when you punish or lash out at someone.",
        "advance": "Advance & replace key when you let go of a serious, bona fide grievance.",
    },
    "tagGuilt": {
        "mark": "Mark XP when you try to make restitution for one of your past sins.",
        "advance": "Advance & replace key when you genuinely forgive yourself for a past sin.",
    },
    "tagHate": {
        "mark": "Mark XP when you hurt or impede those who you hate.",
        "advance": "Advance & replace key when you forgive who you hate at cost to yourself.",
    },
    "tagSelfishness": {
        "mark": "Mark XP when you disregard the safety of others to benefit yourself.",
        "advance": "Advance & replace key when you sacrifice yourself or something you value.",
    },
    "tagHubris": {
        "mark": "Mark XP when you ignore the needs of others to get what you deserve.",
        "advance": "Advance & replace key when the welfare of others stops you from doing what you will.",
    },
};
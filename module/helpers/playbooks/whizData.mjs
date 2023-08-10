export const WhizData = {};

WhizData.abilityBlocks = {
    "0": {"cool": "+1", "bold": "+0", "appeal": "-1", "clever": "+2", "vortex": "+1"},
    "1": {"cool": "+2", "bold": "-1", "appeal": "-1", "clever": "+2", "vortex": "+1"},
    "2": {"cool": "-1", "bold": "+0", "appeal": "+1", "clever": "+2", "vortex": "+1"},
    "3": {"cool": "-1", "bold": "-1", "appeal": "+0", "clever": "+2", "vortex": "+2"},
}

WhizData.moves = {
    "playbook": {
        "aggressiveImprovisation": {
            "title": "Aggressive Improvisation",
            "description": "<p>When you improvise a device using scrap, describe its purpose and effect, then roll +Scrap you choose to spend (max +3). On a 10+, hold 3. On 7-9, hold 2.</p>",
            "type": "roll",
            "stat": ["COMPANIONS.AttributeScrap"],
            "fullHit": "Hold 3.",
            "partialHit": "Hold 1.",
            "miss": "",
            "options": "<p>Weapons: Spend hold 1 for 1 to add or remove tags. The weapon starts with +hand, +loud, and +stun. If you remove +stun, the weapon is deadly.</p><p>Armor or shields: You create an invincible barrier of energy or matter. Nothing can get through it for a few minutes. Spend your hold 1 for 1 to choose from the following.</p><ul><li>It protects you.</li><li>It protects a small group of people (enough to fit in a small room).</li><li>It lasts for a few hours instead of a few minutes.</li></ul></p><p>Other: On a 10+, spend your hold 1 for 1 to choose from the following. <ul><li>It lasts a few hours.</li><li>You don’t get hurt from its use.</li><li>No one else gets hurt from its use.</li><li>Someone other than you can figure out how to use it.</li><li>You build it quickly.</li></ul></p>",
        },
        "machineCulture": {
            "title": "Machine Culture",
            "description": "When you take the time to examine a functioning piece of unfamiliar technology, roll +Vortex. On a 7–9, choose 1. On a 10+, choose 2.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityVortex"],
            "fullHit": "Choose 2.",
            "partialHit": "Choose 1.",
            "miss": "",
            "options": "<ul><li>You gain mastery of the particular thing you are examining.</li><li>You gain an insight into the nature or culture of its makers.</li><li>You may add or remove a tag on the item in question.</li><li>You may break it down into scrap. See the Scrap box under Gear.</li></ul>"
        },
        "reverseThePolarity": {
            "title": "Reverse the Polarity",
            "description": "When you Convince with Emotions or Intimidation, and you’re talking about your areas of expertise, you may roll +Clever instead of +Appeal or +Bold. On a hit, describe how you talk circles around them.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "NPCs do what you want. For PCs, take both of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "partialHit": "NPCs do what you want, but with some strings attached. For PCs, choose one of the following:<ul><li>If they do it, mark experience.</li><li>If they don't do it, they're Acting under Pressure.</li></ul>",
            "miss": "",
            "options": "",

        },
        "expandedConsciousness": {
            "title": "Expanded Consciousness",
            "description": "You have died once already. Take a Vortex move. You do not gain a Vortex tag.",
            "type": "now",
            "stat": [],
            "fullHit": "+1 Clever (Clever +3).",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "genius": {
            "title": "Genius",
            "description": "+1 Clever (Clever +3).",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        },
        "retrogradeForesight": {
            "title": "Retrograde Foresight",
            "description": "When you are in a situation where you need something that you don’t have, search your pockets and roll +Clever. On a 10+, you have just the item you need. On a 7–9, you have it but there are strings attached — it’s broken, not quite right, needs a part, something.",
            "type": "roll",
            "stat": ["COMPANIONS.AbilityClever"],
            "fullHit": "You have just the item you need.",
            "partialHit": "You have it but there are strings attached — it’s broken, not quite right, needs a part, something.",
            "miss": "On a miss, you still have it, but the MC will make you wish you didn’t.",
            "options": "",
        },
    },
    "romance": {
        "whizRomance": {
            "title": "The Whiz's Romance Move",
            "description": "When your character is having an intimate moment with their lover, you may elect to have a sudden flash of inspiration, equivalent to a full hit when you Talk to Her. You must immediately ignore your lover and leave them to pursue the meaning of your insight. Your lover takes -1 History with you.",
            "type": "now",
            "stat": [],
            "fullHit": "",
            "partialHit": "",
            "miss": "",
            "options": "",
        }
    }
};

WhizData.bonds = {
    1 : {
        "historyText" : "%s may be my new equal, like the Doctor was.",
        "bonus" : 1
    },
    2 : {
        "historyText" : "%s was there for me when my failure cost lives.",
        "bonus" : 1
    },
    3 : {
        "historyText" : "%s is so beautiful that they actually distract me.",
        "bonus" : 1
    },
    4 : {
        "historyText" : "I once saved %s's life with one of my devices.",
        "bonus" : 1
    },
    5 : {
        "historyText" : "%s is a cipher to me. I need to understand them as a person.",
        "bonus" : 1
    },
};

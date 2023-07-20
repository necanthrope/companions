import {COMPANIONS} from "../config.mjs";

export const AGENTMOVES = {};

AGENTMOVES.playbook = {
  "notMyFirstTimeAtTheDance" : {
    "title" : "Not My First Time at the Dance",
    "description" : "You’re from the future, and have direct experience with technologies from all over spacetime. When presented with a device from a period other than your place of birth or modern Britain, substitute your Cool for Vortex when Using Unfamiliar Technology. Additionally, if you hit on that move, you gain insight into who made the device, and what other applications it may have.",
    "type" : "roll",
    "stat" : ["COMPANIONS.AbilityCool"],
    "fullHit" : "The MC will tell you something new and interesting about the current situation, and might ask you a question or two; answer them. The MC will give you good detail. If you already know all there is to know, the MC will tell you that.",
    "partialHit" : "The MC will tell you something new and interesting about the current situation, and might ask you a question or two; answer them. The MC will give you a good impression. If you already know all there is to know, the MC will tell you that.",
    "miss" : "",
    "options" : "",
  },
  "youDontStandAChance" : {
    "title" : "You Don't Stand a Chance",
    "description" : "When you Convince with Reason or Emotions, roll +Cool instead of +Appeal. Additionally, you may seduce just about any living being that values reproduction.",
    "type" : "roll",
    "stat" : ["COMPANIONS.AbilityCool"],
    "fullHit" : "NPCs do what you want. For PCs, take both of the following:<ul><li>If they do it, mark experience.</li><li>If they don’t do it, they’re Acting under Pressure.</li></ul>",
    "partialHit" : "NPCs do what you want, but with some strings attached. For PCs, choose one of the following:<ul><li>If they do it, mark experience.</li><li>If they don’t do it, they’re Acting under Pressure.</li></ul>",
    "miss" : "",
    "options" : "",
  },
  "tradecraft" : {
    "title" : "Tradecraft",
    "description" : "When you are in a Dire Situation, roll +Clever, then describe a brief flashback scene in which you foresaw your predicament and used your experience as a spy or available advanced technology to save yourself. On a 10+, it works; you escape the situation without serious danger. On a 7–9, take +1 forward to get out of the jam.",
    "type" : "roll",
    "stat" : ["COMPANIONS.AbilityClever"],
    "fullHit" : "It works; you escape the situation without serious danger.",
    "partialHit" : "Take +1 forward to get out of the jam.",
    "miss" : "",
    "options" : "",
  },
  "silverTongued" : {
    "title" : "Silver Tongued",
    "description" : "When you roll +Bond, you may roll +Appeal instead, if your move involves lies or other manipulation. On a miss, in addition to whatever move the MC elects to do, the person you are rolling against automatically resets their History with you. They’ve learned what a manipulative piece of work you can be.",
    "type" : "roll",
    "stat" : ["COMPANIONS.AbilityAppeal"],
    "fullHit" : "Reduce both of your Fates to 6:00, and clear all stress tags on you both. Their history with you goes up by 1.",
    "partialHit" : "Reduce both of your Fates to 6:00, and clear all stress tags on you both.",
    "miss" : "In addition to whatever move the MC elects to do, the person you are rolling against automatically resets their History with you. They’ve learned what a manipulative piece of work you can be.",
    "options" : "",
  },
  "becauseILoveYou" : {
    "title" : "Because I Love You",
    "description" : "When you lie to someone with whom you are Romantically  Entangled in order to protect them from a horrible fate, mark History with them. If they figure out the truth, their History with you resets, and you mark Experience.",
    "type" : "now",
    "stat" : [],
    "fullHit" : "",
    "partialHit" : "",
    "miss" : "",
    "options" : "",
  },
  "beenThereDoneThat" : {
    "title" : "Been There, Done That",
    "description" : "Cool +1 (Cool +3).",
    "type" : "now",
    "stat" : [],
    "fullHit" : "",
    "partialHit" : "",
    "miss" : "",
    "options" : "",
   },
};

AGENTMOVES.romance = {
  "title" : "",
  "description" : "When you kiss someone with whom you are Romantically Entangled, take 2 hold. Spend 1 for 1 to instinctively know where they are. Take +1 ongoing to any move you make trying to save their life while you have hold.",
  "type" : "now",
  "stat" : [],
  "fullHit" : "",
  "partialHit" : "",
  "miss" : "",
  "options" : "",
};


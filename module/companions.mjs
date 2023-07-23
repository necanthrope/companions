// Import document classes.
import { CompanionsActor } from "./documents/actor.mjs";
import { CompanionsItem } from "./documents/item.mjs";
// Import sheet classes.
import { CompanionsActorSheet } from "./sheets/actor-sheet.mjs";
import { CompanionsItemSheet } from "./sheets/item-sheet.mjs";
// Import helper/utility classes and constants.
import { preloadHandlebarsTemplates } from "./helpers/templates.mjs";
import { COMPANIONS } from "./helpers/config.mjs";
import { BasicData } from "./helpers/basicData.mjs";
import { VORTEXMOVES } from "./helpers/vortexMoves.mjs";
// Import playbook moves
import { AgentData } from "./helpers/playbooks/agentData.mjs";
import { CommanderData } from "./helpers/playbooks/commanderData.mjs";
import { ConstructData } from "./helpers/playbooks/constructData.mjs";

/* -------------------------------------------- */
/*  Init Hook                                   */
/* -------------------------------------------- */

Hooks.once('init', async function() {

  // Add utility classes to the global game object so that they're more easily
  // accessible in global contexts.
  game.boilerplate= {
    CompanionsActor,
    CompanionsItem,
    rollItemMacro
  };

  // Add custom constants for configuration.
  CONFIG.COMPANIONS = COMPANIONS;
  CONFIG.COMPANIONS.BASICDATA = BasicData;
  CONFIG.COMPANIONS.VORTEXMOVES = VORTEXMOVES;
  CONFIG.COMPANIONS.AGENTMOVES = AgentData;
  CONFIG.COMPANIONS.COMMANDERMOVES = CommanderData;
  CONFIG.COMPANIONS.CONSTRUCTMOVES = ConstructData;

  CONFIG.COMPANIONS.ALLMOVES = {
    ...CONFIG.COMPANIONS.BASICDATA.moves.basic,
    ...CONFIG.COMPANIONS.BASICDATA.moves.vortex,
    ...CONFIG.COMPANIONS.AGENTMOVES.playbook,
    ...CONFIG.COMPANIONS.AGENTMOVES.romance,
    ...CONFIG.COMPANIONS.COMMANDERMOVES.playbook,
    ...CONFIG.COMPANIONS.COMMANDERMOVES.romance,
    ...CONFIG.COMPANIONS.CONSTRUCTMOVES.playbook,
    ...CONFIG.COMPANIONS.CONSTRUCTMOVES.romance,
  };

  // Define custom Document classes
  CONFIG.Actor.documentClass = CompanionsActor;
  CONFIG.Item.documentClass = CompanionsItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("companions", CompanionsActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("companions", CompanionsItemSheet, { makeDefault: true });

  // Preload Handlebars templates.
  return preloadHandlebarsTemplates();
});

/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */

// If you need to add Handlebars helpers, here are a few useful examples:
Handlebars.registerHelper('concat', function() {
  var outStr = '';
  for (var arg in arguments) {
    if (typeof arguments[arg] != 'object') {
      outStr += arguments[arg];
    }
  }
  return outStr;
});

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", async function() {
  // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  Hooks.on("hotbarDrop", (bar, data, slot) => createItemMacro(data, slot));
});



/* -------------------------------------------- */
/*  Hook to customize chat message for moves    */
/* -------------------------------------------- */
Hooks.on('renderChatMessage', (chatMessage, [html], messageData) => {
  decorateDieRoll(html, chatMessage, messageData);
})

function decorateDieRoll(html, chatMessage, messageData) {
  if (chatMessage.flavor.includes("|")) {
    const flavorSplit = chatMessage.flavor.split("|");
    const moveKey = flavorSplit[0];
    const statLabel = flavorSplit[1];
    if (Object.keys(CONFIG.COMPANIONS.ALLMOVES).includes(moveKey)) {
      const move = CONFIG.COMPANIONS.ALLMOVES[moveKey];
      if (move.type === "roll") {
        const newFlavor= move.title + " (" + "+" + statLabel + ")";
        html.innerHTML = html.innerHTML.replace(chatMessage.flavor,newFlavor);
        chatMessage.flavor = newFlavor;
        const resultText = getMoveResultText(move, chatMessage.rolls[0]._total);
        html.innerHTML = html.innerHTML + resultText;
      }
    }
  }
}

function getMoveResultText(move, rollResult) {
  let resultHeader = "";
  let resultText = "";
  if (rollResult < 7) {
    resultHeader = "<em>Miss.</em> ";
    if (move.miss === "") {
      resultText = "The MC says what happens next."
    } else {
      resultText = move.miss;
    }
  }
  if (rollResult >= 7 && rollResult < 10) {
    resultHeader = "<em>Partial Hit!</em> ";
    resultText =  move.partialHit;
  }
  if (rollResult >= 10) {
    resultHeader = "<em>FULL HIT!</em> ";
    resultText = move.fullHit;
  }
  let result = "<h4>" + resultHeader + "</h4>\n<p>" + resultText + "</p>"
  if (move.options !== "" && rollResult >= 7) {
    result = result+ "\n<p>" + move.options + "</p>";
  }
  return result;
}

/* -------------------------------------------- */
/*  Hotbar Macros                               */
/* -------------------------------------------- */

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
async function createItemMacro(data, slot) {
  // First, determine if this is a valid owned item.
  if (data.type !== "Item") return;
  if (!data.uuid.includes('Actor.') && !data.uuid.includes('Token.')) {
    return ui.notifications.warn("You can only create macro buttons for owned Items");
  }
  // If it is, retrieve it based on the uuid.
  const item = await Item.fromDropData(data);

  // Create the macro command using the uuid.
  const command = `game.companions.rollItemMacro("${data.uuid}");`;
  let macro = game.macros.find(m => (m.name === item.name) && (m.command === command));
  if (!macro) {
    macro = await Macro.create({
      name: item.name,
      type: "script",
      img: item.img,
      command: command,
      flags: { "companions.itemMacro": true }
    });
  }
  game.user.assignHotbarMacro(macro, slot);
  return false;
}

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {string} itemUuid
 */
function rollItemMacro(itemUuid) {
  // Reconstruct the drop data so that we can load the item.
  const dropData = {
    type: 'Item',
    uuid: itemUuid
  };
  // Load the item from the uuid.
  Item.fromDropData(dropData).then(item => {
    // Determine if the item loaded and if it's an owned item.
    if (!item || !item.parent) {
      const itemName = item?.name ?? itemUuid;
      return ui.notifications.warn(`Could not find item ${itemName}. You may need to delete and recreate this macro.`);
    }

    // Trigger the item roll
    item.roll();
  });
}

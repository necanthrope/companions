import {onManageActiveEffect, prepareActiveEffectCategories} from "../helpers/effects.mjs";

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class CompanionsActorSheet extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["companions", "sheet", "actor"],
            template: "systems/companions/templates/actor/actor-sheet.html",
            width: 1200,
            height: 600,
            tabs: [
                {navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "create"},
                {navSelector: ".move-tabs", contentSelector: ".move-tab", initial: "playbook"}
            ]
        });
    }

    /** @override */
    get template() {
        return `systems/companions/templates/actor/actor-${this.actor.type}-sheet.html`;
    }

    /* -------------------------------------------- */

    /** @override */
    getData() {
        // Retrieve the data structure from the base sheet. You can inspect or log
        // the context variable to see the structure, but some key properties for
        // sheets are the actor object, the data object, whether or not it's
        // editable, the items array, and the effects array.
        const context = super.getData();

        // Use a safe clone of the actor data for further operations.
        const actorData = this.actor.toObject(false);

        // Add the actor's data to context.data for easier access, as well as flags.
        context.system = actorData.system;
        context.flags = actorData.flags;

        // Prepare character data and items.
        if (actorData.type == 'character') {
            this._prepareItems(context);
            this._prepareCharacterData(context);
        }

        // Prepare NPC data and items.
        if (actorData.type == 'npc') {
            this._prepareItems(context);
        }

        // Add roll data for TinyMCE editors.
        context.rollData = context.actor.getRollData();

        // Prepare active effects
        context.effects = prepareActiveEffectCategories(this.actor.effects);

        return context;
    }

    /**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
    _prepareCharacterData(context) {
        const playbookDataKey = context.system.playbook.toUpperCase() + "DATA";

        // Build data for abilities section
        this._buildAbilities(playbookDataKey, context);

        // Build data for Bonds & History section
        this._buildBonds(context);
        this._buildHistory(context);

        // Handle ability scores.
        let statObj = {};
        let attributeLabelObj = {};
        for (let [k, v] of Object.entries(context.system.abilities)) {
            v.label = game.i18n.localize(CONFIG.COMPANIONS.abilities[k]) ?? k;
            v.sheetLabel = game.i18n.localize(CONFIG.COMPANIONS.abilityLabels[k]) ?? k;
            statObj[v.label] = v.value + context.system.abilityMods[k].value;
            attributeLabelObj[v.label] = v.sheetLabel;
        }

        for (let [k, v] of Object.entries(context.system.attributes)) {
            v.label = game.i18n.localize(CONFIG.COMPANIONS.attributes[k]) ?? k;
            v.sheetLabel = game.i18n.localize(CONFIG.COMPANIONS.attributeLabels[k]) ?? k;
            statObj[v.label] = v.value;
            attributeLabelObj[v.label] = v.sheetLabel;
        }

        // Handle bond scores.
        let histObj = {};
        let histLabelObj = {};
        for (let [key, value] of Object.entries(context.system.history)) {
            let historyTag = "HISTORY:" + key;
            let historyLabel = "History with " + key;
            histObj[historyTag] = value;
            histLabelObj[historyLabel] = value;
        }

        if (context.system.hasOwnProperty("playbook") && context.system.playbook !== "") {
            // Build look lists object.
            context.system.createBlocks = CONFIG.COMPANIONS[playbookDataKey].createBlocks;

            // Build stat blocks object.
            context.system.abilityBlocks = CONFIG.COMPANIONS[playbookDataKey].abilityBlocks;

            // Build advancement object
            context.system.advances = CONFIG.COMPANIONS[playbookDataKey].advances;
            if (!context.system.hasOwnProperty("takenAdvances")) {
                context.system.takenAdvances = {};
            }

            // Move selection instructions
            context.system.moveInstructions = CONFIG.COMPANIONS[playbookDataKey].moveInstructions;

        }

        // Build basic moves object.
        this._buildBasicMoves(context, statObj, attributeLabelObj, histObj, histLabelObj);

        // Build playbook moves object.
        this._buildPlaybookMoves(context, statObj, attributeLabelObj, histObj, histLabelObj);

        // Build romance moves object.
        this._buildRomanceMoves(context, statObj, attributeLabelObj, histObj, histLabelObj);

        console.log("done with setup");
    }

    _buildAbilities(playookDataKey, context) {
        if (context.system.hasOwnProperty("abilityBlockSelected")) {
            let statBlock = CONFIG.COMPANIONS[playookDataKey].abilityBlocks[context.system.abilityBlockSelected];
            context.system.abilities.cool.value = parseInt(statBlock.cool);// + context.system.abilityMods.cool.value;
            context.system.abilities.bold.value = parseInt(statBlock.bold);// + context.system.abilityMods.bold.value;
            context.system.abilities.appeal.value = parseInt(statBlock.appeal);// + context.system.abilityMods.appeal.value;
            context.system.abilities.clever.value = parseInt(statBlock.clever);// + context.system.abilityMods.clever.value;
            context.system.abilities.vortex.value = parseInt(statBlock.vortex);// + context.system.abilityMods.vortex.value;
            this.document.system.abilities = context.system.abilities;
        }
    }

    _buildBasicMoves(context, statObj, attributeLabelObj, histObj, histLabelObj) {
        context.system.moves.basic = {};
        for (const key in CONFIG.COMPANIONS.BASICDATA.moves.basic) {
            let move = CONFIG.COMPANIONS.BASICDATA.moves.basic[key];
            this._buildMove(statObj, attributeLabelObj, histObj, histLabelObj, move);
            context.system.moves.basic[key] = move;
        }

        context.system.moves.takenCategories = {};
        context.system.moves.takenCategories.vortex = false;

        context.system.moves.vortex = {};
        for (const key in CONFIG.COMPANIONS.BASICDATA.moves.vortex) {
            let move = CONFIG.COMPANIONS.BASICDATA.moves.vortex[key];
            this._buildMove(statObj, attributeLabelObj, histObj, histLabelObj, move);
            context.system.moves.vortex[key] = move;
            if (Object.keys(context.system.moves.taken).includes(key) && context.system.moves.taken[key]) {
                context.system.moves.takenCategories.vortex = true;
            }
        }
    }

    _buildPlaybookMoves(context, statObj, attributeLabelObj, histObj, histLabelObj) {
        context.system.playbooks = CONFIG.COMPANIONS.playbooks;

        let playbookMoves = {};
        playbookMoves["AGENTMOVES"] = CONFIG.COMPANIONS.AGENTDATA.moves.playbook;
        playbookMoves["COMMANDERMOVES"] = CONFIG.COMPANIONS.COMMANDERDATA.moves.playbook;
        playbookMoves["CONSTRUCTMOVES"] = CONFIG.COMPANIONS.CONSTRUCTDATA.moves.playbook;
        playbookMoves["TOUCHSTONEMOVES"] = CONFIG.COMPANIONS.TOUCHSTONEDATA.moves.playbook;
        playbookMoves["WARRIORPOETMOVES"] = CONFIG.COMPANIONS.WARRIORPOETDATA.moves.playbook;
        playbookMoves["WHIZMOVES"] = CONFIG.COMPANIONS.WHIZDATA.moves.playbook;
        playbookMoves["WITNESSMOVES"] = CONFIG.COMPANIONS.WITNESSDATA.moves.playbook;

        // Build playbook moves object.
        context.system.moves.playbook = {};
        context.system.moves.other = {};
        context.system.moves.takenCategories.other = {};
        const playbookMoveKey = context.system.playbook.toUpperCase() + "MOVES";
        let otherMoves = false;
        for (const playbookKey in Object.keys(playbookMoves)) {
            let currentPlaybookMoveKey = Object.keys(playbookMoves)[playbookKey];
            let otherPlaybookName = currentPlaybookMoveKey.toLowerCase().replace(/moves$/, "");
            if (otherPlaybookName !== context.system.playbook) {
                context.system.moves.other[otherPlaybookName] = {}
            }
            context.system.moves.takenCategories.other[otherPlaybookName] = false;
            for (const moveKey in playbookMoves[currentPlaybookMoveKey]) {
                let move = playbookMoves[currentPlaybookMoveKey][moveKey];
                this._buildMove(statObj, attributeLabelObj, histObj, histLabelObj, move);
                if (currentPlaybookMoveKey === playbookMoveKey) {
                    context.system.moves.playbook[moveKey] = move;
                } else {
                    context.system.moves.other[otherPlaybookName][moveKey] = move;
                    if (Object.keys(context.system.moves.taken).includes(moveKey) && context.system.moves.taken[moveKey]) {
                        context.system.moves.takenCategories.other[otherPlaybookName] = true;
                        otherMoves = true;
                    }
                }
            }
        }
        context.system.moves.takenCategories.otherMovesTaken = otherMoves;
    }

    _buildRomanceMoves(context, statObj, attributeLabelObj, histObj, histLabelObj) {
        let romanceMoves = {};
        romanceMoves["AGENTMOVES"] = CONFIG.COMPANIONS.AGENTDATA.moves.romance;
        romanceMoves["COMMANDERMOVES"] = CONFIG.COMPANIONS.COMMANDERDATA.moves.romance;
        romanceMoves["CONSTRUCTMOVES"] = CONFIG.COMPANIONS.CONSTRUCTDATA.moves.romance;
        romanceMoves["TOUCHSTONEMOVES"] = CONFIG.COMPANIONS.TOUCHSTONEDATA.moves.romance;
        romanceMoves["WARRIORPOETMOVES"] = CONFIG.COMPANIONS.WARRIORPOETDATA.moves.romance;
        romanceMoves["WHIZMOVES"] = CONFIG.COMPANIONS.WHIZDATA.moves.romance;
        romanceMoves["WITNESSMOVES"] = CONFIG.COMPANIONS.WITNESSDATA.moves.romance;

        // Build romance moves object.
        context.system.moves.romance = {};
        const romanceMoveKey = context.system.playbook.toUpperCase() + "MOVES";
        if (Object.keys(romanceMoves).includes(romanceMoveKey)) {
            for (const key in romanceMoves[romanceMoveKey]) {
                let move = romanceMoves[romanceMoveKey][key];
                this._buildMove(statObj, attributeLabelObj, histObj, histLabelObj, move);
                context.system.moves.romance[key] = move;
            }
        }
    }

    _buildMove(statObj, attributeLabelObj, histObj, histLabelObj, move) {
        move.rolls = [];
        for (const movestat of move.stat) {
            let operator = "+";
            let roll = {};
            if (typeof movestat === "string") {
                if (movestat === "history") {
                    for (let [key, value] of Object.entries(histLabelObj)) {
                        roll = {};
                        if (value < 0) {
                            operator = "-";
                        }
                        roll.stat = movestat;
                        roll.bonus = Math.abs(value);
                        roll.attributeLabel = key;
                        roll.operator = operator
                        move.rolls.push(roll);
                    }
                    continue;
                } else {
                    if (statObj[movestat] < 0) {
                        operator = "-";
                    }
                    roll.stat = movestat;
                    roll.bonus = Math.abs(statObj[movestat]);
                    roll.attributeLabel = attributeLabelObj[movestat];
                }
            } else if (typeof movestat === "object") {
                if (movestat['value'] < 0) {
                    operator = "-";
                }
                roll.stat = "special";
                roll.bonus = Math.abs(movestat['value']);
                roll.attributeLabel = movestat['label'];
            } else {
                if (movestat < 0) {
                    operator = "-";
                }
                roll.stat = "special";
                roll.bonus = Math.abs(movestat);
                roll.attributeLabel = movestat;
            }
            roll.operator = operator;
            move.rolls.push(roll);
        }
    }

    _buildHistory(context) {
        // build history data object
        let history = {}
        for (const bondId in context.system.bonds) {
            if (context.system.bondNames.hasOwnProperty(bondId)) {
                let bonded = Reflect.get(context.system.bondNames, bondId);
                if (bonded === "Select") {
                    continue;
                }
                if (Object.keys(history).includes(bonded)) {
                    history[bonded] = Math.min(3, history[bonded] + context.system.bonds[bondId].bonus);
                } else {
                    history[bonded] = Math.min(3, context.system.bonds[bondId].bonus);
                }
            }
        }
        for (const i in game.actors.tree.entries) {
            let actor = game.actors.tree.entries[i];
            if (!Object.keys(history).includes(actor.name) && actor.id !== this.object._id) {
                history[actor.name] = 0;
            }
        }
        context.system.history = structuredClone(history);
    };

    _buildBonds(context) {
        // Build Bonds data object
        let bonds = {};
        bonds["AGENTBONDS"] = structuredClone(CONFIG.COMPANIONS.AGENTDATA.bonds);
        bonds["COMMANDERBONDS"] = CONFIG.COMPANIONS.COMMANDERDATA.bonds;
        bonds["CONSTRUCTBONDS"] = CONFIG.COMPANIONS.CONSTRUCTDATA.bonds;
        bonds["TOUCHSTONEBONDS"] = CONFIG.COMPANIONS.TOUCHSTONEDATA.bonds;
        bonds["WARRIORPOETBONDS"] = CONFIG.COMPANIONS.WARRIORPOETDATA.bonds;
        bonds["WHIZBONDS"] = CONFIG.COMPANIONS.WHIZDATA.bonds;
        bonds["WITNESSBONDS"] = CONFIG.COMPANIONS.WITNESSDATA.bonds;

        // Build playbook bonds object.
        context.system.bonds = {};
        const playbookBondKey = context.system.playbook.toUpperCase() + "BONDS";
        if (Object.keys(bonds).includes(playbookBondKey)) {
            for (const bondId in bonds[playbookBondKey]) {
                let charNameWidget = this._buildBondNameList(context, bondId);
                context.system.bonds[bondId] = structuredClone(bonds[playbookBondKey][bondId]);
                context.system.bonds[bondId]['historyText'] = context.system.bonds[bondId]['historyText'].replace(/%s/, charNameWidget);
            }
        }
    }

    _buildBondNameList(context, bondId) {
        // Build a list of other characters for Bonds.
        if (!context.system.hasOwnProperty("bondNames")) {
            context.system.bondNames = {}
        }
        let charNameWidget = '<select name="system.bondNames.' + bondId + '">\n';
        let defaultName = "Select"
        let defaultSelection = "";
        let bondSelected = context.system.bondNames.hasOwnProperty(bondId) && Reflect.get(context.system.bondNames, bondId) !== defaultName;
        if (!bondSelected) {
            defaultSelection = "selected";
        }
        charNameWidget = charNameWidget + "<option disabled " + defaultSelection + " hidden>" + defaultName + "</option>\n";
        for (const i in game.actors.tree.entries) {
            let actor = game.actors.tree.entries[i];
            if (actor.id !== this.object._id) {
                let selected = ""
                if (bondSelected) {
                    if (actor.name === Reflect.get(context.system.bondNames, bondId)) {
                        selected = " selected";
                    }
                }
                charNameWidget = charNameWidget + "<option" + selected + ">" + actor.name + "</option>\n";
            }
        }
        return charNameWidget + "</select>\n\n";
    }

    /**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
    _prepareItems(context) {
        // Initialize containers.
        const gear = [];
        const features = [];

        // Iterate through items, allocating to containers
        for (let i of context.items) {
            i.img = i.img || DEFAULT_TOKEN;
            // Append to gear.
            if (i.type === 'item') {
                gear.push(i);
            }
            // Append to features.
            else if (i.type === 'feature') {
                features.push(i);
            }
        }

        // Assign and return
        context.gear = gear;
        context.features = features;
    }

    /* -------------------------------------------- */

    _completeAdvance() {
        const context = this.getData();
        alert("derp");
        return "";
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Render the item sheet for viewing/editing prior to the editable check.
        html.find('.item-edit').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            item.sheet.render(true);
        });


        html.find('.complete-advance').click(ev => {
            this.document.update({'system.attributes.experience.value': 0})
        });

        html.find('.raise-ability').click(ev => {
            let ability = ev.currentTarget.dataset.ability.toLowerCase();
            let baseVal = this.document.system.abilities[ability].value;
            let oldModVal = this.document.system.abilityMods[ability].value;
            if ((baseVal + oldModVal + 1) <= 3) {
                this.document.update({[`system.abilityMods.${ability}.value`]: oldModVal +1});
            }
        });

        html.find('.lower-ability').click(ev => {
            let ability = ev.currentTarget.dataset.ability.toLowerCase();
            let baseVal = this.document.system.abilities[ability].value;
            let oldModVal = this.document.system.abilityMods[ability].value;
            if ((baseVal + oldModVal - 1) >= -2) {
                this.document.update({[`system.abilityMods.${ability}.value`]: oldModVal -1});
            }
        });

        // -------------------------------------------------------------
        // Everything below here is only needed if the sheet is editable
        if (!this.isEditable) return;

        // Add Inventory Item
        html.find('.item-create').click(this._onItemCreate.bind(this));

        // Delete Inventory Item
        html.find('.item-delete').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            item.delete();
            li.slideUp(200, () => this.render(false));
        });

        // Active Effect management
        html.find(".effect-control").click(ev => onManageActiveEffect(ev, this.actor));

        // Rollable abilities.
        html.find('.rollable').click(this._onRoll.bind(this));

        // Drag events for macros.
        if (this.actor.isOwner) {
            let handler = ev => this._onDragStart(ev);
            html.find('li.item').each((i, li) => {
                if (li.classList.contains("inventory-header")) return;
                li.setAttribute("draggable", true);
                li.addEventListener("dragstart", handler, false);
            });
        }
    }

    /**
     * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
     * @param {Event} event   The originating click event
     * @private
     */
    async _onItemCreate(event) {
        event.preventDefault();
        const header = event.currentTarget;
        // Get the type of item to create.
        const type = header.dataset.type;
        // Grab any data associated with this control.
        const data = duplicate(header.dataset);
        // Initialize a default name.
        const name = `New ${type.capitalize()}`;
        // Prepare the item object.
        const itemData = {
            name: name,
            type: type,
            system: data
        };
        // Remove the type from the dataset since it's in the itemData.type prop.
        delete itemData.system["type"];

        // Finally, create the item!
        return await Item.create(itemData, {parent: this.actor});
    }

    /**
     * Handle clickable rolls.
     * @param {Event} event   The originating click event
     * @private
     */
    _onRoll(event) {
        event.preventDefault();
        const element = event.currentTarget;
        const dataset = element.dataset;

        // Handle item rolls.
        if (dataset.rollType) {
            if (dataset.rollType == 'item') {
                const itemId = element.closest('.item').dataset.itemId;
                const item = this.actor.items.get(itemId);
                if (item) return item.roll();
            }
        }

        // Handle rolls that supply the formula directly.
        if (dataset.roll) {
            let label = dataset.movekey ? `${dataset.movekey}|${dataset.attributelabel}` : '[unknown]';
            let roll = new Roll(dataset.roll, this.actor.getRollData());
            roll.toMessage({
                speaker: ChatMessage.getSpeaker({actor: this.actor}),
                flavor: label,
                rollMode: game.settings.get('core', 'rollMode'),
            });
            return roll;
        }
    }

}

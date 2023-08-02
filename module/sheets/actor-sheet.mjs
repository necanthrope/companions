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
        // Build data for Bonds & History section
        this._buildBonds(context);
        this._buildHistory(context);

        // Handle ability scores.
        let statObj = {};
        let statLabelObj = {};
        for (let [k, v] of Object.entries(context.system.abilities)) {
            v.label = game.i18n.localize(CONFIG.COMPANIONS.abilities[k]) ?? k;
            v.sheetLabel = game.i18n.localize(CONFIG.COMPANIONS.abilityLabels[k]) ?? k;
            statObj[v.label] = v.value;
            statLabelObj[v.label] = v.sheetLabel;
        }

        for (let [k, v] of Object.entries(context.system.stats)) {
            v.label = game.i18n.localize(CONFIG.COMPANIONS.stats[k]) ?? k;
            v.sheetLabel = game.i18n.localize(CONFIG.COMPANIONS.statLabels[k]) ?? k;
            statObj[v.label] = v.value;
            statLabelObj[v.label] = v.sheetLabel;
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

        // Build basic moves object.
        this._buildBasicMoves(context, statObj, statLabelObj, histObj, histLabelObj);

        // Build playbook moves object.
        this._buildPlaybookMoves(context, statObj, statLabelObj, histObj, histLabelObj);

        // Build romance moves object.
        this._buildRomanceMoves(context, statObj, statLabelObj, histObj, histLabelObj);

        console.log("done with setup");
    }

    _buildBasicMoves(context, statObj, statLabelObj, histObj, histLabelObj) {
        context.system.moves.basic = {};
        for (const key in CONFIG.COMPANIONS.BASICDATA.moves.basic) {
            let move = CONFIG.COMPANIONS.BASICDATA.moves.basic[key];
            this._buildMove(statObj, statLabelObj, histObj, histLabelObj, move);
            context.system.moves.basic[key] = move;
        }

        context.system.moves.vortex = {};
        for (const key in CONFIG.COMPANIONS.BASICDATA.moves.vortex) {
            let move = CONFIG.COMPANIONS.BASICDATA.moves.vortex[key];
            this._buildMove(statObj, statLabelObj, histObj, histLabelObj, move);
            context.system.moves.vortex[key] = move;
        }
    }

    _buildPlaybookMoves(context, statObj, statLabelObj, histObj, histLabelObj) {
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
        const playbookMoveKey = context.system.playbook.toUpperCase() + "MOVES";
        if (Object.keys(playbookMoves).includes(playbookMoveKey)) {
            for (const key in playbookMoves[playbookMoveKey]) {
                let move = playbookMoves[playbookMoveKey][key];
                this._buildMove(statObj, statLabelObj, histObj, histLabelObj, move);
                context.system.moves.playbook[key] = move;
            }
        }
    }

    _buildRomanceMoves(context, statObj, statLabelObj, histObj, histLabelObj) {
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
                this._buildMove(statObj, statLabelObj, histObj, histLabelObj, move);
                context.system.moves.romance[key] = move;
            }
        }
    }

    _buildMove(statObj, statLabelObj, histObj, histLabelObj, move) {
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
                        roll.statLabel = key;
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
                    roll.statLabel = statLabelObj[movestat];
                }
            } else if (typeof movestat === "object") {
                if (movestat['value'] < 0) {
                    operator = "-";
                }
                roll.stat = "special";
                roll.bonus = Math.abs(movestat['value']);
                roll.statLabel = movestat['label'];
            } else {
                if (movestat < 0) {
                    operator = "-";
                }
                roll.stat = "special";
                roll.bonus = Math.abs(movestat);
                roll.statLabel = movestat;
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

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Render the item sheet for viewing/editing prior to the editable check.
        html.find('.item-edit').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            item.sheet.render(true);
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
            //let label = dataset.label ? `${dataset.label} (+${dataset.statlabel})|${dataset.movekey}`  : '[unknown]';
            let label = dataset.movekey ? `${dataset.movekey}|${dataset.statlabel}` : '[unknown]';
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

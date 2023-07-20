import {COMPANIONS} from "../config.mjs";

export const AGENTADVANCES = {};

AGENTADVANCES.advances = {
    "bumpBold" : {
        text : "+1 Bold (max +2)",
        types : ["early"],
    },
    "bumpClever" : {
        text : "+1 Clever (max +2)",
        types : ["early"],
    },
    "bumpAppeal" : {
        text : "+1 Appeal (max +2)",
        types : ["early"],
    },
    "newMove1" : {
        text : "A new Agent Move",
        types : ["early"],
    },
    "newMove2" : {
        text : "A new Agent Move",
        types : ["early"],
    },
    "newExtMove1" : {
        text : "A new move from another playbook",
        types : ["early"],
    },
    "newExtMove2" : {
        text : "A new move from another playbook",
        types : ["early"],
    },

    "vortexMove" : {
        text : "Take any Vortex Move",
        types : ["early", "late"],
    },
    "bumpAny" : {
        text : "+1 to any stat (max +3)",
        types : ["early", "late"],
    },
    "changeRomance" : {
        text : "Change your Romance Move to another",
        types : ["early", "late"],
    },
    "changePlaybook" : {
        text : "Change to another playbook",
        types : ["early", "late"],
    },
    "leaveTheTardis" : {
        text : "Leave the TARDIS and live your life",
        types : ["early", "late"],
    },

};
/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([

        // Actor partials.
        "systems/companions/templates/actor/parts/actor-create.html",
        "systems/companions/templates/actor/parts/actor-moves.html",
        "systems/companions/templates/actor/parts/actor-items.html",
        "systems/companions/templates/actor/parts/actor-effects.html",
        "systems/companions/templates/actor/parts/actor-moves-playbook.html",
        "systems/companions/templates/actor/parts/actor-moves-basic.html",
        "systems/companions/templates/actor/parts/actor-moves-vortex.html",
        "systems/companions/templates/actor/parts/actor-moves-other.html",
    ]);
};

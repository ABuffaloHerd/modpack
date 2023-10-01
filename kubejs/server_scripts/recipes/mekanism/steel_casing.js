// Priority: 99

var inter = "kubejs:incomplete_steel_casing";

ServerEvents.recipes((event) => {
    // remove the old recipe
    event.remove({output: "mekanism:steel_casing"});

    event.recipes.create.sequenced_assembly('mekanism:steel_casing',
    "mekanism:block_steel",
    [
        event.recipes.createDeploying(inter, [inter, "kubejs:kinetic_mechanism"]),
        event.recipes.createDeploying(inter, [inter, "mekanism:ingot_osmium"]), // TODO: Something from immersive engineering
    ]).transitionalItem(inter).loops(1);
});
// Priority: 99
// registers incomplete objects

var incomplete = [
    "steel_casing",
];

StartupEvents.registry('item', e =>
{
    incomplete.forEach(name =>
        {
            // Create the mechanism
            let itemName = "incomplete_" + name;
            e.create(itemName).texture("mekanism:steel_casing");
        })
});
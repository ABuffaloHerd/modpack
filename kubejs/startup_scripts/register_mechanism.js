// Priority: 0

console.info('Registering Mechanism recipes...');

var names = [
    "abstruse",
    "calculation",
    "inductive",
    "infernal",
    "integrational",
    "kinetic",
    "plastic",
    "radiant",
    "sealed",
    "sturdy"
];

StartupEvents.registry('item', e =>
{
    names.forEach(name =>
        {
            // Create the mechanism
            let itemName = name + "_mechanism";
            e.create(itemName)

            // and the incomplete mechanism
            let incompleteItemName = "incomplete_" + itemName;
            e.create(incompleteItemName)
        })
})
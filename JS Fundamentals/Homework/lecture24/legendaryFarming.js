function legendaryFarming(input) {
    // Focus on solving the problem.
    const inventory = new Map();
    inventory.set('shards', 0);
    inventory.set('fragments', 0);
    inventory.set('motes', 0);


    const junk = new Map();
    const keyMaterials = {
        'shards': {
            item: 'Shadowmourne',
            value: 0,
        },
        'fragments': {
            item: 'Valanyr',
            value: 0,
        },
        'motes': {
            item: 'Dragonwrath',
            value: 0,
        },
    };

    let crafted = 0;
    input = input.split(' ');

    const printItem = (key) => {
        if (!crafted) {
            console.log(`${keyMaterials[key].item} obtained!`);
        }
        crafted = 1;
    };

    for (let i = 0; i < input.length; i += 2) {
        let key = (input[i + 1]).toLowerCase();
        let value = Number(input[i]);

        if (Object.keys(keyMaterials).includes(key)) {
            let newValue = inventory.get(key) + value;
            if (newValue >= 250) {
                printItem(key);
                newValue -= 250;
                inventory.set(key, newValue);
                break;
            }
            inventory.set(key, newValue);
        } else {
            if (!junk.has(key)) {
                junk.set(key, value);
            } else {
                const newValue = junk.get(key) + value;
                junk.set(key, newValue)
            }
        }
    }

    Array.from(inventory.keys())
        .sort((a, b) => {
            if (inventory.get(a) === inventory.get(b)) {
                return a.localeCompare(b);
            } else if (inventory.get(a) > inventory.get(b)) {
                return -1;
            } else {
                return +1;
            }
        })
        .forEach(key => {
            console.log(`${key}: ${inventory.get(key)}`);
        });

    Array.from(junk.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => console.log(`${key}: ${junk.get(key)}`));
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
function solve(input) {
    // Focus on solving the problem.
    ////////////////////////////////////////////////////////////////////////////////////
    let records = {};
    const setUser = (obj, user, health, energy) => {
        if (!obj[user]) {
            obj[user] = {
                health: Number(health) || 0,
                energy: Number(energy) || 0,
            }
        } else {
            obj[user].health += Number(health);
        }
        return obj;
    };
    const removeUser = (obj, cmd) => {
        if (cmd === 'All') {
            obj = {};
        } else {
            delete obj[cmd];
        }

        return obj;
    };
    const attack = (obj, attack, defence, damage) => {
        if (obj[attack] && obj[defence]) {
            obj[defence].health -= Number(damage);
            obj[attack].energy -= 1;

            if (obj[defence].health <= 0) {
                console.log(`${defence} was disqualified!`);
                delete obj[defence];
            }
            if (obj[attack].energy <= 0) {
                console.log(`${attack} was disqualified!`);
                delete obj[attack];
            }
        }

        return obj;
    };
    ////////////////////////////////////////////////////////////////////////////////////

    const arr = input.slice(0);

    for (let currentLine of arr) {
        const [cmd, paramOne, paramTwo, paramThree] = currentLine.split(':');
        debugger
        switch (cmd) {

            case 'Add': {
                records = setUser(records, paramOne, paramTwo, paramThree);
            }
                break;
            case 'Attack': {
                records = attack(records, paramOne, paramTwo, paramThree);
            }
                break;
            case 'Delete': {
                records = removeUser(records, paramOne);
            }
                break;
        }
    }

    const sorted =
        Object.keys(records)
            .sort((a, b) => records[b].health - records[a].health || a.localeCompare(b));

    console.log(`People count: ${sorted.length}`);

    for (const key of sorted) {
        console.log(`${key} - ${records[key].health} - ${records[key].energy}`);
    }
}

console.log(`---------------`);
solve([
        'Add:Bonnie:3000:5',
        'Add:Johny:4000:10',
        'Attack:Johny:Bonnie:400',
        'Add:Chicken:1000:1',
        'Add:Rabbit:3000:5',
        'Add:Buggy:1259:10',
        'Attack:Chicken:Rabbit:1000',
        'Results'
    ]
);

console.log(`---------------`);
solve([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);
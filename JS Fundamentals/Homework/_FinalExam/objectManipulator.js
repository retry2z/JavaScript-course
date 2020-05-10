function solve(input) {
    // Focus on solving the problem.
    ////////////////////////////////////////////////////////////////////////////////////
    let records = {};

    const like = (obj, user, meal) => {
        if (!obj[user]) {
            obj[user] = {
                meals: [],
            };

        }
        if (!obj[user].meals.includes(meal)) {
            obj[user].meals.push(meal);
        }
        return obj;
    };

    const unlike = (obj, user, meal) => {
        if (obj[user]) {
            if (obj[user].meals.includes(meal)) {
                obj[user].meals = obj[user].meals.filter(x => x !== meal);
                unlikeCount++;
                console.log(`${user} doesn't like the ${meal}.`);
            } else {
                console.log(`${user} doesn't have the ${meal} in his/her collection.`);
            }
        } else {
            console.log(`${user} is not at the party.`);
        }
        return obj;
    };

    let unlikeCount = 0;
    ////////////////////////////////////////////////////////////////////////////////////

    const arr = input.slice(0);

    for (let currentLine of arr) {
        const [cmd, paramOne, paramTwo] = currentLine.split('-');

        switch (cmd) {
            case 'Like': {
                records = like(records, paramOne, paramTwo);
            }
                break;
            case 'Unlike': {
                records = unlike(records, paramOne, paramTwo);
            }
                break;
        }
    }


    const sorted =
        Object.keys(records)
            .sort((a, b) => records[b].meals.length - records[a].meals.length || a.localeCompare(b));
    for (const key of sorted) {
        console.log(`${key}: ${records[key].meals.join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikeCount}`);
}

console.log(`---------------------------------`);
// solve([
//         'Like-Krisi-shrimps',
//         'Like-Krisi-soup',
//         'Like-Misho-salad',
//     'Like-Krisi-shrimps',
//         'Like-Pena-dessert',
//         'Stop'
//     ]);

console.log(`---------------------------------`);
solve([
        'Like-Mike-frenchFries',
        'Like-Mike-salad',
        'Like-George-fruit',
        'Like-Steven-salad',
        'Unlike-Steven-salad',
        'Unlike-Steven-fruit',
        'Stop'
    ]
);
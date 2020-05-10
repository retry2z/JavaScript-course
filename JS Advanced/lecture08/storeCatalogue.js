/******************************************
 *  Author : retry2z
 *  Created On : Thu Jan 23 2020
 *  File : storeCatalogue.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const output = input.reduce((acc, item) => {
        const key = item[0];
        const value = item.split(' : ').join(': ');

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(value);

        return acc;
    }, {});

    const sorted = Object.keys(output).sort((a, b) => a.localeCompare(b));

    sorted.forEach(key => {
        console.log(key);
        console.log(output[key].sort().join('\n'));
    });
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
/******************************************
 *  Author : retry2z
 *  Created On : Thu Jan 23 2020
 *  File : heroicInventory.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const result = input.reduce((acc, item) => {
        const [name, level, inventory] = item.split(' / ');
        const data = {
            name,
            level: Number(level),
            items: inventory ? inventory.split(', ') : [],
        }

        acc.push(data);
        return acc;
    }, []);

    return JSON.stringify(result);
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
/******************************************
 *  Author : retry2z
 *  Created On : Thu Jan 23 2020
 *  File : cappyJuice.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const output = input.reduce((acc, item) => {
        let [juice, quantity] = item.split(' => ');


        if (acc[juice]) {
            quantity = Number(quantity) + acc[juice].ml;
        }

        acc[juice] = {
            ml: Number(quantity),
        }
        const bottles = Math.floor(quantity / 1000);

        if (bottles > 0) {
            acc.result[juice] = bottles;
        }


        return acc;
    }, { result: {} });

    Object.keys(output.result).forEach(key => {
        console.log(`${key} => ${output.result[key]}`);
    });
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
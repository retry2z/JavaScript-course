/******************************************
 *  Author : retry2z
 *  Created On : Fri Nov 29 2019
 *  File : message.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const number = Number(input.shift());

    for (let currentEl of input) {
        const pattern = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/g;

        const match = pattern.exec(currentEl);
        if (match) {
            const g1 = Number(match[3]);
            const g2 = Number(match[4]);
            const g3 = Number(match[5]);
            const result = String.fromCharCode(g1, g2, g3);
            console.log(`${match[2]}: ${result}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);
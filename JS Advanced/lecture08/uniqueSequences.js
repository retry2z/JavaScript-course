/******************************************
 *  Author : retry2z
 *  Created On : Fri Jan 24 2020
 *  File : uniqueSequences.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const output = input.reduce((acc, element) => {
        let tmp = JSON.parse(element)
            .map(Number)
            .sort((a, b) => b - a)
            .join(', ');

        if (!acc.includes(tmp)) {
            acc.push(tmp);
        }
        return acc;
    }, []);

    output
        .sort((a, b) => a.length - b.length)
        .forEach(element => {
            console.log(`[${element}]`);
        });
}

[13, 10, 2, 1, 0, -17]
[4, 3, 2, 1, 0, -1, -2, -3]


solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);


function solve2(input) {
    //Focus on solving the problem.
    const output = input.reduce((acc, element) => {
        let tmp = JSON.parse(element)
            .map(x => Number(x))
            .sort((a, b) => b - a)
            .join(', ');

        if (!acc.includes(tmp)) {
            acc.push(tmp);
        }
        return acc;
    }, []);

    output
        .reverse()
        .forEach(element => {
            console.log(element);
        });
}

// solve2(["[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"]
// );
/******************************************
 *  Author : retry2z
 *  Created On : Fri Jan 24 2020
 *  File : usernameSort.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.

    const result = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(result.join("\n"));
}

// Aizen
// Ariel
// Billy
// Lilly
// Ashton
// Keyden
// Braston
// Kutcher


solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);
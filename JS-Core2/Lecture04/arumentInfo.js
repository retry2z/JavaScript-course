/******************************************
 *  Author : retry2z
 *  Created On : Fri Jan 03 2020
 *  File : arumentInfo.js
 *******************************************/

function solve() {
    //Focus on solving the problem.
    
    const data = {}
    for (const element of arguments) {
        const type = typeof element;
        console.log(`${type}: ${element}`);

        data[type] ?
            data[type]++ : data[type] = 1;
    }

    Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .forEach(x => console.log(`${x} = ${data[x]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });
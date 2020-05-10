/******************************************
 *  Author : retry2z
 *  Created On : Wed Nov 27 2019
 *  File : netherRealms.js
 *******************************************/

function solve(text) {
    //Focus on solving the problem.

    input = text[0]
        .split(/[, ]+/g)
        .sort((a, b) => a.localeCompare(b));

    input.forEach(currentItem => {
        // const healthPat = /(?<health>[^\+\-*\/\.\d])/gm;
        // const damagePat = /(?<damage>[\d+][\.]?[\d+]?|-[\d+][\.]?[\d+]?)/g;
        // const actionPAt = /(?<action>[*\/])/g;

        const healthPat = /(?<health>[^\+\-*\/\.\d])/g;
        const damagePat = /(?<damage>[+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g;
        const actionPAt = /(?<action>\*|\/)/g;

        let health = 0;
        const healthMatch = currentItem.match(healthPat);
        if (healthMatch) {
            health = healthMatch
                .map(x => x.charCodeAt(0))
                .reduce((a, b) => a + b, 0)
        }

        let dmg = 0;
        const dmgMatch = currentItem.match(damagePat);
        if (dmgMatch) {
            dmg = dmgMatch
                .map(Number)
                .reduce((a, b) => a + b, 0)
        }

        const actionMatch = currentItem.match(actionPAt);
        if (actionMatch) {
            actionMatch.forEach(x => {
                if (x === '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            });
        }

        console.log(`${currentItem} - ${health} health, ${dmg.toFixed(2)} damage`);
    });
}

solve(['M3ph1st0** ,, ,, ,,,,,,,        ,       ,, Az  azel']);
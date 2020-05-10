/******************************************
 *  Author : retry2z
 *  Created On : Tue Nov 26 2019
 *  File : race.js
 *******************************************/

function solve(text) {
    //Focus on solving the problem.
    const input = text.slice(0);
    const racers = input.shift();
    const data = {};

    input.forEach(currentItem => {
        if (currentItem === 'end of race') {
            return;
        }

        const racerPattern = /[A-Za-z]/g;
        const distancePattern = /\d/g;

        const name = currentItem.match(racerPattern).join('');
        const distance = currentItem.match(distancePattern)
            .map(Number)
            .reduce((a, b) => a + b, 0);

        if (name && distance) {
            if (racers.includes(name)) {
                if (!data[name]) {
                    data[name] = 0;
                }
                data[name] += distance;
            }
        }
    });

    Object.keys(data)
        .sort((a, b) => data[b] - data[a])
        .slice(0, 3)
        .forEach((x, index) => {
            switch (index) {
                case 0: console.log(`1st place: ${x}`); break;
                case 1: console.log(`2nd place: ${x}`); break;
                case 2: console.log(`3rd place: ${x}`); break;
            }
        });
}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]
);
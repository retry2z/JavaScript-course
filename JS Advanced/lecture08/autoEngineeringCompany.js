/******************************************
 *  Author : retry2z
 *  Created On : Fri Jan 24 2020
 *  File : autoEngineeringCompany.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    const output = input.reduce((acc, item) => {
        const [key, ...value] = item.split(' | ');

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(value);

        return acc;
    }, {});

    Object.keys(output).forEach(key => {
        console.log(key);
        output[key].forEach(x => {
            console.log(`###${x.join(' -> ')}`);
        });        
    });
}



// Mercedes-Benz
// ###50PS -> 123
// ###60PS -> 3000
// ###W210 -> 100
// ###W163 -> 200
// Mini
// ###Clubman -> 21000
// ###Convertible -> 1000
// ###Countryman -> 100
// Hyunday
// ###Elantra GT -> 20000

solve([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]
);
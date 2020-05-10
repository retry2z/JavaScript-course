/******************************************
 *  Author : retry2z
 *  Created On : Wed Nov 27 2019
 *  File : softUniBarIncome.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.

    let totalIncome = 0;
    input.forEach(currentItem => {
        if (currentItem === 'end of shift') {
            console.log(`Total income: ${totalIncome.toFixed(2)}`);
            return;
        }

        const pattern = /%(?<name>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>[\w]+)>(?:[^\|\$%\.]+)?\|(?<count>[\d]+)\|(?:[^\|\$%\.\d]+)?(?<price>[\d]+[\.]?[\d]+)\$/g
       
        const match = pattern.exec(currentItem);
        if (match) {
            const { name, product, count, price } = match.groups;
            totalIncome += (+count) * (+price);
            console.log(`${name}: ${product} - ${((+count) * (+price)).toFixed(2)}`);
        }

    });

}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
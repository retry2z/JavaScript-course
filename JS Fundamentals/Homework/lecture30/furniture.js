/******************************************
 *  Author : retry2z
 *  Created On : Tue Nov 26 2019
 *  File : furniture.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.

    let totalPrice = 0;
    //const soldItems = [];

    console.log('Bought furniture:');
    input.forEach(currentItem => {
        if (currentItem === 'Purchase') {
            return;
        }

        const pattern = />>(?<product>[A-Za-z]+)<<(?<price>\d+(\.)*\d+)!(?<quatity>\d+)/gm;
        const matches = pattern.exec(currentItem);
        if (matches) {
            const { product, price, quatity } = matches.groups;
            console.log(product);
            totalPrice += Number(price) * Number(quatity);
        }

    });    
    //console.log(soldItems.join('\n'));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
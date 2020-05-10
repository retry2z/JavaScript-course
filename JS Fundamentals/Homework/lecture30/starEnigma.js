/******************************************
 *  Author : retry2z
 *  Created On : Wed Nov 27 2019
 *  File : starEnigma.js
 *******************************************/

function solve(text) {
    //Focus on solving the problem.

    const input = text.slice(1);
    const attacked = [];
    const destroyed = [];

    for (let currentItem of input) {
        const decryptPat = /[star]/gi;
        let decryptKey = currentItem.match(decryptPat) ? currentItem.match(decryptPat).length : 0;


        const encryptedMessage = currentItem
            .split('')
            .map(x => {
                const charCode = x.charCodeAt(0) - decryptKey;
                return String.fromCharCode(charCode);
            })
            .join('');

        const messagePat = /@(?<planet>[A-Za-z]+)([^@\-!:>]+)?:(?<population>[\d]+)([^@\-!:>]+)?!(?<type>[A|D])!([^@\-!:>]+)?->(?<solders>[\d]+)/gm
        const message = messagePat.exec(encryptedMessage);

        if (message) {
            const { planet, population, type, solders } = message.groups;

            if (type === 'A') {
                attacked.push(planet);
            } else if (type === 'D') {
                destroyed.push(planet);
            }
        }
    }

    console.log(`Attacked planets: ${attacked.length}`);
    if (attacked.length > 0) {
        attacked
            .sort((a, b) => a.localeCompare(b))
            .forEach(x => console.log(`-> ${x}`));
    }

    console.log(`Destroyed planets: ${destroyed.length}`);
    if (destroyed.length > 0) {
        destroyed
            .sort((a, b) => a.localeCompare(b))
            .forEach(x => console.log(`-> ${x}`));
    }
}

solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);
/******************************************
 *  Author : retry2z
 *  Created On : Thu Nov 28 2019
 *  File : winningTicket.js
 *******************************************/

function solve(text) {
    //Focus on solving the problem.
    const input = text[0]
        .split(/[, ]+/g);

    const ticketChecker = (txt) => {
        const ticket = {
            '@': /[@]{6,}/g,
            '#': /[#]{6,}/g,
            '$': /[$]{6,}/g,
            '^': /[\^]{6,}/g,
        }

        for (const winPattern in ticket) {
            const match = txt.match(ticket[winPattern]);
            if (match) {
                const winLenght = match[0].length;
                return {
                    type: winPattern,
                    lenght: winLenght,
                };
            }
        }
    };

    input.forEach(currentItem => {
        if (currentItem.length === 20) {
            const halfIndex = currentItem.length / 2;
            const leftHalf = currentItem.substr(0, halfIndex);
            const rightHalf = currentItem.substr(halfIndex);


            const checkLeft = ticketChecker(leftHalf);
            const checkRight = ticketChecker(rightHalf);
            if (checkLeft && checkRight) {
                if (checkLeft.type === checkRight.type && checkLeft.lenght === checkRight.lenght) {
                    if (checkLeft.lenght < 10 && checkLeft.lenght > 5) {
                        console.log(`ticket "${currentItem}" - ${checkLeft.lenght}${checkLeft.type}`);
                    } else {
                        console.log(`ticket "${currentItem}" - ${checkLeft.lenght}${checkLeft.type} Jackpot!`);
                    }
                } else {
                    console.log(`ticket "${currentItem}" - no match`);
                }
            } else {
                console.log(`ticket "${currentItem}" - no match`);
            }
        } else {
            console.log(`invalid ticket`);
        }
    });
}

solve(['th@@@aaaeemo@@aaa@ey , $$$$$$$$$$$$$$$$$$@$   ,   aabb  ,     th@@@@@@eemo@@@@@$ey,   th@@@@@@eemo@@@@@@ey']);

// ['th@@@aaaeemo@@aaa@ey , $$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey']
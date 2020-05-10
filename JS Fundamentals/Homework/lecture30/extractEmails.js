/******************************************
 *  Author : retry2z
 *  Created On : Wed Nov 27 2019
 *  File : extractEmails.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.

    input.forEach(currentItem => {
        //const mailPat = /[a-z0-9]+[a-z0-9_\-\.]+@[a-z]+[\-\.]?[a-z]+[a-z\.]+[\.][a-z]+/gi;
        const mailPat =  /(?<=\s)([a-z]+|\d+)(\d+|\w+|\.+|-+)([a-z]+|\d+)\@[a-z]+\-?[a-z]+\.[a-z]+(\.[a-z]+)?/gi;
        const match = currentItem.match(mailPat);
        if (match) {
            console.log(match.join('\n'));
        }
    });
}

solve(['Please contact us at: support@github.com.', 'end']);
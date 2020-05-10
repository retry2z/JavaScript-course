/******************************************
 *  Author : retry2z
 *  Created On : Thu Jan 02 2020
 *  File : functionalSum.js
 *******************************************/

const test = (function () {
    //Focus on solving the problem.
    let sum = 0;
    return function add(n) {
        sum += n;
        add.toString = function () {
            return sum;
        }
        return add;
    }
})();


console.log(test(6)(1).toString());


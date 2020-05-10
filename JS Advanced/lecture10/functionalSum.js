/******************************************
 *  Author : retry2z
 *  Created On : Tue Jan 28 2020
 *  File : functionalSum.js
 *******************************************/

function solve(num) {
    //Focus on solving the problem.
    let result = 0;


    //function that returns itself.
    function add(num) {
        result += num;
        return add;
    };


    //Overwrite toString function to return the output.
    add.toString = function () {
        return result;
    }


    //return the function from the closure.
    return add;
}

const blq = solve();

console.log(blq(1)(2)(10).toString());    
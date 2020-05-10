/******************************************
 *  Author : retry2z
 *  Created On : Fri Jan 03 2020
 *  File : personalBMI.js
 *******************************************/

function solve(name, age, weight, height) {
    //Focus on solving the problem.
    const data = {
        name: name,
        personalInfo: {
            age,
            weight,
            height,
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: '',
    }

    if (data.BMI < 18.5) {
        data.status = 'underweight';
    } else if (data.BMI < 25) {
        data.status = 'normal';
    } else if (data.BMI < 30) {
        data.status = 'overweight';
    } else {
        data.status = 'obese';
        data.recommendation = 'admission required';
    }
    return data;
}

solve('Honey Boo Boo', 9, 57, 137);
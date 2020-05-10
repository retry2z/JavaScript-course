/******************************************
 *  Author : retry2z
 *  Created On : Tue Dec 31 2019
 *  File : filterEmployees.js
 *******************************************/

function solve(data, element) {
    //Focus on solving the problem.
    const input = JSON.parse(data);
    const [key, value] = element.split('-');
    const result = [];

    for (const x of input) {
        if (x[key] === value) {
            result.push(x);
        }
    }

    result.forEach((element, index) => {
        console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`);
    });
}

solve(
    `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
    'last_name-Johnson'
);
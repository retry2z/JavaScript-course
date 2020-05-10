/******************************************
 *  Author : retry2z
 *  Created On : Sat Nov 30 2019
 *  File : username.js
 *******************************************/

function solve(input) {
    //Focus on solving the problem.
    let srt = input.shift();

    const checkValidIndexes = (number, arrOrString) => {
        return (Number(number) >= 0 && Number(number) <= arrOrString.length - 1);
    };

    for (const currentLine of input) {
        const command = currentLine.split(' ');

        // if ('Sign up' === currentLine) {
        //     return;
        // }

        switch (command[0]) {
            case 'Case': {
                if (command[1] === 'lower') {
                    srt = srt.toLowerCase();
                    console.log(srt);

                } else if (command[1] === 'upper') {
                    srt = srt.toUpperCase();
                    console.log(srt);
                }
            }
                break;
            case 'Reverse': {
                if (checkValidIndexes(command[1], srt) && checkValidIndexes(command[2], srt)) {
                    const substr = srt
                        .substr(command[1], command[2])
                        .split('')
                        .reverse()
                        .join('');
                    console.log(substr);
                }
            }
                break;
            case 'Cut': {
                if (srt.includes(command[1])) {
                    const index = srt.indexOf(command[1]);
                    srt = srt.substring(0, index) + srt.substring(index + command[1].length);
                    console.log(srt);
                } else {
                    console.log(`The word ${srt} doesn't contain ${command[1]}.`);
                }

            }
                break;
            case 'Replace': {
                const regExp = new RegExp(command[1], 'g');
                srt = srt.replace(regExp, '*');
                console.log(srt);
            }
                break;
            case 'Check': {
                if (!srt.includes(command[1])) {
                    console.log(`Your username must contain ${command[1]}.`);
                } else {
                    console.log('Valid');
                }
            }
                break;
        }
    }
}

solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut TT', 'Sign up' ]);
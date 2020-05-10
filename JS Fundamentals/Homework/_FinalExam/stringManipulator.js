function solve(input) {
    // Focus on solving the problem.

////////////////////////////////////////////////////////////////////////////////////
    const checkValidIndexes = (text, number) => {
        return (Number(number) >= 0 && Number(number) <= text.length);
    };

    const toCaseSubstring = (text, substring) => {
        if (substring === 'Lower') {
            return text.toLowerCase()
        } else if (substring === 'Upper') {
            return text.toUpperCase();
        }
    };

    const replaceAllSubstrings = (text, search, symbol) => {
        const regex = new RegExp(search, 'g');
        return text.replace(regex, symbol);
    };

    const cutIndex = (text, startIndex, endIndex) => {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);


        const firstPart = text.substring(0, startIndex);
        const secondPart = text.substring(endIndex + 1);
        text = firstPart + secondPart;
        return text

        //  const tmp = text.substring(startIndex, endIndex + 1);
        // return text.replace(tmp, '');
    };

    const sumSubstring = (text, startIndex, endIndex) => {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        const tmp = text.substring(startIndex, endIndex + 1);
        return tmp
            .split('')
            .map(x => x.charCodeAt(0))
            .reduce((a, b) => a + b, 0);
    };
////////////////////////////////////////////////////////////////////////////////////

    let text = input.slice(0, 1)[0];
    const commands = input.slice(1);

    for (let line of commands) {
        if (line === 'Finish') {
            return
        }
        const [cmd, paramOne, paramTwo] = line.split(' ');

        switch (cmd) {
            case 'Replace': {
                text = replaceAllSubstrings(text, paramOne, paramTwo);
                console.log(text);
            }
                break;
            case 'Cut': {
                if (checkValidIndexes(text, paramOne) && checkValidIndexes(text, paramTwo)) {
                    text = cutIndex(text, paramOne, paramTwo);
                    console.log(text);
                } else {
                    console.log("Invalid indexes!");
                }
            }
                break;
            case 'Make': {
                text = toCaseSubstring(text, paramOne);
                console.log(text);
            }
                break;
            case 'Check': {
                if (text.indexOf(paramOne) >= 0) {
                    console.log(`Message contains ${paramOne}`);
                } else {
                    console.log(`Message doesn't contain ${paramOne}`);
                }
            }
                break;
            case 'Sum': {
                if (checkValidIndexes(text, paramOne) && checkValidIndexes(text, paramTwo)) {
                    console.log(sumSubstring(text, paramOne, paramTwo));
                } else {
                    console.log("Invalid indexes!");
                }
            }
                break;
        }
    }
}

console.log(`---------------------------------`);
solve(
    [
        'ILikeSharan',
        'Replace a e',
        'Make Upper',
        'Check SHEREN',
        'Sum 1 4',
        'Cut 1 4',
        'Finish'
    ]
);
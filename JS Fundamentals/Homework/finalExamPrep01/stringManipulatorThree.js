function solve(input) {
    // Focus on solving the problem.

////////////////////////////////////////////////////////////////////////////////////
    const checkValidIndexes = (text, number) => {
        return (Number(number) >= 0 && Number(number) <= arrOrString.length - 1);
    };

    const toCaseSubstring = (text, substring) => {
        return (substring === 'lower') ? text.toLowerCase() : text.toUpperCase();
    };

    const replaceAllSubstrings = (text, search, symbol) => {
        const regex = new RegExp(search, 'g');
        return text.replace(regex, symbol);
    };

    const includesSubstring = (text, symbol) => {
        if (text.includes(symbol)) {
            return 'True';
        } else {
            return 'False';
        }
    };

    const reverseSubstring = (text, startIndex, endIndex) => {
        startIndex = Number(startIndex) || 0;
        endIndex = Number(endIndex) || text.length;
        const tmp = text.substring(startIndex, endIndex + 1);
        return tmp
            .split('')
            .reverse()
            .join('');
    };

    const getStartWith = (text, symbol) => {
        return text.startsWith(symbol);
    };

    const getEndWith = (text, symbol) => {
        if (text.endsWith(symbol)) {
            return 'True';
        } else {
            return 'False';
        }
    };

    const getLastIndex = (text, symbol) => {
        return text.lastIndexOf(symbol);
    };

    const getIndexOF = (text, symbol) => {
        return text.indexOf(symbol);
    };

    const cutText = (text, substring) => {
        let temp = false;
        if (text.includes(substring)) {
            const index = text.indexOf(substring);
            //temp = text.substring(0, index) + text.substring(index + param.length);
            temp = text.replace(substring, '');
        }
        return temp;
    };

    const cutIndex = (text, startIndex, endIndex) => {
        startIndex = Number(startIndex) || 0;
        endIndex = Number(endIndex) || text.length;
        return text.substring(0, startIndex) + text.substring(startIndex + endIndex);
    };

    const cutLength = (text, startIndex, length) => {
        debugger
        startIndex = Number(startIndex) || 0;
        length = Number(length) || text.length;
        return text.substr(startIndex, length);
    };
////////////////////////////////////////////////////////////////////////////////////

    let text = input.slice(0, 1)[0];
    const commands = input.slice(1);

    for (let line of commands) {
        const [cmd, paramOne, paramTwo] = line.split(' ');

        switch (cmd) {
            case 'Change': {
                text = replaceAllSubstrings(text, paramOne, paramTwo);
                console.log(text);
            }
                break;
            case 'Includes': {
                console.log(includesSubstring(text, paramOne));
            }
                break;
            case 'End': {
                console.log(getEndWith(text, paramOne));
            }
                break;
            case 'Uppercase': {
                text = toCaseSubstring(text, 'upper');
                console.log(text);
            }
                break;
            case 'FindIndex': {
                console.log(getIndexOF(text, paramOne));
            }
                break;
            case 'Cut': {
                text = cutLength(text, paramOne, paramTwo);
                console.log(text);
            }
                break;

        }
    }
}

console.log(`---------------------------------`);
solve([
        '//Th1s 1s my str1ng!//',
        'Change 1 i',
        'Includes string',
        'End my',
        'Uppercase',
        'FindIndex I',
        'Cut 5 5',
        'Done'
    ]
);

console.log(`---------------------------------`);
//solve();
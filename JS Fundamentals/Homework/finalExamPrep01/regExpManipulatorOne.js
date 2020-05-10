function solve(input) {
    //Focus on solving the problem.
    const arr = input.slice(1);
    const number = input.slice(0, 1)[0];

    for (let currentLine of arr) {
        const pattern = /([*@])([A-Z][a-z]{2,})(\1): \[([A-Za-z])\]\|\[([A-Za-z])\]\|\[([A-Za-z])\]\|$/g;

        const match = pattern.exec(currentLine);
        if (match) {
            //console.log(match);
            const tag = match[2];
            const g1 = match[4].charCodeAt((0));
            const g2 = match[5].charCodeAt((0));
            const g3 = match[6].charCodeAt((0));

            const output = ``;
            console.log(`${tag}: ${g1} ${g2} ${g3}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

console.log(`---------------------------------`);
solve([
        '3',
        '*Request*: [I]|[s]|[i]|',
        '*Taggy@: [73]|[73]|[73]|',
        'Should be valid @Taggy@: [v]|[a]|[l]|'
    ]
);

console.log(`---------------------------------`);
solve([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
]);
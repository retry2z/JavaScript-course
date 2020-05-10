function solve(input) {
    //Focus on solving the problem.
    const arr = input.slice(1);
    const number = input.slice(0, 1)[0];

    for (let currentLine of arr) {
        const pattern = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/g;

        const match = pattern.exec(currentLine);
        if (match) {
            debugger
            const cmd = match[1];
            const msg = match[2];

            const decrypt = msg
                .split('')
                .map(x => x.charCodeAt(0) + ' ')
                .join('');

            const output = `${cmd}: ${decrypt.trim()}`;
            console.log(output);
        } else {
            console.log(`The message is invalid`);
        }
    }
}

console.log(`---------------------------------`);
solve([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
]);

console.log(`---------------------------------`);
solve([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
]);
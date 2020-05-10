function password(input) {
    // Focus on solving the problem.
    const number = input.shift();

    let currentItem;
    for (currentItem of input) {
        const pattern = /^(.+)>(\d{3,3})\|([a-z]{3,3})\|([A-Z]{3,3})\|([^<>]{3,3})<(\1)$/g;
        const match = pattern.exec(currentItem);

        if (match) {
            const output = match[2] + match[3] + match[4] + match[5];
            console.log(`Password: ${output}`);
        } else {
            console.log(`Try another password!`);
        }
    }

}

password([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
]);
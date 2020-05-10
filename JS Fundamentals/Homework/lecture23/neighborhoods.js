function neighborhoods(input) {
    // Focus on solving the problem.
    const map = new Map();

    input
        .shift()
        .split(', ')
        .forEach(x => map.set(x, []));

    input.forEach(x => {
        const [street, name] = x.split(' - ');
        if (map.has(street)) {
            const newValue = map.get(street);
            newValue.push(name);
            map.set(street, newValue);
        }
    });

    let sorted = Array.from(map.entries())
        .sort((a, b) => {
            return b[1].length - a[1].length
        });

    sorted.forEach(x => {
        console.log(`${x[0]}: ${x[1].length}`);
        x[1].forEach( el => console.log(`--${el}`));
    });
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);
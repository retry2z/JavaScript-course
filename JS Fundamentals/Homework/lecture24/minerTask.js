function minerTask(input) {
    // Focus on solving the problem.
    const map = new Map();

    for (let i = 0; i < input.length; i += 2) {
        if (!map.has(input[i])) {
            map.set(input[i], +input[i + 1]);
        } else {
            const newValue = map.get(input[i]) + +input[i + 1];
            map.set(input[i], newValue)
        }
    }

    map.forEach((value, key) => console.log(`${key} -> ${value}`));
}

minerTask([
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
);
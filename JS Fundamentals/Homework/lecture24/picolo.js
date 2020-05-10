function picolo(input) {
    const map = new Map();

    input.forEach(line => {
        const [direction, carNumber] = line.split(', ');

        if (direction === 'IN' && !map.has(carNumber)) {
            map.set(carNumber, 1);
        } else if (direction === 'OUT' && map.has(carNumber)) {
            map.delete(carNumber);
        }
    });
    console.log(Array.from(map.keys()).join('\n'));
}

picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);
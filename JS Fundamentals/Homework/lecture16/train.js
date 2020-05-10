function train(input) {
    let wagons = input
        .shift()
        .split(' ')
        .map(Number);
    const wagonCapacity = Number(input.shift());

    input.forEach(command => {
        const currentCommand = command.split(' ');

        if (currentCommand[0] === 'Add') {
            wagons.push(currentCommand[1]);
        } else {
            for (let i = 0; i < wagons.length; i++) {
                const newCapacity = Number(currentCommand[0]) + wagons[i];

                if (newCapacity <= wagonCapacity) {
                    wagons[i] = newCapacity;
                    break;
                }
            }
        }
    });

    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
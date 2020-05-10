function arrayManipulations(arr) {
    let output = arr
        .shift()
        .split(' ');

    const commands = arr.slice();
    commands.forEach(x => {
        const currentAction = x.split(' ');

        switch (currentAction[0]) {
            case 'Add': {
                output.push(currentAction[1]);
                break;
            }
            case 'Remove': {
                output = output.filter(x => x !== currentAction[1]);
                break;
            }
            case 'RemoveAt':
                output.splice(currentAction[1], 1);
                break;
            case 'Insert': {
                const index = currentAction[2];
                output.splice(index, 0, currentAction[1]);
                break;
            }
        }
    });

    console.log(output.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
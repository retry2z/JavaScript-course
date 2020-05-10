function arrayManipulator(input, commandList) {

    for (let currentEl of commandList) {
        const command = currentEl.split(' ');

        switch (command[0]) {
            case 'add':
                input.splice(command[1], 0, Number(command[2]));
                break;

            case 'contains':
                console.log(input.indexOf(Number(command[1])));
                break;

            case 'addMany':
                for (let addElement of command.slice(2)) {
                    input.splice(command[1], 0, Number(addElement));
                    command[1]++;
                }
                break;

            case 'remove':
                input.splice(command[1], 1);
                break;

            case 'shift':
                let rotate = Number(command[1]);
                for (let i = 0; i < rotate; i++) {
                    input.push(input[0]);
                    input.shift();
                }
                break;

            case 'print':
                console.log(`[ ${input.join(', ')} ]`);
                break;

            case 'sumPairs':
                const sumPairs = (array) => {
                    if (array.length > 1) {
                        const result = [];
                        for (let i = 0; i < array.length; i += 2) {
                            if (i + 1 < array.length) {
                                const currentElement = Number(array[i]);
                                const nextElement = Number(array[i + 1]);
                                result.push(currentElement + nextElement);
                            } else {
                                break;
                            }
                        }
                        return result;
                    } else {
                        return array;
                    }
                };
                input = sumPairs(input);
        }
    }
}

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"],
);


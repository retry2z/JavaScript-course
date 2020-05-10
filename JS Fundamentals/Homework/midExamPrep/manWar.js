function manWar(input) {
    const pirateShip = input.shift().split('>').map(Number);
    const warShip = input.shift().split('>').map(Number);
    const maxHealth = Number(input.shift());

    const checkValidIndexes = (number, arr) => {
        return (Number(number) <= arr.length && Number(number) >= 0);
    };

    const sumLength = (string_array_digit) => {
        let sum = 0;
        const input = string_array_digit;

        const findType = (input) => {
            if (Array.isArray(input)) {
                return 'array';
            } else {
                return typeof input;
            }
        };
        const type = findType(input);

        switch (type) {
            case 'string': {
                input.split('').map(e => {
                    sum += +e;
                });
                break;
            }
            case 'array': {
                input.map(e => {
                    sum += +e;
                });
                break;
            }
            case 'number': {
                (input).toString().split('').map(e => {
                    sum += +e;
                });
                break;
            }
        }
        return sum;
    };

    for (let token of input) {
        const value = token.split(' ');
        const action = value.shift();

        if (action.includes('Retire')) {
            break;
        }

        switch (action) {
            case 'Fire': {
                const [index, damage] = value;
                if (checkValidIndexes(index, warShip)) {
                    warShip[index] -= Number(damage);
                    if (pirateShip[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            }
            case 'Defend': {
                const [startIndex, endIndex, damage] = value;
                if (checkValidIndexes(startIndex, pirateShip) && (checkValidIndexes(endIndex, pirateShip))) {
                    for (let index = Number(startIndex); index <= Number(endIndex); index++) {
                        pirateShip[index] -= Number(damage);
                        if (pirateShip[index] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }
                }
                break;
            }
            case 'Repair': {
                const [index, repairHealth] = value;
                if (checkValidIndexes(index, pirateShip)) {
                    const newHealth = Number(repairHealth) + pirateShip[index];
                    pirateShip[index] = Math.min(maxHealth, newHealth);
                }
                break;
            }
            case 'Status':
                const needToRepairValue = maxHealth * 0.2;
                let count = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    if (pirateShip[i] < needToRepairValue) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
    }
    console.log('Pirate ship status: ' + sumLength(pirateShip));
    console.log('Warship status: ' + sumLength(warShip));

}

manWar([
        '2>3>4>5>2',
        '6>7>8>9>10>11',
        '20',
        'Status',
        'Fire 2 3',
        'Defend 0 4 11',
        'Repair 3 18',
        'Retire'
    ]
);
function tanksCollector(input) {
    const ownedTanks = input.shift().split(', ');
    const count = Number(input.shift());

    const checkValidIndexes = (number, arr) => {
        return (Number(number) <= arr.length && Number(number) >= 0);
    };

    for (let i = 0; i < count; i++) {
        const token = input[i].split(', ');
        const command = token.shift();

        switch (command) {
            case 'Add':
                const tank = token[0];
                if (ownedTanks.includes(tank)) {
                    console.log("Tank is already bought");
                    break;
                }
                ownedTanks.push(tank);
                console.log("Tank successfully bought");
                break;
            case 'Insert':
                const index = Number(token.shift());
                const tankToInsert = token[0];

                if (checkValidIndexes(index, ownedTanks)) {
                    if (ownedTanks.includes(tankToInsert)) {
                        console.log("Tank is already bought");
                        break;
                    }
                    console.log("Tank successfully bought");
                    ownedTanks.splice(index, 0, tankToInsert);
                } else {
                    console.log("Index out of range");
                }
                break;
            case 'Remove':
                const tankToRemove = token[0];
                const indexToRemove = ownedTanks.indexOf(tankToRemove)
                if (indexToRemove === -1) {
                    console.log("Tank not found");
                    break;
                }
                ownedTanks.splice(indexToRemove, 1);
                console.log("Tank successfully sold");
                break;
            case 'Remove At':
                const removeAtIndex = Number(token[0]);
                if (checkValidIndexes(removeAtIndex, ownedTanks)) {

                    ownedTanks.splice(removeAtIndex, 1);
                    console.log("Tank successfully sold");
                } else {
                    console.log("Index out of range" );
                }
                break;
        }

    }
    console.log(ownedTanks.join(', '));
}

tanksCollector([
        'T-34-85 Rudy, SU-100Y, STG',
        '3',
        'Add, King Tiger(C)',
        'Insert, 2, IS-2M',
        'Remove, T-34-85 Rudy'
    ]
);
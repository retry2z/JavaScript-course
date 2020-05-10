function experienceGaining(input) {
    input = input.map(Number);
    const neededExp = input.shift();
    const combatCount = input.shift();
    let battles = 0;
    let gainedExp = 0;

    for (let i = 1; i <= combatCount; i++) {
        let expToAdd = input[i - 1];
        if (i % 3 === 0) {
            expToAdd = expToAdd + (expToAdd * 0.15);
        }
        if (i % 5 === 0) {
            expToAdd = expToAdd - (expToAdd * 0.1);
        }
        gainedExp += expToAdd;
        if (gainedExp >= neededExp) {
            battles = i;
            break;
        }
    }

    if (gainedExp >= neededExp) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${neededExp - gainedExp} more needed.`);
    }
}

experienceGaining([
        '500', '5',
        '50', '100',
        '200', '100',
        '30'
    ]
);
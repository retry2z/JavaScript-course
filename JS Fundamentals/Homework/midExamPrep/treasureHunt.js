function treasureHunt(input) {
    let treasure = input.shift().split('|');

    for (let command of input) {
        if (command.includes('Yohoho!')) {
            break;
        } else if (command.includes('Loot')) {
            const [comm, ...looted] = command.split(' ');
            for (let item of looted) {
                if (!treasure.includes(item)) {
                    treasure.unshift(item);
                }
            }
        } else if (command.includes('Drop')) {
            const index = Number(command.split(' ')[1]);
            if (index >= 0 && index <= treasure.length) {
                const dropped = treasure.splice(index, 1);
                treasure.push(dropped[0]);
            }
        } else if (command.includes('Steal')) {
            const count = Number(command.split(' ')[1]);
            let index = treasure.length - count;
            if (count > treasure.length) {
                index = 0;
            }
            const steal = treasure.splice(index, treasure.length);
            console.log(steal.join(', '));
        }
    }

    if (treasure.length > 0) {
        let sum = 0;
        for (let loot of treasure) {
            sum += loot.length;
        }
        sum = sum / treasure.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}

treasureHunt([
        'Diamonds|Silver|Shotgun|Gold',
        'Loot Silver Medals Coal',
        'Drop -1',
        'Drop 1',
        'Steal 6',
        'Yohoho!'
    ]
);
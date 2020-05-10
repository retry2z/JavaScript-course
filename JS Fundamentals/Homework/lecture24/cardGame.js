function cardGame(input) {
    // Focus on solving the problem.
    const powerCard = new Map();
    powerCard.set('J', 11);
    powerCard.set('Q', 12);
    powerCard.set('K', 13);
    powerCard.set('A', 14);

    const typeCard = new Map();
    typeCard.set('S', 4);
    typeCard.set('H', 3);
    typeCard.set('D', 2);
    typeCard.set('C', 1);

    const filterDuplicates = (arr) => {
        return arr.filter((x, pos) => arr.indexOf(x) === pos);
    };

    const countingCards = (arr) => {
        let output = 0;
        arr.forEach(card => {
            const score = card.split('');
            const type = typeCard.get(score.pop());
            const power = powerCard.get(score.join('')) || Number(score.join(''));
            const result = power * type;

            output += result;
        });
        return output;
    };

    const gamePlayers = {};
    input.forEach(token => {
        const line = token.split(': ');
        const name = line.shift();
        const cardList = line[0].split(', ');

        if (!gamePlayers.hasOwnProperty(name)) {
            gamePlayers[name] = {
                'cards': cardList,
                'power': 0,
            };
        } else {
            gamePlayers[name].cards = gamePlayers[name].cards
                .concat(cardList);
        }
    });

    for (let key in gamePlayers) {
        const dropCards = filterDuplicates(gamePlayers[key].cards);
        console.log(`${key}: ${countingCards(dropCards)}`);
    }
}

cardGame([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);
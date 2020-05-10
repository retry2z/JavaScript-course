function carWash(input) {
    let value = 0;

    input.forEach(currentCommand => {
        switch (currentCommand) {
            case 'soap':
                value += 10;
                break;
            case 'vacuum cleaner':
                value += value * (25 / 100);
                break;
            case 'mud':
                value -= value * (10 / 100);
                break;
            case 'water':
                value += value * (20 / 100);
                break;
        }
    });

    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
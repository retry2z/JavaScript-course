function printDNA(input) {
    const chainSymbols = [['A', 'T'], ['C', 'G'], ['T', 'T'], ['A', 'G'], ['G', 'G']];
    let countChainSymbols = 0;
    let countTemplate = 0;
    let i = 0;

    const templateChooser = (index) => {
        const templateZero = (input) => {
            console.log(`**${input[0]}${input[1]}**`);
        };
        const templateTwo = (input) => {
            console.log(`*${input[0]}--${input[1]}*`);
        };
        const templateFour = (input) => {
            console.log(`${input[0]}----${input[1]}`);
        };

        const getTemplate = [templateZero, templateTwo, templateFour, templateTwo];
        return getTemplate[index];
    };

    for (i = 0; i < input; i++) {
        const template = templateChooser(countTemplate);
        template(chainSymbols[countChainSymbols]);

        if (countChainSymbols < 4) {
            countChainSymbols++;
        } else {
            countChainSymbols = 0;
        }
        if (countTemplate < 3) {
            countTemplate++;
        } else {
            countTemplate = 0;
        }
    }
}

printDNA(6);
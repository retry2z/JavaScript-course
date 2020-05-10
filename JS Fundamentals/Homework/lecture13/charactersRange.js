function charactersRange(charOne, charTwo) {
    const charOneASCII = charOne.charCodeAt(0);
    const charTwoASCII = charTwo.charCodeAt(0);
    const beginPosition = Math.min(charOneASCII, charTwoASCII) + 1;
    const endPosition = Math.max(charOneASCII, charTwoASCII) - 1;
    let output = [];

    for (let i = beginPosition; i <= endPosition; i++) {
        output.push(String.fromCharCode(i));
    }

    console.log(output.join(' '));
}

charactersRange('#',
    ':'
);
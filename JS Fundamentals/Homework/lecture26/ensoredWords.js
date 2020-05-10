function censoredWords(input, word) {
    // Focus on solving the problem.
    let result = input;
    const censoredWord = '*'.repeat(word.length);

    while (result.includes(word)) {
        result = result.replace(word, censoredWord);
    }

    console.log(result);
}

censoredWords("A small sentence with some small words", "small");
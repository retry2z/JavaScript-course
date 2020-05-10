function countStringOccurrences(input, key) {
    // Focus on solving the problem.
    const result = input
        .split(' ')
        .filter(x => x === key)
        .length;


    console.log(result);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
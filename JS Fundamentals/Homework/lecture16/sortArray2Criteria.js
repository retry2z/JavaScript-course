function sortArray2Criteria(input) {
    input = input
        .sort((a, b) => {
            a = a.toLowerCase();
            b = b.toLowerCase();
            return (a.length - b.length || a.localeCompare(b));
        });


    console.log(input.join('\n'));
}

sortArray2Criteria(['test',
    'Deny',
    'omen',
    'Default']);
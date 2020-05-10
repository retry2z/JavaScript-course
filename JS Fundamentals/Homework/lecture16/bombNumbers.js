function bombNumbers(input, bomb) {
    const bombNumber = bomb[0];
    const bombRadius = bomb[1];

    let bombIndex = input.indexOf(bombNumber);

    while (bombIndex !== -1) {
        input.splice(bombIndex, bombRadius + 1);
        input.splice(bombIndex - bombRadius, bombRadius);
        bombIndex = input.indexOf(bombNumber);
    }

    console.log(input.reduce((a, b) => a + b, 0));

}

bombNumbers(
    [1, 2, 2, 4, 2, 2, 3, 9],
    [4, 2]
);
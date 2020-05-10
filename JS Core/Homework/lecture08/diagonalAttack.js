function diagonalAttack(input) {
    input = input.map((e) => {
        return e.split(' ');
    });

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].map((e) => {
            return +e;
        });
    }

    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < input.length; i++) {
        sum1 += input[i][i];
        sum2 += input[i][input.length - 1 - i];
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if ((i !== j) && (j !== input.length - 1 - i)) {
                input[i][j] = sum2;
            }
        }

    }
    input.forEach((x) => {
        console.log(x.join(" "));
    })
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
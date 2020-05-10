function equalNeighbors(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {


        for (let j = 0; j < input[i].length; j++) {

            if (i + 1 < input.length) {
                if (input[i][j] === input[i + 1][j]) {
                    count++;
                }
            }
            if (j + 1 < input[i].length) {
                if (input[i][j] === input[i][j + 1]) {
                    count++;
                }
            }

        }
    }
    console.log(count);
}

equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
        ['well', 'done', 'yo', '6'],
        ['not', 'done', 'yet', '5']]
);
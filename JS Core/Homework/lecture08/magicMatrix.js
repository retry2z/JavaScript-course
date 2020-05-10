function magicMatrix(input) {
    let k = false;
    let sumRow = [];
    let sumColl = [];
    let tmp = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (sumRow[i]) {
                sumRow[i] += input[i][j];
            } else {
                sumRow[i] = input[i][j];
            }
            if (sumColl[i]) {
                sumColl[i] += input[j][i];
            } else {
                sumColl[i] = input[j][i];
            }
        }
    }
    k = (sumRow.filter((x) => x !== sumRow[0]).length === 0 && sumColl.filter((x) => x !== sumColl[0]).length === 0);
    console.log(k);

}

magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);
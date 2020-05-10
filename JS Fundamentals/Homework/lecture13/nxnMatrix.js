function nxnMatrix(input) {
    const row = new Array(input).fill(input);
    const matrix = new Array(input).fill(row);

    console.log(matrix);

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

nxnMatrix(5);
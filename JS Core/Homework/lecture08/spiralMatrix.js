function spiralMatrix(rowss, colls) {
    let result = [[], [], []];
    let inc = 1;
    let currentRow = 0;
    let currnetColl = 0;

    if (currentRow <= rows) {
        //left
        for (let i = currentRow; i < rows; i++) {
            result[currentRow][i] = inc;
            inc++;
        }
        currentRow++;
        currnetColl++;

        //down
        for (let i = currnetColl; i < colls; i++) {
            result[i].unshift(inc);
            inc++;
        }

        //checked

        //right
        for (let i = currentRow; i < rows; i++) {
           result[rows-1].unshift(inc);
           inc++;
        }




    }




    result.forEach(e => {
        console.log(e);
    });
}

spiralMatrix(3, 3);
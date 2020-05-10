function spiralMatrixx(rows, colls) {
    let output = [[], [], []];
    let inc = 0;
    let currentRow = 0;
    let currentColl = 0;

    if (currentRow <= rows) {
        //left
        for (let i = currentRow; i < rows; i++) {
            inc++;
            output[currentRow][i] = inc;

        }
        currentRow++;


        //down
        for (let i = currentColl; i < colls; i++) {
            inc++;
            output[i].unshift(inc);

        }
        currentColl++;

        //checked

        //right
        for (let i = currentRow; i < rows; i++) {
           output[rows-1].unshift(inc);
           inc++;
        }




    }

    output.forEach(e => {
        console.log(e);
    });
}

spiralMatrixx(3, 3);
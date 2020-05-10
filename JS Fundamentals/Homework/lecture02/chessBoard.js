function chessBoard(n) {
    let output = '<div class="chessboard">\n';
    let areType = 'white';

    for (let i = 0; i < n; i++) {
        output += '  <div>\n';

        for (let j = 0; j < n; j++) {
            if (areType === 'white') {
                areType = 'black';
            } else {
                areType = 'white';
            }
            output += `    <span class="${areType}"></span>\n`;
        }
        output += '  </div>\n';
    }
    output += '</div>\n';
    console.log(output);
}

chessBoard(3);


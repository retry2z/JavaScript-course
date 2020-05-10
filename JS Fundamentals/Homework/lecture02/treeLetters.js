function treeLetters(n) {
    let one = '';
    let two = '';
    let tree = '';
    for (let i = 0; i < n; i++) {

        one = String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {

            two = String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                tree = String.fromCharCode(97 + k);
                console.log(one + two + tree);
            }
        }
    }
}

treeLetters(3);
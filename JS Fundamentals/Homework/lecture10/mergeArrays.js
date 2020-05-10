function mergeArrays(a1, a2) {
    let tmp = [];
    for (let i = 0; i < a1.length; i++) {
        if (i % 2 !== 0) {
            tmp.push(a1[i] + a2[i]);
        } else {
            tmp.push(+a1[i] + +a2[i])
        }
    }
    console.log(tmp.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
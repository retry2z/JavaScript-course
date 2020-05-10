function nonDecreasing(input) {
    let tmp = Number.MIN_VALUE;
    let i = 0;
    let result = [];

    for (i = 0; i < input.length; i++) {
        if (input[i] > tmp) {
            tmp = +input[i];
            result.push(tmp);
        }
    }
    console.log(result.join(' '));
}

nonDecreasing([ 20, 3, 2, 15, 6, 1]);
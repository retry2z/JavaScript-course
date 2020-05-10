function maxNumber(input) {
    let tmp = [];
    let max = Number.MIN_VALUE;
    for (let i = 0; i < input.length; i++) {
        max = 0;
        if (input[i] > input[i + 1]) {
            for (let j = i; j < input.length; j++) {
                if (input[j] > max) {
                    max = input[j];
                }
            }
            if (input[i] === max) {
                tmp.push(input[i]);
            }
        }
    }
    tmp.push(input[input.length - 1]);
    console.log(tmp.join(' '));
}

maxNumber([1, 4, 3, 2]);
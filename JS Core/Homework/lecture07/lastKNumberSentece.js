function lastKNumberSentence(a, b) {
    let output = [1];
    let sum = 0;

    for (let i = 0; i < a - 1; i++) {
        sum = 0;
        for (let j = 0; j <= b; j++) {
            let c = output.length;
            if (output[c - j]) {
                sum += +output[c - j];
            }
        }
        output[i + 1] = sum;
    }
    console.log(output);
}

lastKNumberSentence(6, 3);
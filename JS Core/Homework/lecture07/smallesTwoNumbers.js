function smallesTwoNumbers(input) {
    let tmp = Number.MIN_VALUE;

    for (let i = 0; i < input.length; i++) {

        if (!Array.isArray(input[i])) {
            if (tmp < Number(input[i])) {
                tmp = Number(input[i]);
            }
        } else {
            input[i].sort((a, b) => {
                return b - a;
            });
            if (tmp < input[i][0]) {
                tmp = input[i][0];
            }
        }
    }
    console.log(tmp);
}

smallesTwoNumbers([[20, 50, '799', 10], [8, 33, 345], '600']);
function addOrSubstract(input) {
    const bk = input.slice(0);
    for (let i = 0; i < bk.length; i++) {
        if (bk[i] % 2 !== 0) {
            bk[i] -= i;
        } else {
            bk[i] += i;
        }
    }
    const sumLength = (string_array_digit) => {
        let sum = 0;
        const input = string_array_digit;

        const stringOrArrayOrDigit = (input) => {
            if (Array.isArray(input)) {
                return 'array';
            } else {
                return typeof input;
            }
        };
        const type = stringOrArrayOrDigit(input);

        switch (type) {
            case 'string': {
                input.split('').map(e => {
                    sum += +e;
                });
                break;
            }
            case 'array': {
                input.map(e => {
                    sum += +e;
                });
                break;
            }
            case 'number': {
                (input).toString().split('').map(e => {
                    sum += +e;
                });
                break;
            }
        }
        return sum;
    };

    console.log(bk);
    console.log(sumLength(input));
    console.log(sumLength(bk));
}

addOrSubstract([5, 15, 23, 56, 35]);
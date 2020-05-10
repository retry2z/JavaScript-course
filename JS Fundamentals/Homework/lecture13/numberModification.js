function numberModification(input) {
    let modifiedNumber = input.toString();
    let lengthNumber = modifiedNumber.length;
    let avgNumber = 0;
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

    avgNumber = Number(sumLength(modifiedNumber) / lengthNumber);
    while (avgNumber < 5) {
        modifiedNumber += '9';
        lengthNumber = modifiedNumber.length;
        avgNumber = Number(sumLength(modifiedNumber) / lengthNumber);
    }
    //console.log(avgNumber);
    console.log(modifiedNumber);
}

numberModification(101);
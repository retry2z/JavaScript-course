const calc = function (a, b, callback) {
    const result = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }
    return result[callback](+a, +b);
}

const calculate = (input) => {
    input = ["1", "+", "2", "+", "2"];
    let initial = input.shift();
    input.forEach((term, index) => {
        console.log(input[index + 1]);
        if (input[index + 1]) {
            initial = calc(initial, input[index + 1], term);
        }

    });
    return initial;
}

console.log(calculate());



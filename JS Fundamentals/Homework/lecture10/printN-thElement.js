function printNthElement(input) {
    const n = Number(input.pop());
    let output = '';

    for (let i = 0; i < input.length; i+=n) {
        output += input[i] + ' ';
    }
    console.log(output);
}

printNthElement(['5', '20', '31', '4', '20', '2']);
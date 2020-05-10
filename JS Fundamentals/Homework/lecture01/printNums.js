function printNums(input) {
    let output = '';
    for (let i = 1; i <= input; i++) {
        output = '';
        for (let j = 0; j < i; j++) {
            output += i + " ";
        }
        console.log(output);
    }
}

printNums(5);
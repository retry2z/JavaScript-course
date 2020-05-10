function division(input) {
    let output = 'The number is divisible by ';
    if (input % 10 === 0) {
        output += '10';
    } else if (input % 7 === 0) {
        output += '7';
    } else if (input % 6 === 0) {
        output += '6';
    } else if (input % 3 === 0) {
        output += '3';
    } else if (input % 2 === 0) {
        output += '2';
    } else {
        output = 'Not divisible';
    }
    console.log(output);
}

division(1643);
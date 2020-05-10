function negativePosition(input) {
    let a = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            a.unshift(input[i]);
        } else {
            a.push(input[i]);
        }
    }
    console.log(a);
}

negativePosition([7, -2, 8, 9]);
function sorting(input) {
    let minElement = input.slice().sort((a, b) => a - b);
    let maxElement = input.slice().sort((a, b) => b - a);
    const output = [];

    input.forEach((x, index) => {
        if (index % 2 !== 0) {
            output.push(minElement.shift());
        } else {
            output.push(maxElement.shift());
        }
    });

    console.log(output.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
function replaceRepeatingChars(input) {
    // Focus on solving the problem.
    let output = '';

    for (let i = 0; i < input.length; i++) {
        let lastStrChar = output.slice(-1);
        const currentChart = input[i];

        if (lastStrChar !== currentChart) {
            output += currentChart;
        }
    }
    console.log(output);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
function evenPositiveElement(input) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            output += `${input[i].trim()} `;
        }
    }
    console.log(output);
}

evenPositiveElement(['20', '30', '40']);
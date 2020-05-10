function smallestTwoNumbers2(input) {
    const inputSorted = input.sort((a, b) => {
        return a - b;
    });

    console.log(inputSorted.slice(0, 2).join(' '));
}

smallestTwoNumbers2([30, 15, 50, 5]);
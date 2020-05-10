function oddAndEvenSum(input) {
    const arrayFromNumbers = input.toString().split('');
    let oddSum = 0;
    let evenSum = 0;

    arrayFromNumbers.forEach(digit => {
        const currentNumber = Number(digit);

        if (currentNumber % 2 !== 0) {
            oddSum += currentNumber;
        } else {
            evenSum += currentNumber;
        }
    });

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
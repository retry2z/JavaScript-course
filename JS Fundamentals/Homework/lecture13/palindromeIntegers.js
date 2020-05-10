function palindromeIntegers(input) {

    input.forEach(currentNumber => {
        const reversedNumber = Number(currentNumber
            .toString()
            .split('')
            .reverse()
            .join(''));
        console.log(reversedNumber === currentNumber);
    });
}

palindromeIntegers([123,323,421,121]);
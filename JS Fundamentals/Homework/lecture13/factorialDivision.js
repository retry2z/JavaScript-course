function factorialDivision(numberOne, numberTwo) {

    const getFactorial = (num) => {
        let sum = num;
        for (let i = 0; i < num - 1; i++) {
            sum = sum * (num - i - 1);
        }
        return sum;
    };
    const num1Factorial = getFactorial(numberOne);
    const num2Factorial = getFactorial(numberTwo);

    console.log((num1Factorial / num2Factorial).toFixed(2));
}

factorialDivision(5, 2);
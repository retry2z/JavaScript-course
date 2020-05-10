function solve(input) {
    const [days, plunderPerDay, expectedResult] = input.map(Number);
    let result = 0;

    for (let i = 1; i <= days; i++) {
        result += plunderPerDay;
        if (i % 3 === 0) {
            result += plunderPerDay * 0.5;
        }
        if (i % 5 === 0) {
            result -= result * 0.3;
        }
    }

    if (result >= expectedResult) {
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
    } else {
        const percent = (result / expectedResult) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}

solve(['10',
    '20',
    '380']);
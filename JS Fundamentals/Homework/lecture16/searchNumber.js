function searchNumber(input, numbers) {
    let count = 0;
    input = input.splice(0, numbers[0]);
    input.splice(0, numbers[1]);


    for (let el of input) {
        if (el === numbers[2]) {
            count++;
        }
    }
    console.log(`Number ${numbers[2]} occurs ${count} times.`);
}

searchNumber([5, 2, 3, 3, 1, 6],
    [5, 2, 3]
);
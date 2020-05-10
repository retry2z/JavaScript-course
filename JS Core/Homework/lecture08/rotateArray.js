function rotateArray(input) {
    let rotate = Number(input.pop());
    for (let i = 0; i < rotate % input.length; i++) {
        input.unshift(input[input.length - 1]);
        input.pop();
    }
    console.log(input.join(" "));
}

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);
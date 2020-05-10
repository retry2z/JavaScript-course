function arrayRotation(input, n) {
    let tmp = 0;
    for (let i = 0; i < n; i++) {
        tmp = input.shift();
        input.push(tmp);

    }
    console.log(input.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
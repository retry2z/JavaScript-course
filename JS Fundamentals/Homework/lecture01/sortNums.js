function sortNums(a, b, c) {
    let sorted = [a, b, c];
    sorted = sorted.sort((x, z) => {
        return z - x
    });
    console.log(sorted.join('\n'));
}

sortNums(3, 2, 5);
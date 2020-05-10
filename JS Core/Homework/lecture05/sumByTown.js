function sumByTown(input) {
    let obj = {};

    for (let i = 0; i < input.length - 1; i += 2) {
        if (!Number(obj[input[i]])) {
            obj[input[i]] = Number(input[i + 1]);
        }
        else {
            obj[input[i]] = Number(input[i + 1]) + obj[input[i]];
        }
    }
    console.log(JSON.stringify(obj));
}

sumByTown(["Sofia",
    "20",
    "Varna",
    "3",
    "Sofia",
    "5",
    "Varna",
    "4",]
);
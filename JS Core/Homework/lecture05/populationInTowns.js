function populationInTowns(input) {
    let tmp = [];
    let result = {};
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        tmp[i] = input[i]
            .replace(/\s+/g, ' ')
            .trim()
            .split("<->");

        if (result.hasOwnProperty(tmp[i][0])) {
            result[tmp[i][0]] += +tmp[i][1];
        } else {
            result[tmp[i][0]] = +tmp[i][1];
            count++;
        }
    }
    //console.log(tmp);

    //Object.keys(result).length // Връща масив от ключовете в обекта
    //.length; // Дължината на масива от ключовете, но е по добре да е с брояч.
    for (let i = 0; i < count; i++) {
        console.log(`${tmp[i][0]}: ${result[tmp[i][0]]}`);
    }
}

populationInTowns([
        "Istanbul <-> 100000",
        "Honk Kong <-> 2100004",
        "Jerusalem <-> 2352344",
        "Mexico City <-> 23401925",
        "Istanbul <-> 1000",
    ]
);
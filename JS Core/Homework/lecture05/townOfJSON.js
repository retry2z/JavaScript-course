function townOfJSON(input) {
    let tmp = [];
    let obj = [];

    for (let i = 0; i < input.length; i++) {
        //split по символ.
        //join за да върне масива в стринг.
        //split по разстоянит м/у думите.
        tmp[i] = input[i].split("|").join("").trim().split("  ");

        //replace | с интервал глогално
        //trim за да изрежем интервалите в началото и в края на стринга
        //сплитваме по разстояние м/у думите
        //tmp[i] = input[i].replace(/[ | ]/g, " ").trim().split("  ");

    }

    console.log(tmp);

    for (let i = 1; i < tmp.length; i++) {
        obj[i - 1] = {};
        for (let j = 0; j < tmp[i].length; j++) {
            if (!Number(tmp[i][j]) && Number(tmp[i][j]) !== 0) {
                obj[i - 1][tmp[0][j]] = tmp[i][j];
            } else {
                obj[i - 1][tmp[0][j]] = Number(tmp[i][j]);
            }
        }
    }

    let text = JSON.stringify(obj);
    console.log(text);
}

townOfJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
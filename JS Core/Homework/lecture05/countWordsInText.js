function countWordsInText(input) {

    //replace за да премахнем специалните симболи като допускаме само букви и цифри
    //replace за да премахнем големахнем големите интервали с интервал
    //trim за да изрежем интервалите в началото и в края на изречението
    //split по интервал
    let tmp = input[0].replace(/[^a-zA-Z0-9]/g, " ")
        .replace(/\s+/g, ' ')
        .trim()
        .split(" ");

    //console.log(tmp);
    let obj = {};

    for (let i = 0; i < tmp.length; i++) {
        //console.log(tmp[i][1]);
        if (obj[tmp[i]] !== undefined && tmp[i][0] !== undefined) {
            obj[tmp[i]]++;
        } else {
            obj[tmp[i]] = 1;
        }
    }
    console.log(JSON.stringify(obj));
}

countWordsInText(['Far too slow, you\'re far too slow.']);
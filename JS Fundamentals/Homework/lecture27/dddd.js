function sequences(input) {
    const result = [];

    for (let currentSequences of input) {
        currentSequences = JSON.parse(currentSequences).sort((a, b) => b - a);
        result.push(currentSequences);


    }
    let output = result.map(x => x.join(' '));

    output = output
        .filter(function (elem, pos) {
            return output.indexOf(elem) === pos;
        })
        .sort((a, b) => a.length - b.length)
        .map(x => x.split(' '));


    output.forEach(x =>
        console.log(x
            .map(x => {
                return Number(x.trim())
            })
        ));
        
}

sequences([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
])
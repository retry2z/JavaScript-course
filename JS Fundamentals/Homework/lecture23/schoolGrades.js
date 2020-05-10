function schoolGrades(input) {
    const map = new Map();

    input.forEach(x => {
        const token = x.split(' ');
        const key = token.shift();
        const value = token.map(Number);

        if (map.has(key)) {
            const newValue = map.get(key).concat(value);
            map.set(key, newValue);
        } else {
            map.set(key, value);
        }
    });

    const average = (arr) => {
        let sum = 0;
        arr.forEach(x => sum += x);
        return sum / arr.length;
    };

    let sorted = Array.from(map.entries())
        .sort((a, b) => {
           return average(a[1]) - average(b[1])
        });

    sorted.forEach(x => {
        console.log(`${x[0]}: ${x[1].join(', ')}`);
    });
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
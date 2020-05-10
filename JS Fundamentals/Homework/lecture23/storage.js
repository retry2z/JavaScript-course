function storage(input) {
    const map = new Map();

    input.forEach(x => {
        const [name, value] = x.split(' ');
        if (map.has(name)) {
            const newValue = Number(map.get(name)) + Number(value);
            map.set(name, newValue);
        } else {
            map.set(name, Number(value));
        }
    });


    Array.from(map.entries()).forEach(x => {
        console.log(`${x[0]} -> ${x[1]}`);
    });

}

storage(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
function phoneBook(input) {
    const map = new Map();

    input.forEach(x => {
        const [name, phone] = x.split(' ');
        map.set(name,phone);
    });


    Array.from(map.entries()).forEach(x => {
        console.log(`${x[0]} -> ${x[1]}`);
    });
}

phoneBook([
        'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344'
    ]
);
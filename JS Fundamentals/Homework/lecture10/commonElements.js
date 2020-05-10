function commonElements(a1, a2) {
    a1.forEach(e => {
        a2.forEach(x => {
            if (e === x) {
                console.log(e);
            }
        });
    });
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
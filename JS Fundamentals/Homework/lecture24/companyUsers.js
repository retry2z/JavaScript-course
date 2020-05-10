function companyUsers(input) {
    // Focus on solving the problem.
    const data = {};
    input.forEach(line => {
        const [company, id] = line.split(' -> ');

        if (!data[company]) {
            data[company] = [];
            data[company].push(id);
        } else if (!data[company].includes(id)) {
            data[company].push(id);
        }
    });

    Object.keys(data)
        .sort((a, b) => a.localeCompare(b))
        .forEach(key => {
            console.log(key);
            data[key].forEach(x => console.log(`-- ${x}`));
        });
}

companyUsers([
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
);
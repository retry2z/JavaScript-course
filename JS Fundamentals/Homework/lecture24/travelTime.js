function travelTime(input) {
    // Focus on solving the problem.
    let destination = {};

    input.forEach(x => {
        const token = x.split(' > ');
        const country = token[0];
        const town = token[1];
        const cost = Number(token[2]);

        if (!destination[country]) {
            destination[country] = new Map();
            destination[country].set(town, cost);
        } else if (destination[country].has(town)) {
            const newValue = destination[country].get(town);
            destination[country].set(town, Math.min(cost, newValue));
        } else {
            destination[country].set(town, cost);
        }
    });

    const sortedAlphabet = Array.from(Object.keys(destination)).sort((a,b) => a.localeCompare(b));
    sortedAlphabet.forEach(country => {
        let output = `${country} -> `;

        Array.from(destination[country].keys())
            .sort((a,b) => destination[country].get(a) - destination[country].get(b))
            .forEach(town => output+= `${town} -> ${destination[country].get(town)} `);

        console.log(output);
    });
}

travelTime([
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);
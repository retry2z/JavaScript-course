function oddOccurrences(input) {
    const map = new Map();

    input.split(' ')
        .map(x => {
            const lowWord = x.toLowerCase();

            if (map.has(lowWord)) {
                const newValue = map.get(lowWord) + 1;
                map.set(lowWord, newValue)
            } else {
                map.set(lowWord, 1);
            }
        });

    const output = Array.from(map.keys())
        .filter(x => map.get(x) % 2 !== 0).join(' ');

    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
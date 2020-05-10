function wordOccurrences(input) {
    const data = new Map();

    input.forEach(x => {
        if (data.has(x)) {
            const newValue = data.get(x) + 1;
            data.set(x,newValue);
        } else {
            data.set(x, 1);
        }
    });

    const sorted = Array.from(data.entries())
        .sort((a,b) => {
      return b[1] - a[1]
    });

    sorted.forEach(x => {
        console.log(`${x[0]} -> ${x[1]} times`)
    })
}

wordOccurrences(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
);
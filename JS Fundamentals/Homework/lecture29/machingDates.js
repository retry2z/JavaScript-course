function solve(input) {
    const text = input.pop();
    const regex = /\b(?<day>\d{2})(.|\/|-)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    while (result = regex.exec(text)) {
        const day = result.groups.day;
        const monnth = result.groups.month;
        const year = result.groups.year;

        console.log(`Day: ${day}, Month: ${monnth}, Year: ${year}`);
    }
}

solve([
    '13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'
])
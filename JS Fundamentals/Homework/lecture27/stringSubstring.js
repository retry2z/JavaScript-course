function stringSubstring(key, text) {
    // Focus on solving the problem.
    text
        .toLowerCase()
        .split(' ')
        .includes(key)
        ? console.log(key) : console.log(`${key} not found!`);
}

stringSubstring('javascript',
    'javascript the best programming language'
);
function revealWords(key, text) {
    // Focus on solving the problem.
    const keyWords = key.split(', ');

    keyWords.forEach(x => {
        const encrypted = '*'.repeat(x.length);
        text = text.replace(encrypted, x);
    });

    console.log(text);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);
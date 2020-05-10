function modernTimes(input) {
    // Focus on solving the problem.
    const regex = /\d+/g;

    const words = input
        .split(' ')
        .filter(x => x.startsWith('#') && x.length > 1 && !x.match(regex))
        .map(x => x.slice(1));


    console.log(words.join('\n'));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
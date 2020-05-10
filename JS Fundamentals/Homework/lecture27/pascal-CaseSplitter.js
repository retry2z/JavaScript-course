function pascalCaseSplitter(input) {
    // Focus on solving the problem.

    const result = input
        .split('')
        .map(x => {
            if (x.charCodeAt(0) >= 65 && 90 >= x.charCodeAt(0)) {
                return (' ' + x);
            } else {
                return x;
            }
        })
        .join('')
        .trim()
        .split(' ')
        .join(', ');


    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
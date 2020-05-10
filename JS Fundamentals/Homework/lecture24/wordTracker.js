function wordTracker(input) {
    // Focus on solving the problem.
    const track = {};
    input
        .shift()
        .split(' ')
        .forEach(x => track[x] = 0);

    input.forEach(x => {
        if (track.hasOwnProperty(x)) {
            track[x]++;
        }
    });

    Object.keys(track)
        .sort((a , b) =>    track[b] - track[a])
        .forEach(element =>  console.log(`${element} - ${track[element]}`));

 }

wordTracker([
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);
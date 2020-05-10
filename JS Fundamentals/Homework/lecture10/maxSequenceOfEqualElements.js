function maxSequenceOfEqualElements(input) {
    let sentences = [];
    let currentsetence = '';

    for (let i = 0; i < input.length; i++) {

        if (input[i] === input[i + 1]) {
            currentsetence += input[i] + '';
        } else {
            if (input[i - 1]) {
                currentsetence += input[i - 1] + '';
                sentences.push(currentsetence);
            }
            currentsetence = '';
        }
    }
    currentsetence = sentences[0];
    for (let i = 0; i < sentences.length; i++) {
        if (currentsetence.length < sentences[i].length) {
            currentsetence = sentences[i];
        }
    }
    console.log(currentsetence.split('').join(' '));
}

function maxSequence(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;


    for (let i = 0; i < arr.length; i++) {   
        let currentSequence = input[i] + '';


        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];

            if (nextEl === currentEl) {
                currentSequence += nextEl + '';
            } else {
                break;
            }

        }

        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftmostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}


maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
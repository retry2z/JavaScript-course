function cutReverse(input) {
    // Focus on solving the problem.
    const halfIndex = input.length / 2;

    const result = input
        .substr(0, halfIndex)
        .split('')
        .reverse()
        .join('');
        

    const result2 = input
        .substr(halfIndex, input.length)
        .split('')
        .reverse()
        .join('');


    console.log(result);
    console.log(result2);
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');

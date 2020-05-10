function firstAndLastK(input) {

    console.log(input.slice(1, input[0]+1));
    console.log(input.slice(input[0]*-1));

}

firstAndLastK([3, 6, 7, 8, 9]);
function solve(input, cmd) {
    //Focus on solving the problem.
    switch (cmd) {
        case 'asc': {
            return input.sort((a, b) => a - b);
        }
        case 'desc': {
            return input.sort((a, b) => b - a);
        }
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
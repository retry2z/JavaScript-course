function solve(initial) {
    let value = initial;

    return function (number) {
        return value + number;
    }
}

const add5 = solve(5);
console.log(add5(0));
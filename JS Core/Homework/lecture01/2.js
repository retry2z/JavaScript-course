function solve(n1,n2,operater) {
    switch (operater) {
        case "+": {
            n1 += n2;
            break;
        }
        case "-": {
            n1 -= n2;
            break;
        }
        case "*": {
            n1 *= n2;
            break;
        }
        case "/": {
            n1 /= n2;
            break;
        }
        case "%": {
            n1 %= n2;
            break;
        }
        case "**": {
            n1 **= n2;
            break;
        }
    }
    console.log(n1)
}

solve(2,2,"**");
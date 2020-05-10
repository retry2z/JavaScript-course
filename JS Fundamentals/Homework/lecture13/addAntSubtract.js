function addAntSubtract(n1, n2, n3) {
    const add = (n1, n2) => n1 + n2;
    const subtract = (n1, n2) => n1 - n2;

    const result = subtract(add(n1,n2),n3);
    console.log(result);
}

addAntSubtract(23,
    6,
    10
);
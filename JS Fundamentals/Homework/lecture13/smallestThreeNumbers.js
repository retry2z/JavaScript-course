function smallestThreeNumbers(n1, n2, n3) {
    let arr = [n1, n2, n3];

    arr = arr.sort((a, b) => {
        return a - b;
    });

    console.log(arr[0]);

}

smallestThreeNumbers(2,
    5,
    3
);
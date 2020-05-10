function nonDecreasing(input) {
    let tmp = Number.MIN_VALUE;
    let result = input.filter((e)=>{
       if (e>tmp) {
           tmp = e;
           return e;
       }
    });
    console.log(result.join(' '));
}

nonDecreasing([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]

);
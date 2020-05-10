function condenseArray(input) {
    let tmp = [];
    func();

    function func() {
        for (let i = 0; i < input.length; i++) {
            if ((i + 1) < input.length) {
                tmp[i] = input[i] + input[i + 1];
            }
        }
        if (tmp.length > 0) {
            input = tmp;
            tmp = [];
        }
        //console.log(input);
    }

    while (input.length > 1) {
        func();
    }
    console.log(input[0]);
}

condenseArray([1]);
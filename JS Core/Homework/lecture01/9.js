function asd(elements) {
    blq(elements,0,(a,b) => a+b);
    blq(elements,0,(a,b) => a+1/b);
    blq(elements,'',(a,b) => a+b);

    function blq(arr, ini, func) {
        for (let i = 0; i < arr.length; i++) {
            ini = func(ini, arr[i]);
        }
        console.log(ini);
    }
}


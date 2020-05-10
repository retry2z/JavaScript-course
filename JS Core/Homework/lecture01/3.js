function test(n,m) {
    start = +n;
    end = +m;
    let value = 0;
    for (let i=start;i<=end;i++) {
      value += i;
    }
    console.log(value);
}

test(-8,20);
function largest(n1,n2,n3) {
    let max = 0;
    if (n1>n2 && n1>n3) { max=n1; }
    if (n2>n1 && n2>n3) { max=n2;  }
    if (n3>n1 && n3>n2) { max=n3;  }
    console.log(`The largest number is ${max}.`);
}
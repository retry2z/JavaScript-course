function abc(tmp) {
    let type = typeof(tmp);

    if (type==='number') {
        value = Math.pow(tmp,2) * Math.PI;
        console.log(value.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

abc([]);
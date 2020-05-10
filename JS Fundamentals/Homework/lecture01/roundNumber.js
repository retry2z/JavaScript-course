function roundNumber(num,fix) {
    if (fix > 15) {
        fix = 15;
    }
    let output = num.toFixed(fix);
    console.log(parseFloat(output));
}

roundNumber(3.1415926535897932384626433832795,2);
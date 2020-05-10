function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function dollarFormatter(formatter) {
    return function (value) {
        return formatter(',', '$', true, value);
    }
}
let dollarCurrency = dollarFormatter(currencyFormatter);



console.log(dollarCurrency(3000));
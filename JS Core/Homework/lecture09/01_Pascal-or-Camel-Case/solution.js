function solve() {
    let input = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');
    let output = '';

    let words = input.split(' ').filter(x => x !== '');
    if ((currentCase === 'Pascal Case') || (currentCase === 'Camel Case')) {
        output = words.map((e) => {
            return e[0].toLocaleUpperCase() + e.substr(1).toLocaleLowerCase();
        }).join('');
        if (currentCase === 'Camel Case') {
            output = output[0].toLocaleLowerCase() + output.substr(1);
        }
    } else {
        output = 'Error!';
    }
    result.textContent = output;
}
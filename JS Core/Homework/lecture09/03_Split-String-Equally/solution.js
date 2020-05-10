function solve() {
    let input = document.getElementById('text').value;
    let count = document.getElementById('number').value;
    let result = document.getElementById('result');
    let output = '';

    if (input.length % +count > 0) {
        input += input.substr(0, +count - input.length % +count)
    }

    for (let i = 0; i < input.length; i += +count) {
        output += input.substr(i, +count) + ' ';
    }
    result.innerHTML = output.trim();
    // console.log(input);
}
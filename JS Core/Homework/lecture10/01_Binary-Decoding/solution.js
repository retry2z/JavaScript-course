function solve() {
    //let input = '010011100110110111101100110011101000111010101101110011010010010000001110011011101000111010101100100011001010110111001110100010';
    let input = document.getElementById('input').value;
    let result = document.getElementsByTagName('p')[0];
    let output = '';

    const pattern = new RegExp('[1]', 'g');
    let value = input.match(pattern).length; // return array with pattern found items. // length of the array
    function sumLength(string) {
        let sum = 0;
        (string + '').split('').map(e => {
            sum += +e;
        });
        return sum;
    }

    while (value > 10) {
        value = sumLength(value);
    }

    input = input.substr(value, input.length - 2 * value);
    //console.log(input);
    for (let i = 0; i < input.length; i += 8) {
        output += String.fromCharCode(parseInt(input.substr(i, 8), 2));
    }
    result.innerHTML += output;
}
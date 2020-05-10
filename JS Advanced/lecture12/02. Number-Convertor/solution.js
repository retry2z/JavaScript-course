function solve() {
    const input = document.getElementById('input');
    const toConvert = document.getElementById('selectMenuTo');
    const bnt = document.getElementsByTagName('button')[0];
    const output = document.getElementById('result');

    const hexaOption = document.createElement('option');
    hexaOption.value = 'hexadecimal';
    hexaOption.textContent = 'Hexadecimal';
    toConvert.appendChild(hexaOption);

    const binaOption = document.createElement('option');
    binaOption.value = 'binary';
    binaOption.textContent = 'Binary';
    toConvert.appendChild(binaOption);

    const convert = (num, type) => {
        const options = {
            binary: (data) => Number(data).toString(2),
            hexadecimal: (data) => Number(data).toString(16).toLocaleUpperCase(),
        }

        return options[type](num);
    };

    bnt.addEventListener('click', () => {
        const value = input.value;
        const type = toConvert.value;
        const result = convert(value, type);

        output.value = result;
    });
}
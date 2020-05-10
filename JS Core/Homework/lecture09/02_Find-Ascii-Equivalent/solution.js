function solve() {
    let input = document.getElementById('text').value;
    let result = document.getElementById('result');
    let words = [];
    let numbers = '';
    let n = 0;

    input = input.split(' ');
    input.forEach((part) => {
        if (isNaN(1 + +part)) {
            words[n] = [];
            part.split('')
                .forEach(char => words[n].push(char.charCodeAt(0)));
            n++;
        } else {
            numbers += String.fromCharCode(part);
        }
    });

    words.forEach((e) => {
        let p = document.createElement('p');
        result.appendChild(p);
        result.lastElementChild.innerHTML = e.join(" ");
    });

    let p = document.createElement('p');
    result.appendChild(p);
    result.lastElementChild.innerHTML = numbers;

    console.log(words);
    console.log(numbers);
}
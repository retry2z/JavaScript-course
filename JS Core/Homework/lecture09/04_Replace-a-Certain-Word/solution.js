function solve() {
    //let word = 'JavaScript';
    //let input = ["I love pROgRaMminG", "proGramMing is fun", "ProgrAmmIng.", "JSProgramming", "!@#$proGRAMming!@#$"];
    let word = document.getElementById('word').value;
    let input = JSON.parse(document.getElementById('text').value);

    let wordToBeReplaced = input[0].split(' ')[2];
    let result = document.getElementById('result');

    let pattern = new RegExp(wordToBeReplaced, 'ig');
    input = input.map(((value) => {
        return value.replace(pattern, word)
    }));

    input.forEach((e) => {
        let p = document.createElement('p');
        result.appendChild(p);
        result.lastElementChild.innerHTML = e;
    });
}
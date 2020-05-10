function solve() {
    let input = JSON.parse(document.getElementById('arr').value);
    let result = document.getElementById('result');
    let data = {};

    const ex_name = (info) => {
        const pattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        const match = info.match(pattern);
        if (match) {
            return match[0];
        }
    };

    const ex_mail = (info) => {
        const pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        const match = info.match(pattern);
        if (match) {
            return match[0];
        }
    };

    const ex_phone = (info) => {
        const pattern = / \+359 \d \d{3} \d{3}|\+359-\d-\d{3}-\d{3}/;
        const match = info.match(pattern);
        if (match) {
            return match[0];
        }
    };

    input.forEach(x => {
        if (ex_name(x) && ex_phone(x) && ex_mail(x)) {
            result.appendChild(document.createElement('p'));
            result.lastElementChild.innerHTML = 'Name: ' + ex_name(x).trim();
            result.appendChild(document.createElement('p'));
            result.lastElementChild.innerHTML = 'Phone Number: ' + ex_phone(x).trim();
            result.appendChild(document.createElement('p'));
            result.lastElementChild.innerHTML = 'Email: ' + ex_mail(x).trim();
            result.appendChild(document.createElement('p'));
            result.lastElementChild.innerHTML = '- - -';
        } else {
            result.appendChild(document.createElement('p'));
            result.lastElementChild.innerHTML = 'Invalid data';
            result.appendChild(document.createElement('p'));
            result.lastElementChild.innerHTML = '- - -';
        }
    });

}
function solve() {
    let code = document.getElementById('string').value;
    //let code = '4ds';
    let input = document.getElementById('text').value;
    //let input = 'eaSt 19,432567noRt north east 53,123456north 43,3213454dsNot all those who wander are lost.4dsnorth 47,874532';
    let result = document.getElementById('result');

    let patternMessage = new RegExp(`${code}(.*)${code}`, 'g');
    let message = patternMessage.exec(input)[1];

    let east = '';
    let north = '';
    let location = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let matchLocation = location.exec(input);
    while (matchLocation !== null) {
        if (matchLocation[1].toLocaleUpperCase() === 'NORTH') {
            north = matchLocation;
        } else {
            east = matchLocation;
        }
        matchLocation = location.exec(input);
    }

    let p1 = document.createElement('p');
    p1.textContent = `${north[2]}.${north[3]} N`;

    let p2 = document.createElement('p');
    p2.textContent = `${east[2]}.${east[3]} E`;

    let p3 = document.createElement('p');
    p3.textContent = `Message: ${message}`;

    result.appendChild(p1);
    result.appendChild(p2);
    result.appendChild(p3);
}
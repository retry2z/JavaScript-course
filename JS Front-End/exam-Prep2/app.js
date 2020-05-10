const userInput = document.getElementById('username-input');
const userBtn = document.getElementById('username-btn');
const logBtn = document.getElementById('log');
const logsContainer = document.getElementById('logs');
const radios = document.querySelectorAll('[type|="radio"]');
const history = document.getElementById('history');

const data = {
    username: 'Anonymous',
    status: 'Success',
}

userBtn.addEventListener('click', x => {
    const bnt = x.currentTarget;
    const targetField = userInput.children[0];
    const username = targetField.value;

    if (username) {
        const p = document.createElement('p');
        p.textContent = username;
        p.setAttribute('class', 'font-weight-bold');
        userInput.appendChild(p);
        targetField.remove();
        bnt.value = 'Logout';
        data.username = username;
    } else {
        const input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('palceholder', 'Username...');
        userInput.appendChild(input);
        targetField.remove();
        bnt.value = 'Set Username';
        data.username = 'Anonymous';
    }
});

[...radios].forEach(element => {
    element.addEventListener('click', (x) => {
        const target = x.currentTarget;
        data.status = target.parentNode.textContent.trim();
        console.log(data.status);
    });
});

function createLog(status, message, user) {
    const log = document.createElement('div');
    log.setAttribute('class', `mb-2 container rounded font-weight-bold text-white p-3 bg-${status.toLowerCase()}`);

    const statusElement = document.createElement('h2');
    statusElement.setAttribute('class', 'border-right d-inline border-dark pr-5');
    statusElement.textContent = status + ': ' + message;
    log.appendChild(statusElement);

    const userElement = document.createElement('h2');
    userElement.setAttribute('class', 'border-right d-inline border-dark px-5 pl-3');
    userElement.textContent = user;
    log.appendChild(userElement);

    const archiveElement = document.createElement('h2');
    archiveElement.setAttribute('class', 'd-inline border-dark px-5 pl-3');
    archiveElement.textContent = 'Archive';
    log.appendChild(archiveElement);

    return log;
}

logBtn.addEventListener('click', () => {
    const message = document.getElementById('messageContainder').value;
    const user = data.username;
    const status = data.status;

    const newLOg = createLog(status, message, user);
    logsContainer.appendChild(newLOg);
});
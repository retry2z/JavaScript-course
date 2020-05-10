const personalInfo = document.querySelectorAll('#personal-info label > p');

function changeToParagraph(event) {
    if (event.keyCode === 13) {
        const target = event.currentTarget;
        const textContent = target.value;

        const p = document.createElement('p');
        p.setAttribute('class', 'text-dark');
        if (target.getAttribute('for')) {
            p.setAttribute('for', 'number-field');
        }

        p.addEventListener('click', changeToInput);
        p.textContent = textContent;
        target.parentNode.appendChild(p);
        target.remove();
    }
}

function changeToInput(event) {
    const target = event.currentTarget;
    const value = target.textContent;

    const input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    if (target.getAttribute('for')) {
        input.setAttribute('type', 'number');
        input.setAttribute('for', 'number-field');
    }

    input.addEventListener("keydown", changeToParagraph);
    input.value = value;
    target.parentNode.appendChild(input);
    target.remove();
};

[...personalInfo].forEach(element => {
    element.addEventListener('click', changeToInput);
});

const teamsPositions = {
    support: ['Tech Support', 'Medical Support', 'Assistant Support'],
    crm: ['Community Manager', 'Customer Care Manager', 'Lead Administrative Officer'],
    marketing: ['PR Manager', 'Social Media Manager', 'Marketing Specialist'],
    development: ['Junior Developer', 'Regular Developer', 'Senior Developer'],
    other: ['Team Lead', 'Regular Employee', 'Intern'],
};
const teanPosition = document.querySelectorAll('[name|="team-position"]');
const position = document.querySelectorAll('[for|="position"]');

[...teanPosition].forEach(item => {
    item.addEventListener('click', loadPosition)
});

function loadPosition(event) {
    const target = event.currentTarget.getAttribute('for');
    teamsPositions[target].forEach((item, index) => {
        position[index].textContent = item;
    });
}
// const constants = {
//     getUrl: `https://phonebook-nakov.firebaseio.com/phonebook.json`,
//     deleteUrl: `https://phonebook-nakov.firebaseio.com/phonebook/`,
// };

const url = 'https://phonebook-nakov.firebaseio.com/';
const dbName = 'phonebook/';
const type = '.json';


const getPersonInfo = () => {
    const personInfo = document.getElementById('person').value;
    const phoneInfo = document.getElementById('phone').value;
    return {
        person: personInfo,
        phone: phoneInfo,
    }
}
const clearPersonInfo = () => {
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('contacts').remove();
}

const createBtn = document.getElementById('create');
createBtn.addEventListener('click', () => {
    const newContact = getPersonInfo();
    clearPersonInfo();
    postRequest(url + dbName + type, newContact);
});

const contactDelete = document.getElementById('contacts-containder');
contactDelete.addEventListener('click', x => {
    const buttonTarget = x.target.querySelector('button');
    if (buttonTarget) {
        return
    }
    const id = x.target.getAttribute('id');
    const deleteUrl = url + dbName + id + type;
    console.log(deleteUrl);
    deleteRequest(deleteUrl);
    clearPersonInfo();
});


const loadBtn = document.getElementById('load');
loadBtn.addEventListener('click', () => {
    const contacsContainder = document.getElementById('contacts-containder');
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'contacts');
    contacsContainder.appendChild(ul);
    getRequest(url + dbName + type);
});

const creatLi = (txt, id) => {
    const li = document.createElement('li');
    li.textContent = txt;
    li.appendChild(createDeleteBtn(id));
    return li;
};


const createDeleteBtn = (id) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.textContent = 'Delete';
    return btn;
};

const handleSuccess = (data) => {
    const ulBody = document.getElementById('contacts');
    Object.entries(data)
        .forEach((x) => {
            const [personID, data] = x;
            const txt = `${data.person} : ${data.phone}`;
            ulBody.appendChild(creatLi(txt, personID));
            console.log(personID);
            console.log(data);
        });
}

const handleError = (data) => {
    console.log(data);
}

const createRequest = (type, data) => {
    console.log(data);
    const request = {};
    request.method = type;
    request.headers = { 'Content-type': 'application/json' };

    if (data) {
        request.body = JSON.stringify(data);
    }
    return request;
}


function getRequest(url) {
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then(handleSuccess)
        .catch(handleError);
}

function postRequest(url, data) {
    fetch(url, createRequest('post', data));
}

function deleteRequest(url) {
    fetch((url), createRequest('delete'));
}
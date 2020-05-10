const btn = document.getElementById('load');
const output = document.getElementById('res');
const httpRequest = new XMLHttpRequest();


btn.addEventListener('click', init);

function init() {
    const url = 'https://api.github.com/users/testnakov/repos';
    //httpRequest.addEventListener('readystatechange', loadData);
    httpRequest.onload = loadData;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function loadData() {
    console.log(httpRequest);
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        output.textContent = httpRequest.responseText;
    }
}

// let button = document.querySelector("#load");
// button.addEventListener('click', function loadRepos() {
//     let url = 'https://api.github.com/users/testnakov/repos';
//     const httpRequest = new XMLHttpRequest();
//     httpRequest.addEventListener('readystatechange', function () {
//         if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//             document.getElementById("res").textContent = httpRequest.responseText;
//         }
//     });
//     httpRequest.open("GET", url);
//     httpRequest.send();
// });
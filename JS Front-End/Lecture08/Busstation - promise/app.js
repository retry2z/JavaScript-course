function getInfo() {
    const stopid = document.getElementById('stopId').value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopid}.json`;

    fetch(url)
        .then((response) => response.json())
        .then(handleSuccess)
        .catch(handleError)
}

const creatLi = (element, txt) => {
    const li = document.createElement(element);
    li.textContent = txt;
    return li;
};

function handleSuccess(data) {
    const buses = document.getElementById('buses');
    const path = document.getElementById('stopName');
    const busesRoute = data.name;
    const busesInfo = data.buses;

    path.textContent = busesRoute;
    Object.entries(busesInfo)
        .forEach(([busNumber, busTime]) => {
            const txt = `Bus ${busNumber} arrives in ${busTime} minutes`;
            const newBus = creatLi('li', txt);
            buses.appendChild(newBus);
        });
}

function handleError() {
    console.log(`Error`);
}
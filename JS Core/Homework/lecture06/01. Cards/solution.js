function solve() {
    let firstResult = false;
    let secondResult = false;
    let leftPlace = '';
    let rightPlace = '';

    let imgElements = document.getElementsByTagName("img");
    for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].addEventListener('click', (e) => {
            let currentTarget = e.currentTarget;
            let resultElement = document.getElementsByTagName("span");

            if (currentTarget.parentElement.id === "player1Div") {
                compareResult(currentTarget, 'left');
                resultElement[0].innerHTML = currentTarget.name;
            } else if (currentTarget.parentElement.id === "player2Div") {
                compareResult(currentTarget, 'right');
                resultElement[2].innerHTML = currentTarget.name;
            }
            currentTarget.src = "images/whiteCard.jpg";
        });
    }

    function compareResult(input, place) {
        let resultElement = document.getElementsByTagName("span");
        let historyElement = document.getElementById('history');

        if (place === 'left') {
            leftPlace = input.name;
        } else {
            rightPlace = input.name;
        }

        if (!firstResult) {
            firstResult = input;

        } else {
            secondResult = input;
        }

        if (firstResult && secondResult) {
            if (+firstResult.name > +secondResult.name) {
                firstResult.style.borderColor = "Green";
                firstResult.style.borderStyle = "solid";
                firstResult.style.borderWidth = "2px";

                secondResult.style.borderColor = "Red";
                secondResult.style.borderStyle = "solid";
                secondResult.style.borderWidth = "2px";
            } else {
                secondResult.style.borderColor = "Green";
                secondResult.style.borderStyle = "solid";
                secondResult.style.borderWidth = "2px";

                firstResult.style.borderColor = "Red";
                firstResult.style.borderStyle = "solid";
                firstResult.style.borderWidth = "2px";
            }
            firstResult = false;
            secondResult = false;
            historyElement.innerHTML += (`[${leftPlace} vs ${rightPlace}] `);
        } else {
            //resultElement[2].innerHTML = " ";
        }
    }

}
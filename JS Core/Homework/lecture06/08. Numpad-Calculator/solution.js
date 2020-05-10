function solve() {
    let functionKeys = document.querySelectorAll('.keys button');
    let leftSide = '';
    let rightSide = '';
    let middleSide = '';
    let result = 0;
    let funcKey = false;
    let diplayElement = document.getElementById('expressionOutput');
    let resultElement = document.getElementById("resultOutput");
    let clearElemtnt = document.getElementsByClassName('clear')[0];

    for (let i = 0; i < functionKeys.length; i++) {
        functionKeys[i].addEventListener('click', function () {
            if ("+*/-".includes(functionKeys[i].value)) {
                funcKey = true;
                middleSide = functionKeys[i].value;
                diplayElement.textContent += ` ${functionKeys[i].value} `;
            } else {
                if (!funcKey) {
                    leftSide += functionKeys[i].value;
                    diplayElement.textContent += functionKeys[i].value;
                } else if (!"=".includes(functionKeys[i].value)) {
                    rightSide += functionKeys[i].value;
                    diplayElement.textContent += functionKeys[i].value;
                } else {
                    switch (middleSide) {
                        case "+":
                            result = Number(leftSide) + Number(rightSide);
                            break;
                        case "-":
                            result = Number(leftSide) - Number(rightSide);
                            break;
                        case "*":
                            result = Number(leftSide) * Number(rightSide);
                            break;
                        case "/":
                            result = Number(leftSide) / Number(rightSide);
                            break;
                    }
                    console.log(leftSide);
                    console.log(rightSide);
                    console.log(middleSide);
                    console.log(result);
                    resultElement.textContent = result;
                }
            }
        });
    }
    clearElemtnt.addEventListener('click',function () {
        diplayElement.textContent = '';
        resultElement.textContent = '';
    });
}
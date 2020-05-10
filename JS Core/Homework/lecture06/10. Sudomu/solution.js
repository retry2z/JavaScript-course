function solve() {
    let tableBody = document.getElementsByTagName('tbody')[0];
    let buttonsElement = document.getElementsByTagName('button');
    let rowsElements = document.getElementsByTagName('tr');
    let tableElement = document.getElementsByTagName('table')[0];
    let resultElement = document.getElementById('check').children[0];
    let sudomuElements = {};
    let tmp = [];

    buttonsElement[0].addEventListener('click', function () {
        sudomuElements['Row'] = [];
        sudomuElements['Coll'] = [];
        for (let i = 2; i < rowsElements.length; i++) {
            tmp[i - 2] = [];
            let cellsElements = rowsElements[i].cells;
            for (let j = 0; j < cellsElements.length; j++) {
                let currentValue = cellsElements[j].children[0].value;
                if (sudomuElements.Row[i - 2]) {
                    sudomuElements.Row[i - 2] += currentValue;
                } else {
                    sudomuElements.Row[i - 2] = currentValue;
                }
                if (sudomuElements.Coll[j]) {
                    sudomuElements.Coll[j] += currentValue;
                } else {
                    sudomuElements.Coll[j] = currentValue;
                }
                tmp[i - 2][j] = currentValue;
            }
        }
        console.log(tmp);

        for (let k = 0; k < tmp.length; k++) {
            for (let h = 0; h < tmp[k].length; h++) {
                let currentValue = tmp[k][h];
                if (checkSudomu(currentValue)) {
                    tableElement.style.borderColor = 'red';
                    tableElement.style.borderStyle = 'solid';
                    tableElement.style.borderWidth = '2px';
                    resultElement.textContent = 'NOP! You are not done yet...';
                    return;
                } else {
                    tableElement.style.borderColor = 'green';
                    tableElement.style.borderStyle = 'solid';
                    tableElement.style.borderWidth = '2px';
                    resultElement.textContent = 'You solve it! Congratulations!';
                }
            }
        }

        function checkSudomu(input) {
            for (let z = 0; z < tmp.length; z++) {
                console.log(`Current Number: ${input}\n`);
                console.log(`${sudomuElements.Row[z]} \ ${sudomuElements.Coll[z]}\n`);
                console.log(`${sudomuElements.Row[z].split(`${input}`).length - 1} \ ${sudomuElements.Coll[z].split(`${input}`).length - 1}\n`);
                console.log(' ');
                if ((sudomuElements.Row[z].split(`${input}`).length - 1 >= 2) || (sudomuElements.Coll[z].split(`${input}`).length - 1 >= 2)) {
                    return true;
                }
            }
        }
    });

    buttonsElement[1].addEventListener('click', function () {
        sudomuElements['Row'] = [];
        sudomuElements['Coll'] = [];
        let currentValue = '';
        for (let i = 2; i < rowsElements.length; i++) {
            let cellsElements = rowsElements[i].cells;
            for (let j = 0; j < cellsElements.length; j++) {
                cellsElements[j].children[0].value = null;
                tableElement.removeAttribute("style");
                resultElement.textContent = '';
            }
        }
    });

}
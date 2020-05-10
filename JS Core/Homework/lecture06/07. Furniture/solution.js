function solve() {
    let buttonsElements = document.getElementsByTagName("button");
    let output = [];

    buttonsElements[0].addEventListener('click', function () {
        let tableElement = document.getElementsByTagName("tbody")[0];
        let inputElement = document.getElementsByTagName("textarea")[0];


        let inputData = JSON.parse(inputElement.value);

        for (let i of inputData) {
            let newRowElement = tableElement.insertRow();
            let newCellElement = newRowElement;

            let img = document.createElement('img');
            img.setAttribute('src', `${i.img}`);
            newCellElement.insertCell(0).appendChild(img);

            let nameElement = document.createElement('p');
            nameElement.textContent = i.name;
            newCellElement.insertCell(1).appendChild(nameElement);

            let priceElement = document.createElement('p');
            priceElement.textContent = i.price;
            newCellElement.insertCell(2).appendChild(priceElement);

            let decFactorElement = document.createElement('p');
            decFactorElement.textContent = i.decFactor;
            newCellElement.insertCell(3).appendChild(decFactorElement);

            let inputElement = document.createElement('input');
            inputElement.setAttribute("type", "checkbox");
            newCellElement.insertCell(4).appendChild(inputElement);
        }
    });

    let checkBoxesElement = document.getElementsByTagName("input");
    checkBoxesElement[0].disabled = false;

    buttonsElements[1].addEventListener('click', function () {
        let c = 0;
        output.name = '';
        output.price = 0;
        output.dec = 0;

        for (i of checkBoxesElement) {
            if (i.checked) {
                let data = i.parentElement.parentElement;

                output.name += `${data.cells[1].children[0].textContent}, `;
                output.price += Number(data.cells[2].children[0].textContent);
                output.dec += Number(data.cells[3].children[0].textContent);
                c++;
            }
        }

        let outputElement = document.getElementsByTagName("textarea")[1];
        outputElement.value = `Bought furniture: ${(output.name).slice(0, -2)}\n`;
        outputElement.value += `Total price: ${output.price.toFixed(2)}\n`;
        outputElement.value += `Average decoration factor: ${output.dec / c}`;

    });

}

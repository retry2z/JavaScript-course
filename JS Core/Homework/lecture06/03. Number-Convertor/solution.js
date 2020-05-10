function solve() {
    let selectTo = document.getElementById("selectMenuTo");
    let creatNode = document.createElement("option");

    selectTo.appendChild(creatNode);
    selectTo[0].value = "binary";
    selectTo[0].innerHTML = "Binary";
    selectTo[1].value = "hexadecimal";
    selectTo[1].innerHTML = "Hexadecimal";

    let doButton = document.getElementsByTagName("button")[0];
    doButton.addEventListener('click', (ev) => {
        let type = selectTo.value;
        let valueToConvert = document.getElementById("input").value;
        let resultElement = document.getElementById("result");
        let result = 0;

        switch (type) {
            case 'binary': {
                result = ((Number(valueToConvert)) >>> 0).toString(2);
                break;
            }
            case 'hexadecimal': {
                result = ((Number(valueToConvert)) >>> 0).toString(16);
                break;
            }
        }
        resultElement.value = `${result}`;
    });

}
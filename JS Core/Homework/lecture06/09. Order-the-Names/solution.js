function solve() {
    let bodyList = document.getElementsByTagName('ol')[0].children;
    let buttonElement = document.getElementsByTagName('button')[0];
    let inputElement = document.getElementsByTagName('input');

    buttonElement.addEventListener('click',function () {
        let input = inputElement[0].value.charAt(0).toUpperCase() + inputElement[0].value.slice(1).toLowerCase();
        let indexRow = input.charCodeAt(0)-65;
        if (!bodyList[indexRow].textContent) {
            bodyList[indexRow].textContent=input;
        } else {
            bodyList[indexRow].textContent+=`, ${input}`;
        }

    });
}

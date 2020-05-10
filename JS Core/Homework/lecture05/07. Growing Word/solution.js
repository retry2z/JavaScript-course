function growingWord() {
    let textElement = document.querySelectorAll("#exercise p");
    let size = 2;

    if (Number(textElement[0].style.fontSize.replace("px", "").trim()) === 0) {
        textElement[0].style.fontSize = size;
    } else {
        size = Number(textElement[0].style.fontSize.replace("px", "").trim()) * 2;
    }
    textElement[0].style.fontSize = `${size}px`;

    let colorsArr = {"blue":"green", "green":"red", "red":"blue"};
    if (!textElement[0].style.color) {
        textElement[0].style.color="blue";
    } else {
        textElement[0].style.color = `${colorsArr[textElement[0].style.color]}`;
    }
}
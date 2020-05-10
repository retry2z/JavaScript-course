function solve() {
    let listElements = document.getElementsByTagName("li");
    let adding = document.getElementsByTagName('button')[0];
    let addedText = document.getElementsByTagName('input')[0];
    let index;
 
    adding.addEventListener('click', () => {
        if (addedText.value.toUpperCase().charCodeAt(0) >= 65 && addedText.value.toUpperCase().charCodeAt(0) <= 90) {
            index = parseInt(addedText.value.toUpperCase().charCodeAt(0) - 65);
        }
        if (!listElements[index].textContent) {
            listElements[index].textContent = addedText.value.charAt(0).toUpperCase() + addedText.value.slice(1).toLocaleLowerCase();
        } else {
            listElements[index].textContent += `, ${addedText.value.charAt(0).toUpperCase() + addedText.value.slice(1).toLocaleLowerCase()}`;
        }
 
        addedText.value = "";
    })
}
function addItem() {
    const newItem = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const optionElement = document.createElement('option');

    optionElement.value = newValue.value;
    optionElement.innerHTML = newItem.value;
    menu.appendChild(optionElement);
    newItem.value = '';
    newValue.value = '';
}
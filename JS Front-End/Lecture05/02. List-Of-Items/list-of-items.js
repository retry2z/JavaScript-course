function addItem() {
    const list = document.getElementById('items');
    const li = document.createElement('li');
    const value = document.getElementById('newItemText').value;
    list.appendChild(li).textContent = value;
}
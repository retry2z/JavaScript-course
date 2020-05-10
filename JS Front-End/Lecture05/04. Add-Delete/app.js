function solve() {
  const list = document.getElementById('items');
  const li = document.createElement('li');
  const value = document.getElementById('newText').value;

  li.textContent = value;
  li.innerHTML = value + '<a href="#">[Delete]</a>';
  list.appendChild(li);

  li.addEventListener('click', (x) => {
    const currentElement = x.currentTarget;

    currentElement.parentNode.removeChild(currentElement);
  });
}

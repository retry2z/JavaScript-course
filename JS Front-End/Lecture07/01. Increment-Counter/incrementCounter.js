function increment(selector) {
  const incValue = () => {
    textAreaElement.value = Number(textAreaElement.value) + 1;
  };

  const addNewLiElement = () => {
    const newliElement = document.createElement('li');
    newliElement.textContent = textAreaElement.value;
    ulElement.appendChild(newliElement);
  }


  const bodyElement = document.querySelector(selector);

  const textAreaElement = document.createElement('textarea');
  textAreaElement.value = 0;
  textAreaElement.classList.add('counter');
  textAreaElement.disabled = true;

  const incrementBtn = document.createElement('button');
  incrementBtn.classList.add('btn');
  incrementBtn.setAttribute('id', 'incrementBtn');
  incrementBtn.textContent = 'Increment';
  incrementBtn.addEventListener('click', incValue);

  const addBtn = document.createElement('button');
  addBtn.classList.add('btn');
  addBtn.setAttribute('id', 'addBtn');
  addBtn.textContent = 'Add';
  addBtn.addEventListener('click', addNewLiElement);

  const ulElement = document.createElement('ul');
  ulElement.classList.add('results');

  bodyElement.appendChild(textAreaElement);
  bodyElement.appendChild(incrementBtn);
  bodyElement.appendChild(addBtn);
  bodyElement.appendChild(ulElement);
}




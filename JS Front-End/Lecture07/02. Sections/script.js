function create(words) {
   const createNewElement = (string) => {
      const creatDivElement = document.createElement('div');
      const newParagraphElement = document.createElement('p');
      newParagraphElement.innerHTML = string;
      newParagraphElement.style.display = 'none';
      creatDivElement.appendChild(newParagraphElement);
      return creatDivElement;
   }

   const revealText = function (ev) {
      ev.target.children[0].style.display = 'block';
   };

   const result = document.getElementById('content');
   result.addEventListener('click', revealText);

   for (const line of words) {
      const element = createNewElement(line);
      result.appendChild(element);
   }
}
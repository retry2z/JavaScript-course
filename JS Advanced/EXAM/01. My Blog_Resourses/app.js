function solve() {
   //Declaration part

   
   const htmlElements = {
      articlesSection: document.querySelector('body > div > div > main > section'),
      archiveSection: document.querySelector('body > div > div > aside > section.archive-section > ul'),
      author: document.querySelector('#creator'),
      title: document.querySelector('#title'),
      category: document.querySelector('#category'),
      content: document.querySelector('#content'),
      createBtn: document.querySelector('body > div > div > aside > section:nth-child(1) > form > button'),
   };

   const createNewHTMLElement = (htmlTag, classProperty, textContainer, attributes, event) => {
      const element = document.createElement(htmlTag);
      if (classProperty) {
         element.className = classProperty;
      }
      if (textContainer) {
         element.textContent = textContainer;
      }
      if (attributes) {
         attributes.forEach(attribute => {
            element.setAttribute(attribute.name, attribute.value);
         });
      }
      if (event) {
         element.addEventListener(event.type, event.func);
      }
      return element;
   }

   //Add listeners 


   htmlElements.createBtn.addEventListener('click', (event) => {
      event.preventDefault();

      const author = htmlElements.author.value;
      const title = htmlElements.title.value;
      const category = htmlElements.category.value;
      const content = htmlElements.content.value;

      const article = generateArticleElement(author, title, category, content);
      htmlElements.articlesSection.appendChild(article);

      htmlElements.author.value = '';
      htmlElements.title.value = '';
      htmlElements.category.value = '';
      htmlElements.content.value = '';
   });

   function generateArticleElement(author, title, category, content) {
      const articleElement = createNewHTMLElement('article');
      const h1TitleElement = createNewHTMLElement('h1', null, title);
      const pCategoryElement = createNewHTMLElement('p', null, 'Category:');
      const strongCategoryElement = createNewHTMLElement('strong', null, category);
      const pAuthorElement = createNewHTMLElement('p', null, 'Creator:');
      const strongAuthorElement = createNewHTMLElement('strong', null, author);
      const pContentElement = createNewHTMLElement('p', null, content);

      const divButtonsElement = createNewHTMLElement('div', 'buttons');
      const buttonDeleteElement = createNewHTMLElement('button', 'btn delete', 'Delete', null, { type: 'click', func: deleteArticle });
      const buttonArchiveElement = createNewHTMLElement('button', 'btn archive', 'Archive', null, { type: 'click', func: archiveArticle });

      divButtonsElement.appendChild(buttonDeleteElement);
      divButtonsElement.appendChild(buttonArchiveElement);

      pCategoryElement.appendChild(strongCategoryElement);
      pAuthorElement.appendChild(strongAuthorElement);

      articleElement.appendChild(h1TitleElement);
      articleElement.appendChild(pCategoryElement);
      articleElement.appendChild(pAuthorElement);
      articleElement.appendChild(pContentElement);
      articleElement.appendChild(divButtonsElement);

      return articleElement;
   }


   //Buttons functionality
   function archiveArticle() {
      const article = this.parentNode.parentNode;
      const title = article.querySelector('h1').textContent;
      const liElement = document.createElement('li');

      liElement.textContent = title;
      htmlElements.archiveSection.appendChild(liElement);
      article.remove();

      const sorted = Array.from(htmlElements.archiveSection.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent));

      Array.from(htmlElements.archiveSection.children).forEach(x => x.remove());
      sorted.forEach(x => htmlElements.archiveSection.appendChild(x));
   }

   function deleteArticle() {
      this.parentNode.parentNode.remove();
   }

}

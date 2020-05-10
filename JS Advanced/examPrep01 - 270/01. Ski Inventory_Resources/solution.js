function solve() {
   const elements = {
      availableProducts: document.querySelector('#products ul'),
      addProduct: document.querySelector('#add-new'),
      newProduct: document.querySelectorAll('#add-new input'),
      filterButton: document.querySelector('.filter button'),
      filterInput: document.querySelector('.filter input'),
      totalPrice: document.querySelectorAll('h1')[1],
      myProducts: document.querySelector('#myProducts ul'),
      buyButton: document.querySelector('#myProducts button'),
   }

   const clearFields = () => {
      Array.from(elements.newProduct).forEach(x => {
         x.value = '';
      });
   }

   const createNewHTMLElement = (htmlTag, classProperty, textContainer, attributes, event) => {
      const element = document.createElement(htmlTag);
      if (classProperty) {
         classProperty.forEach(x => {
            element.classlist.add(x);
         });
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

   elements.buyButton.addEventListener('click', function () {
      Array.from(elements.myProducts.children).forEach(x => {
         x.remove();
      })
   });

   elements.addProduct.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.tagName === 'BUTTON') {
         const [name, quantity, price] = elements.newProduct;
         const productElement = getNewProduct(name.value, quantity.value, price.value);
         elements.availableProducts.appendChild(productElement);
         clearFields();
      }
   });
   function getNewProduct(name, quantity, price) {
      const liElement = createNewHTMLElement('li');
      const spanNameElement = createNewHTMLElement('span', null, name);
      const strongAvailableElement = createNewHTMLElement('strong', null, `Available: ${quantity}`);
      const divElement = createNewHTMLElement('div');
      const strongPriceElement = createNewHTMLElement('strong', null, Number(price).toFixed(2));
      const buttonElement = createNewHTMLElement('button', null, `Add to Client's List`, null, { type: 'click', func: addToCartItem });

      divElement.appendChild(strongPriceElement);
      divElement.appendChild(buttonElement);

      liElement.appendChild(spanNameElement);
      liElement.appendChild(strongAvailableElement);
      liElement.appendChild(divElement);
      return liElement;
   }

   function addToCartItem() {
      target = this.parentNode.parentNode;
      const name = target.querySelector('span');
      const quantity = target.querySelectorAll('strong')[0];
      const price = target.querySelectorAll('strong')[1];

      const quantityValue = Number(quantity.textContent.split(':')[1].trim()) - 1;
      if (!quantityValue) {
         target.remove();
      } else {
         quantity.textContent = `Available: ${quantityValue}`;
      }

      const oldValue = Number(elements.totalPrice.textContent.split(':')[1].trim());
      const newValue = Number(price.textContent);
      elements.totalPrice.textContent = `Total Price: ${(oldValue + newValue).toFixed(2)}`;

      const liNameElement = createNewHTMLElement('li', null, name.textContent);
      const strongPriceElement = createNewHTMLElement('strong', null, price.textContent);
      liNameElement.appendChild(strongPriceElement);
      elements.myProducts.appendChild(liNameElement);
   }


   elements.filterButton.addEventListener('click', () => {
      const search = elements.filterInput.value.toLowerCase();
      Array.from(elements.availableProducts.children).forEach(product => {
         const name = product.querySelector('span').textContent;
         name.includes(search) ?
            product.style.display = 'block' : product.style.display = 'none';
      });
   });
}
function solve() {
   const products = document.getElementsByClassName('add-product');
   const output = document.getElementsByTagName('textarea')[0];
   const checkOut = document.getElementsByClassName('checkout')[0];

   const result = {
      card: new Set(),
      totalPrice: 0,
   };


   for (let i = 0; i < products.length; i++) {
      const element = products[i];

      element.addEventListener('click', addToCard);
   }

   function addToCard() {
      const data = this.parentElement.parentElement;
      const productName = data.getElementsByClassName('product-title')[0].textContent;
      const productPrice = data.getElementsByClassName('product-line-price')[0].textContent;

      output.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;

      result.card.add(productName);
      result.totalPrice += Number(productPrice);
   }


   const allButtons = document.getElementsByTagName('button');

   checkOut.addEventListener('click', () => {
      const products = [...result.card.keys()].join(', ');
      //   if (products) {
      output.textContent += `You bought ${products} for ${result.totalPrice.toFixed(2)}.`;

      for (const button of allButtons) {
         button.disabled = true;
      }
      //    }
   });
}


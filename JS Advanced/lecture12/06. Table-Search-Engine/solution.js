function solve() {
   const data = document.querySelectorAll('td');
   const searchField = document.getElementById('searchField');
   const btn = document.getElementById('searchBtn');
   let result;

   btn.addEventListener('click', () => {
      if (result) {
         result.forEach(element => {
            element.className = '';
         });
      }

      result = [...data].reduce((acc, item) => {
         if (item.textContent.includes(searchField.value)) {
            item.parentElement.classList.add('select');
            acc.push(item.parentElement);
         }
         return acc
      }, []);

      console.log(result);
   });


}
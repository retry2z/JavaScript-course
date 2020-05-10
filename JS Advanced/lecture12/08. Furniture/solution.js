function solve() {
  // let input = [
  //   {
  //     "img": "https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG",
  //     "name": "Sofa",
  //     "price": "259",
  //     "decFactor": "0.4"

  //   },
  //   {
  //     "img": "https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/7011671065_3dr_sonoma.jpg",
  //     "name": "Wardrobe",
  //     "price": "120",
  //     "decFactor": "1.2"
  //   }
  // ];

  let tableElement = document.getElementsByTagName("tbody")[0];

  const buttons = document.getElementsByTagName('button');
  const generate = buttons[0];
  const buy = buttons[1];

  const fields = document.getElementsByTagName('textarea');
  const input = fields[0];
  const result = fields[1];

  const createImg = (url) => {
    const img = document.createElement('img');
    img.setAttribute('src', url);
    return img;
  }

  const createProduct = (text) => {
    let productDataElement = document.createElement('p');
    productDataElement.textContent = text;
    return productDataElement
  }

  const createCheckbox = () => {
    let inputElement = document.createElement('input');
    inputElement.setAttribute("type", "checkbox");
    return inputElement
  }

  generate.addEventListener('click', loadData);
  function loadData() {
    const data = JSON.parse(input.value);
    if (!data) {
      return
    }
    data.forEach(line => {
      const newRowElement = tableElement.insertRow();
      newRowElement.insertCell(0).appendChild(createImg(line.img));
      newRowElement.insertCell(1).appendChild(createProduct(line.name));
      newRowElement.insertCell(2).appendChild(createProduct(line.price));
      newRowElement.insertCell(3).appendChild(createProduct(line.decFactor));
      newRowElement.insertCell(4).appendChild(createCheckbox());
    });
  }

  let checkBoxesElement = document.getElementsByTagName("input");
  checkBoxesElement[0].disabled = false;

  buy.addEventListener('click', function () {
    const output = {
      name: [],
      price: 0,
      dec: 0,
      count: 0,
    };

    for (let j = 0; j < checkBoxesElement.length; j++) {
      const line = checkBoxesElement[j];

      if (line.checked) {
        let data = line.parentElement.parentElement;

        output.name.push(data.cells[1].children[0].textContent);
        output.price += Number(data.cells[2].children[0].textContent);
        output.dec += Number(data.cells[3].children[0].textContent);
        output.count++;
      }
    }

    if (!output.name) {
      return
    }

    result.value = `Bought furniture: ${output.name.join(', ')}\n`;
    result.value += `Total price: ${output.price.toFixed(2)}\n`;
    result.value += `Average decoration factor: ${output.dec / output.count}`;
  });
}

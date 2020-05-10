function classStorage() {

    class Storage {
        constructor(input) {
            this.storage = [];
            this.capacity = input;
            this.totalCost = 0;

            this.addProduct = (input) => {
                const {name, price, quantity} = input;
                const product = {
                    'name': name,
                    'price': price,
                    'quantity': quantity,
                };
                this.storage.push(product);
                this.capacity -= quantity;
                this.totalCost += price * quantity;
            };

            this.getProducts = () => {
                let output = [];
                this.storage.forEach(product => {
                    output.push(JSON.stringify(product));
                });
                return output.join('\n');
            }
        }
    }


    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);


}

classStorage();
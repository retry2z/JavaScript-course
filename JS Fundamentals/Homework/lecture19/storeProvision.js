function storeProvision(store, delivery) {

    const convetArr = (arr) => {
        let index = 0;
        const tmpObj = {};
        for (index = 0; index < arr.length; index += 2) {
            tmpObj[arr[index]] = Number(arr[index + 1]);
        }
        return tmpObj;
    };

    const printObj = (symbol, obj) => {
        let keyvalue;
        for (keyvalue in obj) {
            console.log(`${keyvalue}${symbol}${obj[keyvalue]}`);
        }
    };

    const storeInventory = convetArr(store);
    const deliveyProducts = convetArr(delivery);

    for (let key in deliveyProducts) {
        if (storeInventory.hasOwnProperty(key)) {
            storeInventory[key] += deliveyProducts[key];
        } else {
            storeInventory[key] = deliveyProducts[key];
        }
    }

    printObj(' -> ', storeInventory);
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
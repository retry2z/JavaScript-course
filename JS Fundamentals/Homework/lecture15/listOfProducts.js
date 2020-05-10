function listOfProducts(input) {
    const inputSorted = input.sort((a,b) => {
        return a.localeCompare(b);
    });

    inputSorted.forEach((x,i) => {
        console.log(`${i+1}.${x}`);
    });
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
function distinctArray(input) {
    const result = input.filter((searchItem, index) => {
       return  (input.indexOf(searchItem) === index);
    });

    console.log(result.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 7, 2]);
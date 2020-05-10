function addRemoveElement(input) {
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case"add": {
                newArr.push(i + 1);
                break;
            }
            case "remove": {
                newArr.pop();
                break;
            }
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        newArr.map((e, i) => {
            console.log(e);
        });
    }
}

addRemoveElement(['remove',
    'remove',
    'remove']
);
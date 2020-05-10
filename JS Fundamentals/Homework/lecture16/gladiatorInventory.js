function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    const addNewElement = (value, arr) => {
        const tmpARR = arr.splice(0);
        if (!tmpARR.includes(value)) {
            tmpARR.push(value);
        }
        return tmpARR;
    };

    const removeElement = (value, arr) => {
        let tmpARR = arr.splice(0);
        if (tmpARR.includes(value)) {
            tmpARR = tmpARR.filter(e => (value !== e));
        }
        return tmpARR;
    };

    const updateElement = (value, arr) => {
        let tmpARR = arr.splice(0);
        if (tmpARR.includes(value)) {
            tmpARR = tmpARR.filter(e => (value !== e));
            tmpARR.push(value);
        }
        return tmpARR;
    };

    const modifyElement = (value, arr, symbol) => {
        const tmpARR = arr.splice(0);
        const formattedValue = value.split('-');
        const index = tmpARR.indexOf(formattedValue[0]) + 1;
        if (tmpARR.includes(formattedValue[0])) {
            tmpARR.splice(index, 0, formattedValue.join(':'));
        }
        return tmpARR;
    };

    input.forEach(el => {
        const command = el.split(' ')[0];
        const value = el.split(' ')[1];

        switch (command) {
            case 'Buy':
                inventory = addNewElement(value, inventory);
                break;

            case 'Trash':
                inventory = removeElement(value, inventory);
                break;

            case 'Repair':
                inventory = updateElement(value, inventory);
                break;

            case 'Upgrade':
                inventory = modifyElement(value, inventory);
                break;
        }
    });
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
);
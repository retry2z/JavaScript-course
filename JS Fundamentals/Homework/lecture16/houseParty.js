function houseParty(input) {
    let guestList = [];

    input.forEach(guest => {
        const name = guest.split(' ')[0];
        if (guest.includes('not')) {
            if (guestList.includes(name)) {
                guestList = guestList.filter(el => el !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }

        } else {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    });

    console.log(guestList.join('\n'));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
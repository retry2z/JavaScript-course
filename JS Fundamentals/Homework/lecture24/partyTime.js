function partyTime(input) {
    // Focus on solving the problem.
    const partyIndex = input.indexOf('PARTY');
    const guestList = {
        'VIP': [],
        'REGULAR': [],
    };

    const invitedList = input.slice(0, partyIndex);
    const notComing = input.slice(partyIndex + 1);

    invitedList.forEach(x => {

        if (Number.isInteger(+x[0])) {
            guestList.VIP.push(x);
        } else {
            guestList.REGULAR.push(x);
        }
    });

    notComing.forEach(x => {
        if (guestList.VIP.includes(x)) {
            const index = guestList.VIP.indexOf(x);
            guestList.VIP.splice(index, 1);
        } else if (guestList.REGULAR.includes(x)) {
            const index = guestList.REGULAR.indexOf(x);
            guestList.REGULAR.splice(index, 1);
        }
    });

    console.log(guestList.VIP.length + guestList.REGULAR.length);
    console.log(guestList.VIP.join('\n'));
    console.log(guestList.REGULAR.join('\n'));
}

partyTime(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
);
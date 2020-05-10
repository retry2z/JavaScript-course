function flightSchedule(input) {
    const [flightData, flightUpdate, search] = input;
    const flight = {};

    for (let token of flightData) {
        const [flightId, ...destination] = token.split(' ');

        flight[flightId] = {};
        flight[flightId].Destination = destination.join(' ');
        flight[flightId].Status = 'Ready to fly';
    }

    for (let token of flightUpdate) {
        const [updateId, updateStatus] = token.split(' ');

        if (flight.hasOwnProperty(updateId)) {
            flight[updateId].Status = updateStatus;
        }
    }

    const test = Object.keys(flight);

    for (let key of test) {
        if (flight[key].Status === search.toString())
        console.log(flight[key]);
    }
}

flightSchedule([['WN269 Delaware ASD',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
        ['Cancelled']
    ]
);
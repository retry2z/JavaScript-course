function solve(input, search) {
    // class Ticket {
    //     constructor(destination, price, status) {
    //         this.destination = destination;
    //         this.price = Number(price);
    //         this.status = status;
    //     }
    // }

    const result = new Array();
    input.map((item) => {
        [destination, price, status] = item.split('|');

        //const ticket = new Ticket(destination, price, status);
        result.push({
            destination,
            price,
            status,
        });

    });


    const sorted = result.sort((a, b) => a[search].localeCompare(b[search]));


    console.log(sorted);
}

solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);
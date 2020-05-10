class ChristmasDinner {
    constructor(budget) {
        this.vldBudget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = [];
    }

    set vldBudget(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = budget;
    }

    shopping(product) {
        const [type, price] = product;
        const tmp = this.budget - price;
        if (tmp <= 0) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget = tmp;
        this.products.push(type);

        //console.log(`You have successfully bought ${type}!`);
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        console.log();
        const { recipeName, productsList } = recipe;

        productsList.forEach(x => {
            if (!this.products.includes(x)) {
                console.log(x);
                throw new Error("We do not have this product");
            }
        });

        this.dishes.push({ recipeName, productsList });

        //console.log(`${recipeName} has been successfully cooked!`);
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let tmp;

        tmp = this.dishes.find(x => x.recipeName === dish);
        if (!tmp) {
            throw new Error('We do not have this dish');
        }

        tmp = this.guests.find(x => x.hasOwnProperty(name));
        if (tmp) {
            throw new Error('This guest has already been invited');
        }

        this.guests.push({ [name]: dish });

        // console.log(`You have successfully invited ${name}!`);
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let output = '';

        this.guests.forEach(name => {
            const [guest, dish] = Object.entries(name)[0];
            const products = this.dishes.find(x => x.recipeName === dish).productsList.join(', ');
            output += `${guest} will eat ${dish}, which consists of ${products}\n`
        });

        //console.log(output.trim());
        return output.trim();
    }
}


let dinner = new ChristmasDinner(300);


dinner.shopping(['Salt', 100]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 400]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
// Corresponding output
// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt

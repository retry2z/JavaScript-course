// Example of a WORKING PizzUni Class
class PizzUni {
    constructor() {
        this.registeredUsers = [];
        this.availableProducts = {
            pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            drinks: ['Coca-Cola', 'Fanta', 'Water']
        };
        this.orders = [];
    }

    registerUser(email) {

        const user = this.doesTheUserExist(email);

        if (user) {
            throw new Error(`This email address (${email}) is already being used!`)
        }

        const currentUser = {
            email,
            orderHistory: []
        };

        this.registeredUsers.push(currentUser);

        return currentUser;
    }

    makeAnOrder(email, orderedPizza, orderedDrink) {

        const user = this.doesTheUserExist(email);

        if (!user) {
            throw new Error(`You must be registered to make orders!`);
        }

        const isThereAPizzaOrdered = this.availableProducts.pizzas.includes(orderedPizza);

        if (!isThereAPizzaOrdered) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        }

        let userOrder = {
            orderedPizza
        };

        const isThereADrinkOrdered = this.availableProducts.drinks.includes(orderedDrink);

        if (isThereADrinkOrdered) {
            userOrder.orderedDrink = orderedDrink;
        }

        user.orderHistory.push(userOrder);

        const currentOrder = {
            ...userOrder,
            email,
            status: 'pending'
        };
        this.orders.push(currentOrder);

        return this.orders.length - 1;
    }

    detailsAboutMyOrder(id) {
        if (this.orders[id]) {
            return `Status of your order: ${this.orders[id].status}`;
        }
    }

    doesTheUserExist(email) {
        return this.registeredUsers.filter((user) => user.email === email)[0];
    }

    completeOrder() {
        if (this.orders.length > 0) {
            const index = this.orders.findIndex((o) => o.status === "pending");
            this.orders[index].status = 'completed';

            return this.orders[index];
        }
    }
}
module.exports = PizzUni; // This piece of code exports the PizzUni Class, so it could be accessed in other files.


const PizzUni = require('./02. PizzUni_Ресурси');
const assert = require('chai').assert;

describe("Tests …", function () {

    let actual;
    let expected;
    let sb;
    beforeEach(() => {
        actual;
        expected;
        sb = new PizzUni();
    });

    describe("Check params:", function () {
        it("registerUser()", function () {
            sb = new PizzUni();

            actual = sb.registerUser('asd');
            expected = {
                email: 'asd',
                orderHistory: [],
            };
            assert.deepEqual(actual, expected);

            actual = () => sb.registerUser('asd');
            expected = `This email address (asd) is already being used!`;
            assert.throws(actual, expected);
        });

        it("makeAnOrder()", function () {
            sb = new PizzUni();
            sb.registerUser('asd');

            actual = () => sb.makeAnOrder();
            expected = `You must be registered to make orders!`;
            assert.throws(actual, expected);

            actual = () => sb.makeAnOrder('asd');
            expected = `You must order at least 1 Pizza to finish the order.`;
            assert.throws(actual, expected);

            actual = () => sb.makeAnOrder('asd', 'Nqma takava pica');
            expected = `You must order at least 1 Pizza to finish the order.`;
            assert.throws(actual, expected);

            actual = sb.makeAnOrder('asd', 'Barbeque Classic');
            expected = 0;
            assert.deepEqual(actual, expected);

            actual = sb.makeAnOrder('asd', 'Barbeque Classic', 'Fanta');
            expected = 1;
            assert.deepEqual(actual, expected);
        });

        it('detailsAboutMyOrder()', function () {
            sb = new PizzUni();
            sb.registerUser('asd');
            sb.makeAnOrder('asd', 'Barbeque Classic', 'Fanta');

            actual = sb.detailsAboutMyOrder(0);
            expected = 'Status of your order: pending';
            assert.equal(actual, expected);

            actual = sb.detailsAboutMyOrder(1);
            expected = undefined;
            assert.equal(actual, expected);
        });


        it('completeOrder()', function () {
            sb = new PizzUni();
            sb.registerUser('asd');

            sb.makeAnOrder('asd', 'Barbeque Classic', 'Fanta');
            sb.completeOrder();
            actual = sb.detailsAboutMyOrder(0);
            expected = 'Status of your order: completed';
            assert.deepEqual(actual, expected);

            sb.makeAnOrder('asd', 'Italian Style', 'Classic Margherita');
            actual = sb.detailsAboutMyOrder(1);
            expected = 'Status of your order: pending';
            assert.deepEqual(actual, expected);

            sb.completeOrder();
            actual = sb.detailsAboutMyOrder(1);
            expected = 'Status of your order: completed';
            assert.deepEqual(actual, expected);

            actual = sb.doesTheUserExist('asd');
            expected = {
                email: 'asd',
                "orderHistory": [
                    {
                        "orderedDrink": "Fanta",
                        "orderedPizza": "Barbeque Classic"
                    },
                    {
                        "orderedPizza": "Italian Style",
                    }
                ]
            };
            assert.deepEqual(actual, expected);

            actual = sb.doesTheUserExist('asds');
            expected = undefined;
            assert.deepEqual(actual, expected);
        });
    });
});
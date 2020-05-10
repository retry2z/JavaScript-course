function coffeeMachine(input) {
    let order = [];
    let tmp = [];
    let value = 0;
    let output = '';

    for (let i = 0; i < input.length; i++) {
        tmp[i] = input[i].split(", ");
    }

    for (let i = 0; i < tmp.length; i++) {
        order[i] = {};
        order[i].coins = +tmp[i][0];
        if (tmp[i][1] === "coffee") {
            {
                order[i].name = tmp[i][1];
                order[i].subname = tmp[i][2];
                order[i].milk = 0;
                order[i].sugar = tmp[i][4];
                if (tmp[i][3] === "milk") {
                    order[i].milk = 1;
                } else {
                    order[i].sugar = tmp[i][3];
                }
                if (order[i].subname === "caffeine") {
                    order[i].price = 0.80;
                }
                if (order[i].subname === "decaf") {
                    order[i].price = 0.90;
                }


            }
        } else {
            {
                order[i].name = tmp[i][1];
                order[i].subname = 0;
                order[i].milk = 0;
                order[i].sugar = tmp[i][3];
                if (tmp[i][2] === "milk") {
                    order[i].milk = 1;
                } else {
                    order[i].sugar = tmp[i][2];
                }
                if (order[i].name === "tea") {
                    order[i].price = 0.80;
                }

            }
        }
    }

    for (let i = 0; i < order.length; i++) {
        let add = 0;
        let change = (order[i].coins - order[i].price).toFixed(2);
        change = +change;

        if (order[i].milk === 1) {
            add = (order[i].price * 0.1).toFixed(1);
            add = +add;
        }
        if (order[i].sugar > 0) {
            add += 0.1;
        }

        change = change - add;
        order[i].price += add;
        if (change >= 0) {
            output = `You ordered ${order[i].name}. Price: $${order[i].price.toFixed(2)} Change: $${change.toFixed(2)}`;
            value += +order[i].price.toFixed(2);
            console.log(output);
        } else {
            console.log(`Not enough money for ${order[i].name}. Need $${Math.abs(change).toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${value.toFixed(2)}`);
}


coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
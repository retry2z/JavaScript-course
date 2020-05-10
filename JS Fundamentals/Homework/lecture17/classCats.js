function classCats(input) {
    class Cat {
        constructor(name, age) {
            this.catName = name;
            this.catAge = age;

            this.meow = () => {
                console.log(`${this.catName}, age ${this.catAge} says Meow`);
            }
        }
    }

    const cats = [];
    input.forEach(x => {
        const kitty = new Cat();
        const kittyName = x.split(' ')[0];
        const kittyAge = x.split(' ')[1];

        kitty.catName = kittyName;
        kitty.catAge = kittyAge;
        cats.push(kitty);
    });

    cats.forEach(x => {
        x.meow();
    });

}

classCats(['Mellow 2', 'Tom 5']);
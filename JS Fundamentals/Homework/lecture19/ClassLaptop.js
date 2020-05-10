function solve() {
    class Laptop {
        constructor(info, qualities) {
            const {producer, age, brand} = info;
            this.info = {
                'producer': producer,
                'age': age,
                'brand': brand,
            };
            this.quality = qualities;
            this.isOn = false;
            debugger
            this.price = 800 - (age * 2) + (this.quality * 0.5);
            this.showInfo = () => {
                return JSON.stringify(this.info);
            };
        }

        turnOn() {
            this.isOn = true;
            this.quality--;
            this.price = 800 - (this.info.age * 2) + (this.quality * 0.5)
        }

        turnOff() {
            this.isOn = false;
            this.quality--;
            this.price = 800 - (this.info.age * 2) + (this.quality * 0.5)
        }
    }


    let info = {producer: "Dell", age: 2, brand: "XPS"};
    let laptop = new Laptop(info, 10);
    laptop.turnOn();
    console.log(laptop.showInfo());
    laptop.turnOff();
    console.log(laptop.quality);
    laptop.turnOn();
    console.log(laptop.isOn);
    console.log(laptop.price);

}

solve();



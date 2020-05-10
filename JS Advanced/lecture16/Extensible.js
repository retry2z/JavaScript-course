class Extensible {

    constructor() {
        if (!Extensible.prototype.id) Extensible.prototype.id = 0;
        Extensible.prototype.id += 1;

        this.id = Extensible.prototype.id;
    }

    extend(template) {
        Object.entries(template).map(([key, value]) => {
            if (typeof value === 'function') {
                Extensible.prototype[key] = value;
            } else {
                this[key] = value;
            }
        });
    }
}


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);

console.log(Extensible.prototype);




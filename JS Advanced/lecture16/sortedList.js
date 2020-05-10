class List {
    constructor() {
        this.data = [];
        this.size = 0;
    }

    add(num) {
        this.data.push(num);
        this.data = this.data.sort((a, b) => a - b);
        this.size = this.data.length;
    }

    remove(index) {
        if (index >= 0 && index < this.data.length) {
            this.data.splice(index, 1);
            this.size = this.data.length;
        }
    }

    get(index) {
        if (index >= 0 && index < this.data.length) {
            return this.data[index];
        }
    }
}



let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));


list.remove(1);

console.log(list.get(1));
console.log(list.size);

class Stringer {
    fullLength;

    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(num) {
        this.innerLength += num;

        if (this.innerLength < 3) {
            this.innerLength = 0;
        }
    }

    decrease(num) {
        this.innerLength -= num;
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
    }

    toString() {
        const result = this.innerString.substring(0, this.innerLength);
        if (!result.length) {
            return '...';
        }

        if (result.length < this.innerString.length) {
            return result + '...'
        }
        return result;
    }
}



let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

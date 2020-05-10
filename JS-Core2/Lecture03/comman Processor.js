function result() {
    let string = '';
    return {
        append: (srt) => string += srt,
        removeStart: (n) => string = string.substring(n),
        removeEnd: (n) => string = string.substring(0, string.length - n),
        print: () => console.log(string),
    }
}

let firstZero = result();
let secondZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();


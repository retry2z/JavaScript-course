class SkiResort {

    constructor(name) {
        this.name = name;
        this.voters = 0;
        this.hotels = [];
    }
    get bestHotel() {
        if (this.voters === 0) {
            return "No votes yet";
        }
        let best = this.hotels.reduce((a, b) => a.points > b.points ? a : b);
        return `Best hotel is ${best.name} with grade ${best.points}. Available beds: ${best.beds}`
    }

    build(name, beds) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = {
            name,
            beds,
            points: 0
        }
        this.hotels.push(hotel);
        return `Successfully built new hotel - ${name}`
    }

    book(name, beds) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = this.hotels.find(hotel => hotel.name === name);
        if (!hotel) {
            throw new Error("There is no such hotel");
        }
        if (hotel.beds < beds) {
            throw new Error("There is no free space");
        }
        hotel.beds -= beds;
        return "Successfully booked";
    }

    leave(name, beds, points) {
        if (name === "" || beds < 1) {
            throw new Error("Invalid input");
        }
        let hotel = this.hotels.find(hotel => hotel.name === name);
        if (!hotel) {
            throw new Error("There is no such hotel");
        }
        hotel.points += beds * points;
        hotel.beds += beds;
        this.voters += beds;

        return `${beds} people left ${name} hotel`;
    }

    averageGrade() {
        if (this.voters === 0) {
            return "No votes yet";
        }
        let grade = this.hotels.reduce((a, b) => a + b.points, 0)/this.voters;
        return `Average grade: ${grade.toFixed(2)}`;
    }

    
}

module.exports = SkiResort;

////////////////////////////////////////////////////////////////////////////////////////////////////////////


let SkiResort = require('./solution');
const assert = require('chai').assert;



describe('SkiResort', function () {

    let actual;
    let expected;
    beforeEach(() => {
        actual;
        expected;
    });

    describe('test valid func', () => {
        it('Valid Inputs and functionality', () => {
            let res = new SkiResort("Some");
            expected = res.build("Sun", 10);
            actual = 'Successfully built new hotel - Sun';
            assert.equal(actual, expected);

            expected = res.build('Avenue', 5);
            actual = 'Successfully built new hotel - Avenue';
            assert.equal(actual, expected);

            expected = res.book('Sun', 5);
            actual = 'Successfully booked';
            assert.equal(actual, expected);

            expected = res.book('Avenue', 5);
            actual = 'Successfully booked';
            assert.equal(actual, expected);

            expected = res.leave('Sun', 3, 2);
            actual = '3 people left Sun hotel';
            assert.equal(actual, expected);

            expected = res.leave('Avenue', 3, 3);
            actual = '3 people left Avenue hotel';
            assert.equal(actual, expected);

            expected = res.book('Avenue', 3);
            actual = 'Successfully booked';
            assert.equal(actual, expected);

            expected = res.leave('Avenue', 3, 0.5);
            actual = '3 people left Avenue hotel';
            assert.equal(actual, expected);

            expected = res.averageGrade();
            actual = 'Average grade: 1.83';
            assert.equal(actual, expected);

            expected = res.bestHotel;
            actual = 'Best hotel is Avenue with grade 10.5. Available beds: 3';
            assert.equal(actual, expected);

            let r = new SkiResort("a");
            expected = r.bestHotel;
            actual = 'No votes yet';
            assert.equal(actual, expected);

            expected = r.averageGrade();
            actual = 'No votes yet';
            assert.equal(actual, expected);
        });
    });


    describe('invalid inputs', () => {
        it('test errors', () => {
            let res = new SkiResort('');
            expected = { name: '', voters: 0, hotels: [] };
            assert.deepEqual(res, expected);
        });
    });


    describe('Build: check', () => {
        it('test errors', () => {
            let res = new SkiResort('');
            actual = res.build();
            expected = "Successfully built new hotel - undefined";
            assert.deepEqual(actual, expected);

            actual = () => res.build('');
            expected = "Invalid input";
            assert.throws(actual, expected);

            actual = () => res.build('Hotel', 0);
            expected = "Invalid input";
            assert.throws(actual, expected);
        });
    });

    describe('Book: check', () => {
        it('test errors', () => {
            let res = new SkiResort('');
            actual = () => res.book('');
            expected = "Invalid input";
            assert.throws(actual, expected);

            actual = () => res.book('No Hotel Name', 0);
            expected = "Invalid input";
            assert.throws(actual, expected);

            actual = () => res.book('No Hotel Name', 3);
            expected = "There is no such hotel";
            assert.throws(actual, expected);


            res.build("Sun", 10);
            actual = () => res.book('Sun', 13);
            expected = "There is no free space";
            assert.throws(actual, expected);
        });
    });

    describe('Leave: check', () => {
        it('test errors', () => {
            let res = new SkiResort('');
            actual = () => res.leave('');
            expected = "Invalid input";
            assert.throws(actual, expected);

            actual = () => res.leave('No Hotel name', 0);
            expected = "Invalid input";
            assert.throws(actual, expected);

            actual = () => res.leave('No Hotel name', 3);
            expected = "There is no such hotel";
            assert.throws(actual, expected);
        });
    });
});





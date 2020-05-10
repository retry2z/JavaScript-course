let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

const mathEnforcer = require('./functions/matchEnforce');
const assert = require('chai').assert;



describe('Object CHECK', () => {

    describe('addFive() test', () => {
        it('invalid param', () => {
            let actual = mathEnforcer.addFive('5');
            let expected = undefined;

            assert.equal(actual, expected);
        });

        it('valid negative param', () => {
            let actual = mathEnforcer.addFive(-5);
            let expected = 0;

            assert.equal(actual, expected);
        });

        it('valid positive param', () => {
            let actual = mathEnforcer.addFive(5);
            let expected = 10;

            assert.equal(actual, expected);
        });

        it('valid negative floating param', () => {
            let actual = mathEnforcer.addFive(-5.5);
            let expected = -0.5;

            assert.equal(actual, expected);
        });

        it('valid positive floating param', () => {
            let actual = mathEnforcer.addFive(5.8);
            let expected = 10.8;

            assert.equal(actual, expected);
        });
    });

    describe('subtractTen() test', () => {
        it('invalid param', () => {
            let actual = mathEnforcer.subtractTen('5');
            let expected = undefined;

            assert.equal(actual, expected);
        });

        it('valid negative param', () => {
            let actual = mathEnforcer.subtractTen(-5);
            let expected = -15;

            assert.equal(actual, expected);
        });

        it('valid positive param', () => {
            let actual = mathEnforcer.subtractTen(5);
            let expected = -5;

            assert.equal(actual, expected);
        });

        it('valid negative floating param', () => {
            let actual = mathEnforcer.subtractTen(-5.5);
            let expected = -15.5;

            assert.equal(actual, expected);
        });

        it('valid positive floating param', () => {
            let actual = mathEnforcer.addFive(5.8);
            let expected = 10.8;

            assert.equal(actual, expected);
        });
    });

    describe('sum() test', () => {
        it('invalid params', () => {
            let actual = mathEnforcer.sum('5', '5');
            let expected = undefined;

            assert.equal(actual, expected);
        });

        it('invalid param - first', () => {
            let actual = mathEnforcer.sum('5', 5);
            let expected = undefined;

            assert.equal(actual, expected);
        });

        it('invalid param - second', () => {
            let actual = mathEnforcer.sum(5, true);
            let expected = undefined;

            assert.equal(actual, expected);
        });

        it('valid negative params', () => {
            let actual = mathEnforcer.sum(-5, -5);
            let expected = -10;

            assert.equal(actual, expected);
        });

        it('valid positive params', () => {
            let actual = mathEnforcer.sum(5, 5);
            let expected = 10;

            assert.equal(actual, expected);
        });

        it('valid negative floating param', () => {
            let actual = mathEnforcer.sum(-5.5, -5.5);
            let expected = -11;

            assert.equal(actual, expected);
        });

        it('valid positive floating param', () => {
            let actual = mathEnforcer.sum(5.5, 5.5);
            let expected = 11;

            assert.equal(actual, expected);
        });

    });


});





module.exports = mathEnforcer;
class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

module.exports = StringBuilder;




describe('String Builder - Test', () => {

    let actual;
    let expected;
    let sb;
    beforeEach(() => {
        actual;
        expected;
        sb = new StringBuilder();
    });

    describe('constructor: CHECK', () => {
        it('test valid empty param', () => {
            assert.deepEqual(sb._stringArray, []);
        });

        it('test valid valid param', () => {
            sb = new StringBuilder('123');
            expected = ['1', '2', '3']
            assert.deepEqual(sb._stringArray, expected);
        });

        it('test valid invalid param', () => {
            sb = () => new StringBuilder(true);
            expected = 'Argument must be string';
            assert.throw(sb, expected);
        });
    });

    describe('append: CHECK', () => {
        it('test empty param', () => {
            sb = new StringBuilder('12');
            actual = () => sb.append();
            expected = 'Argument must be string';
            assert.throw(actual, expected);
        });

        it('test valid valid param', () => {
            sb = new StringBuilder('12');
            sb.append('ac');
            expected = ['1', '2', 'a', 'c'];
            assert.deepEqual(sb._stringArray, expected);
        });

        it('test valid invalid param', () => {
            sb = new StringBuilder('12');
            actual = () => sb.append(true);
            expected = 'Argument must be string';
            assert.throw(actual, expected);
        });
    });

    describe('prepend: CHECK', () => {
        it('test empty param', () => {
            sb = new StringBuilder('12');
            actual = () => sb.prepend();
            expected = 'Argument must be string';
            assert.throw(actual, expected);
        });

        it('test valid valid param', () => {
            sb = new StringBuilder('12');
            sb.prepend('ac');
            expected = ['a', 'c', '1', '2'];
            assert.deepEqual(sb._stringArray, expected);
        });

        it('test valid invalid param', () => {
            sb = new StringBuilder('12');
            actual = () => sb.prepend(true);
            expected = 'Argument must be string';
            assert.throw(actual, expected);
        });
    });

    describe('insertAt: CHECK', () => {
        it('test empty param - first', () => {
            sb = new StringBuilder('12');
            actual = () => sb.insertAt(true, 8);
            expected = 'Argument must be string';
            assert.throw(actual, expected);
        });

        it('test empty param - second', () => {
            sb = new StringBuilder('12');
            sb.insertAt('A');
            actual = sb._stringArray;
            expected = ['A', '1', '2'];
            assert.deepEqual(actual, expected);
        });

        it('test empty param', () => {
            sb = new StringBuilder('12');
            actual = () => sb.insertAt();
            expected = 'Argument must be string';
            assert.throw(actual, expected);
        });

        it('test valid param', () => {
            sb = new StringBuilder('12');
            sb.insertAt('A', 2);
            expected = ['1', '2', 'A'];
            assert.deepEqual(sb._stringArray, expected);
        });

        it('test invalid index', () => {
            sb = new StringBuilder('12');
            sb.insertAt('AC', 10);
            actual = sb._stringArray;
            expected = ['1', '2', 'A', 'C'];
            assert.deepEqual(actual, expected);
        });

        it('test invalid index', () => {
            sb = new StringBuilder('12');
            sb.insertAt('AC', -10);
            actual = sb._stringArray;
            expected = ['A', 'C', '1', '2']
            assert.deepEqual(actual, expected);
        });

        it('test invalid index', () => {
            sb = new StringBuilder('12');
            sb.insertAt('AC', 10.5);
            actual = sb._stringArray;
            expected = ['1', '2', 'A', 'C'];
            assert.deepEqual(actual, expected);
        });
    });

    describe('remove: CHECK', () => {
        it('test empty param - second', () => {
            sb = new StringBuilder('12');
            sb.remove(8);
            actual = sb._stringArray;
            expected = ['1', '2']
            assert.deepEqual(actual, expected);
        });

        it('test empty param', () => {
            sb = new StringBuilder('12');
            sb.remove();
            actual = sb._stringArray;
            expected = ['1', '2'];
            assert.deepEqual(actual, expected);
        });

        it('test valid param', () => {
            sb = new StringBuilder('12');
            sb.remove(0, 1);
            expected = ['2'];
            assert.deepEqual(sb._stringArray, expected);
        });

        it('test invalid index', () => {
            sb = new StringBuilder('12');
            sb.remove(50, 10);
            actual = sb._stringArray;
            expected = ['1', '2']
            assert.deepEqual(actual, expected);
        });

        it('test invalid index', () => {
            sb = new StringBuilder('12');
            sb.remove(0, -10);
            actual = sb._stringArray;
            expected = ['1', '2']
            assert.deepEqual(actual, expected);
        });

        it('test invalid index', () => {
            sb = new StringBuilder('12');
            sb.remove(1, 10.5);
            actual = sb._stringArray;
            expected = ['1'];
            assert.deepEqual(actual, expected);
        });
    });


    describe('toString: CHECK', () => {
        it('with param', () => {
            sb = new StringBuilder('123');
            actual =sb.toString([]);
            expected = '123';
            assert.equal(actual, expected);
        });

        it('without param', () => {
            sb = new StringBuilder('123');
            actual =sb.toString();
            expected = '123';
            assert.equal(actual, expected);
        });
    });
});
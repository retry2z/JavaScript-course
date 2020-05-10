class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

// Should throw an error
try {
    const hrPack = new PaymentPackage('HR Services');
} catch (err) {
    console.log('Error: ' + err.message);
}
const packages = [
    new PaymentPackage('HR Services', 1500),
    new PaymentPackage('Consultation', 800),
    new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));

const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
try {
    wrongPack.active = null;
} catch (err) {
    console.log('Error: ' + err.message);
}




module.exports = PaymentPackage;





describe('Payments: test', () => {
    let actual;
    let expected;
    let payments;

    beforeEach(() => {
        actual
        expected
        payments
    });

    describe('constructor:CHECK', () => {

        it('with valid input', () => {
            payments = new PaymentPackage('HR', 1500);
            actual = payments.toString;
            expected =
            {
                _VAT: 20,
                _active: true,
                _name: 'HR',
                _value: 1500,
            };
            assert.deepEqual(payments, expected);
        });

        it('with invalid input', () => {
            payments = () => new PaymentPackage('', 20);
            actual = payments.name;
            expected = 'Name must be a non-empty string';
            assert.throw(payments, expected);
        });

        it('with invalid input', () => {
            payments = () => new PaymentPackage(true, 20);
            actual = payments.name;
            expected = 'Name must be a non-empty string';
            assert.throw(payments, expected);
        });

        it('with invalid input', () => {
            payments = () => new PaymentPackage('HP', true);
            actual = payments.name;
            expected = 'non-negative number';
            assert.throw(payments, expected);
        });

    });

    describe('active status:CHECK', () => {
        it('with invalid input', () => {
            payments = new PaymentPackage('HP', 15);
            actual = () => payments.active = null;
            expected = 'Active status must be a boolean';
            assert.throw(actual, expected);
        });

        it('with invalid input', () => {
            payments = new PaymentPackage('HP', 1500);
            payments.active = true;
            actual =  payments.toString();
            expected = 'Package: HP\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            assert.deepEqual(actual, expected);
        });

        it('with invalid input', () => {
            payments = new PaymentPackage('HP', 1500);
            payments.active = false;
            actual =  payments.toString();
            expected = 'Package: HP (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800';
            assert.deepEqual(actual, expected);
        });
    });
});
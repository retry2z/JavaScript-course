function solve() {
  const buttons = document.getElementById('calculator');
  const display = document.getElementById('expressionOutput');
  const output = document.getElementById('resultOutput');

  const calculater = {
    constants: {
      operaters: ['/', '*', '-', '+'],
      numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
      result: '=',
      clear: 'Clear',
    },

    tmpTerm: '',
    terms: [],
    operater: '',
    add: function (value) {
      this.tmpTerm += value
    },
    make: function () {
      this.terms.push(this.tmpTerm);
      this.tmpTerm = '';
    },
    reset: function () {
      this.terms = [];
      this.operater = '';
    }
  }

  const calc = function (a, b, callback) {
    const result = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    return result[callback](+a, +b);
  }

  buttons.addEventListener('click', function (ev) {
    const currentKey = ev.target.value;
    const { constants, terms, operater } = calculater;

    if (constants.operaters.includes(currentKey)) {
      display.textContent += ' ' + currentKey + ' ';
      calculater.operater = currentKey;
      calculater.make();
    }

    if (constants.numbers.includes(currentKey)) {
      display.textContent += currentKey;
      calculater.add(currentKey);
    }

    if (constants.result === currentKey) {
      let result = 'NaN'
      calculater.make();
      if (terms[1]) {
        result = calc(terms[0], terms[1], operater);
        calculater.reset();
      }
      output.textContent = result;
    }

    if (constants.clear === currentKey) {
      output.textContent = '';
      display.textContent = '';
      calculater.reset();
    }
  });
}

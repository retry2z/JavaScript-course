function solve() {
  const quizBody = document.getElementsByTagName('section');
  const output = document.querySelector('.results-inner h1');
  const resultElement = document.querySelector('#results');

  const correctAnsewrs = {
    ansData: ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'],
    checker: function (answer) {
      return this.ansData.includes(answer);
    },

    count: 0,
    correntCountInc: function () {
      this.count++
    },
  }

  const resultShow = () => {
    resultElement.style.display = 'block';
    if (correctAnsewrs.count === 3) {
      output.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      output.textContent = `You have ${correctAnsewrs.count} right answers`;
    }
  }

  for (let i = 0; i < quizBody.length; i++) {
    const currentElement = quizBody[i];
    const nextElement = quizBody[i + 1];

    currentElement.addEventListener('click', function (ev) {
      const answerText = ev.target.textContent;
      if (correctAnsewrs.checker(answerText)) {
        correctAnsewrs.correntCountInc();
      }

      if (nextElement) {
        //currentElement.classList.add('hidden');
        //nextElement.classList.remove('hidden');
        currentElement.style.display = 'none';
        nextElement.style.display = 'block'
      } else {
        //currentElement.classList.add('hidden');
        currentElement.style.display = 'none';
        resultShow();
      }
    });
  }
}

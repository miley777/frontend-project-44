import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const generateRounds = () => {
  const systNumber1 = getRandomNumber(1, 100);
  const systNumber2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, 3);
  const symbol = operators[index];
  let question;
  switch (symbol) {
    case '+':
      question = `${systNumber1} ${symbol} ${systNumber2} `;
      return [question, (systNumber1 + systNumber2)];
    case '-':
      question = `${systNumber1} ${symbol} ${systNumber2} `;
      return [question, (systNumber1 - systNumber2)];
    case '*':
      question = `${systNumber1} ${symbol} ${systNumber2} `;
      return [question, (systNumber1 * systNumber2)];
    default:
      return 'Error';
  }
};

const checkCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  runEngine(gameDescription, generateRounds);
};

export default checkCalc;

import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const getOperator = (operator, number1, number2) => {
  let question;
  switch (operator) {
    case '+':
      question = `${number1} ${operator} ${number2} `;
      return [question, String(number1 + number2)];
    case '-':
      question = `${number1} ${operator} ${number2} `;
      return [question, String(number1 - number2)];
    case '*':
      question = `${number1} ${operator} ${number2} `;
      return [question, String(number1 * number2)];
    default:
      return 'Error';
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, operators.length);
  const operator = operators[index];
  return getOperator(operator, number1, number2);
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  runEngine(description, generateRound);
};

export default runCalc;

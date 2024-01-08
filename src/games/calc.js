import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const calculate = (operator, number1, number2) => {
  let question = `${number1} ${operator} ${number2}`;
  switch (operator) {
    case '+':
      return [question, String(number1 + number2)];
    case '-':
      return [question, String(number1 - number2)];
    case '*':
      return [question, String(number1 * number2)];
    default:
      question = 'Error';
      return question;
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const result = calculate(operator, number1, number2);
  return result;
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  runEngine(description, generateRound);
};

export default runCalc;

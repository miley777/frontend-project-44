import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      throw new Error(`Error : ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, operators.length - 1);
  const operator = operators[index];
  const question = `${number1} ${operator} ${number2}`;
  const result = calculate(operator, number1, number2);
  return [question, result];
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  runEngine(description, generateRound);
};

export default runCalc;

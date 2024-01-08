import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const getMaxGeneralDivisor = (number1, number2) => {
  const arrDiv = [];
  let count = 0;
  arrDiv.push(count);
  const maxNumber = Math.max(number1, number2);
  while (count <= maxNumber) {
    if ((number1 % count === 0) && (number2 % count === 0)) {
      arrDiv.push(count);
    }
    count += 1;
  }
  const result = arrDiv[arrDiv.length - 1];
  return result;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const result = getMaxGeneralDivisor(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, String(result)];
};

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runEngine(description, generateRound);
};

export default runGcd;

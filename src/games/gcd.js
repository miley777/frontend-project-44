import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const getArrayDivisors = (number1, number2) => {
  const arrDiv = [];
  let count = 0;
  arrDiv.push(count);
  const minNumber = Math.min(number1, number2);
  while (count <= minNumber) {
    if ((number1 % count === 0) && (number2 % count === 0)) {
      arrDiv.push(count);
    }
    count += 1;
  }
  return arrDiv;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const divisors = getArrayDivisors(number1, number2);
  const result = divisors[divisors.length - 1];
  const question = `${number1} ${number2}`;
  return [question, String(result)];
};

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runEngine(description, generateRound);
};

export default runGcd;

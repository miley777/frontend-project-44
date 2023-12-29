import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const generateRounds = () => {
  const systNumber1 = getRandomNumber(1, 100);
  const systNumber2 = getRandomNumber(1, 100);
  const arrDiv = [];
  let count = 0;
  arrDiv.push(count);
  const maxSystNumber = Math.max(systNumber1, systNumber2);
  while (count <= maxSystNumber) {
    if ((systNumber1 % count === 0) && (systNumber2 % count === 0)) {
      arrDiv.push(count);
    }
    count += 1;
  }
  const result = arrDiv[arrDiv.length - 1];
  const question = `${systNumber1} ${systNumber2}`;
  return [question, result];
};

const checkGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  runEngine(gameDescription, generateRounds);
};

export default checkGcd;

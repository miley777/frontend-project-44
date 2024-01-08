import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const isEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, answer];
};

const runParity = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, generateRound);
};

export default runParity;

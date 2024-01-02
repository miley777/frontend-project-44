import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const systemAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = String(number);
  return [question, systemAnswer];
};

const runParity = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(description, generateRound);
};

export default runParity;

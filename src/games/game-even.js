import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const generateRounds = () => {
  const systNumber = getRandomNumber(1, 100);
  const systAnswer = systNumber % 2 === 0 ? 'yes' : 'no';
  const question = `${systNumber}`;
  return [question, systAnswer];
};

const checkParity = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(gameDescription, generateRounds);
};

export default checkParity;

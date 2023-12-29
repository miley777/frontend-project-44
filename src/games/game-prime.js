import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const generateRounds = () => {
  const systNumber = getRandomNumber(1, 100);
  let count = 2;
  let result = true;
  if (systNumber < 2) {
    result = false;
  }
  while (count <= systNumber / 2) {
    if (systNumber % count === 0) {
      result = false;
    }
    count += 1;
  }
  const question = `${systNumber}`;
  const systemAnswer = result === true ? 'yes' : 'no';
  return [question, systemAnswer];
};

const checkPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(gameDescription, generateRounds);
};

export default checkPrime;

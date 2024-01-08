import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const isPrime = (primeNumber) => {
  let count = 2;
  let result = true;
  if (primeNumber < 2) {
    result = false;
  }
  while (count <= primeNumber / 2) {
    if (primeNumber % count === 0) {
      result = false;
    }
    count += 1;
  }
  return result;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const result = isPrime(number);
  const question = String(number);
  const answer = result ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(description, generateRound);
};

export default runPrime;

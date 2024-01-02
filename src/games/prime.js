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
  return [result, primeNumber];
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const [result, primeNumber] = isPrime(number);
  const question = String(primeNumber);
  const systemAnswer = result === true ? 'yes' : 'no';
  return [question, systemAnswer];
};

const runPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(description, generateRound);
};

export default runPrime;

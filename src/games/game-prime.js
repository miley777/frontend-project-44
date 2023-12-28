import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting, userName, getIntermidiateCheck, getFinalCheck, getCurrectAnswer,
} from '../index.js';

import getRandomNumber from '../helpers.js';

const isPrime = (primeNumber) => {
  let count = 2;
  if (primeNumber < 2) {
    return false;
  }
  while (count <= primeNumber / 2) {
    if (primeNumber % count === 0) {
      return false;
    }
    count += 1;
  }
  return true;
};

const checkAnswer = () => {
  const systNumber = getRandomNumber(1, 100);
  const result = isPrime(systNumber);
  console.log(`Question: ${systNumber}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = result === true ? 'yes' : 'no';
  return getCurrectAnswer(systemAnswer, usersAnswer);
};

const checkRepeat = () => {
  let count = 0;
  const nameOfUser = userName;
  for (let i = 0; i < 3; i += 1) {
    const answer = checkAnswer();
    getIntermidiateCheck(answer, nameOfUser);
    if (answer !== 0) {
      break;
    }
    count += 1;
  }
  getFinalCheck(count, nameOfUser);
};

const checkPrime = () => {
  questionGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  checkRepeat();
};

export default checkPrime;

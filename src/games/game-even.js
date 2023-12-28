import readlineSync from 'readline-sync';
import {
  // eslint-disable-next-line import/named
  questionGreeting, getCurrectAnswer, getIntermidiateCheck, getFinalCheck, userName,
} from '../index.js';

import getRandomNumber from '../helpers.js';

const isSystemAnswer = (systNumber) => {
  const systAnswer = systNumber % 2 === 0 ? 'yes' : 'no';
  return systAnswer;
};

export const checkAnswer = () => {
  const systNumber = getRandomNumber(1, 100);
  console.log(`Question: ${systNumber}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = isSystemAnswer(systNumber);
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

const checkParity = () => {
  questionGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  checkRepeat();
};

export default checkParity;

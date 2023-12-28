import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting, checkRepeat,
} from '../index.js';

import getRandomNumber from '../helpers.js';

const createArrProgression = (arrProgress, systNumber, systNumberAdd) => {
  let sum = systNumber;
  arrProgress.push(systNumber);
  const maxCount = 10;
  for (let i = 1; i <= maxCount - 1; i += 1) {
    sum += systNumberAdd;
    arrProgress.push(sum);
  }
};

export const checkAnswer = () => {
  const systNumber = getRandomNumber(1, 10);
  const systNumberAdd = getRandomNumber(1, 10);
  const arrProgress = [];
  createArrProgression(arrProgress, systNumber, systNumberAdd);
  const numberInArr = getRandomNumber(1, 4) + 5;
  const index = getRandomNumber(1, numberInArr);
  const copyArrProgress = arrProgress.slice(0, numberInArr);
  const secretNumber = arrProgress[index];
  copyArrProgress[index] = '..';
  console.log(`Question: ${copyArrProgress.join(' ')}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const desicion = secretNumber === Number(usersAnswer) ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${secretNumber}'`);
  }
  return desicion;
};
/*
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
*/
const checkProgression = () => {
  questionGreeting();
  console.log('What number is missing in the progression?');
  checkRepeat();
};

export default checkProgression;

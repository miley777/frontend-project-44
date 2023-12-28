import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  // eslint-disable-next-line import/named
  questionGreeting, checkRepeat,
} from '../index.js';

import getRandomNumber from '../helpers.js';

const getArrDivisors = (systNumber1, systNumber2) => {
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
  return result;
};

export const checkAnswer = () => {
  const systNumber1 = getRandomNumber(1, 100);
  const systNumber2 = getRandomNumber(1, 100);
  console.log(`Question: ${systNumber1} ${systNumber2}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const result = getArrDivisors(systNumber1, systNumber2);
  const desicion = result === Number(usersAnswer) ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
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
const checkGcd = () => {
  questionGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  checkRepeat();
};

export default checkGcd;

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionGreeting,
  getRandomNumber, userName, getIntermidiateCheck, getFinalCheck, getCurrectAnswer,
} from '../../src/index.js';

const checkAnswer = () => {
  const systNum = getRandomNumber();
  console.log(`Question: ${systNum}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = systNum % 2 === 0 ? 'yes' : 'no';
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

checkParity();

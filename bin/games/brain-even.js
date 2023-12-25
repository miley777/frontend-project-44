#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionGreeting, randomNum, userName, intermidiateCheck, finalCheck, getCurrectAnswer,
} from '../../src/index.js';

const checkAnswer = () => {
  const systNum = randomNum();
  console.log(`Question: ${systNum}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = systNum % 2 === 0 ? 'yes' : 'no';
  return getCurrectAnswer(systemAnswer, usersAnswer);
};

const checkParity = () => {
  questionGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  const countCorrect = 3;
  const nameOfUser = userName;
  for (let i = 0; i < countCorrect; i += 1) {
    const answer = checkAnswer();
    intermidiateCheck(answer, nameOfUser);
    if (answer !== 0) {
      break;
    }
    count += 1;
  }
  finalCheck(count, nameOfUser);
};

checkParity();

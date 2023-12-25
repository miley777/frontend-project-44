#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  questionGreeting, randomNum, userName, intermidiateCheck, finalCheck,
} from '../../src/index.js';

const checkAnswer = () => {
  const systNum = randomNum();
  console.log(`Question: ${systNum}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = systNum % 2 === 0 ? 'yes' : 'no';
  let desicion = 0;
  if (systemAnswer !== usersAnswer) {
    desicion = 1;
    if (desicion !== 0) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
    }
  }
  return desicion;
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

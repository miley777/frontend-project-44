#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import { questionGreeting, randomNum, userName } from '../../src/index.js';

const checkAnswer = () => {
  const systNum = randomNum();
  let result = true;
  let count = 2;
  if (systNum < 2) {
    result = false;
  }
  while (count <= systNum / 2) {
    if (systNum % count === 0) {
      result = false;
    }
    count += 1;
  }
  console.log(`Question: ${systNum}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = result === true ? 'yes' : 'no';
  let desicion = 0;
  if (systemAnswer !== usersAnswer) {
    desicion = 1;
    if (desicion !== 0) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
    }
  }
  return desicion;
};

const checkPrime = () => {
  questionGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let count = 0;
  const countCorrect = 3;
  for (let i = 0; i < countCorrect; i += 1) {
    const answer = checkAnswer();
    if (answer === 0) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

checkPrime();

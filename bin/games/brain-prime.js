#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting, randomNum, userName, intermidiateCheck, finalCheck,
} from '../../src/index.js';

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
  const systNum = randomNum();
  const result = isPrime(systNum);
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

checkPrime();
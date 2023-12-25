#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  // eslint-disable-next-line import/named
  questionGreeting, randomNum, userName, intermidiateCheck, finalCheck,
} from '../../src/index.js';

const getArrDiv = (systNum1, systNum2) => {
  const arrDiv = [];
  let count = 0;
  arrDiv.push(count);
  const minSystNum = Math.min(systNum1, systNum2);
  while (count <= minSystNum) {
    if ((systNum1 % count === 0) && (systNum2 % count === 0)) {
      arrDiv.push(count);
    }
    count += 1;
  }
  const result = arrDiv[arrDiv.length - 1];
  return result;
};

const checkAnswer = () => {
  const systNum1 = randomNum();
  const systNum2 = randomNum();
  console.log(`Question: ${systNum1} ${systNum2}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const result = getArrDiv(systNum1, systNum2);
  const desicion = result === Number(usersAnswer) ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
  }
  return desicion;
};

const checkGcd = () => {
  questionGreeting();
  console.log('Find the greatest common divisor of given numbers.');
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

checkGcd();

/*
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import { questionGreeting, randomNum, userName } from '../../src/index.js';

const checkAnswer = () => {
  const systNum1 = randomNum();
  const systNum2 = randomNum();
  console.log(`Question: ${systNum1} ${systNum2}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const arrDiv = [];
  let count = 0;
  arrDiv.push(count);
  const minSystNum = Math.min(systNum1, systNum2);
  while (count <= minSystNum) {
    if ((systNum1 % count === 0) && (systNum2 % count === 0)) {
      arrDiv.push(count);
    }
    count += 1;
  }
  const result = arrDiv[arrDiv.length - 1];
  const desicion = result === Number(usersAnswer) ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
  }
  return desicion;
};

const checkGcd = () => {
  questionGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  let count = 0;
  const countCorrect = 3;
  const nameOfUser = userName;
  for (let i = 0; i < countCorrect; i += 1) {
    const answer = checkAnswer();
    if (answer === 0) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${nameOfUser}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${nameOfUser}`);
  }
};

checkGcd();

*/

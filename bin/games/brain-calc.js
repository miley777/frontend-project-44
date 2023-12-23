#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import { questionGreeting, randomNum, userName } from '../../src/index.js';

const randomSym = (arr, max) => {
  const index = Math.floor(Math.random() * max);
  return arr[index];
};

const checkAnswer = () => {
  const systNum1 = randomNum();
  const systNum2 = randomNum();
  const arrSymbols = ['+', '-', '*'];
  const symbols = randomSym(arrSymbols, 3);
  console.log(`Question: ${systNum1} ${symbols} ${systNum2}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  let result;
  switch (symbols) {
    case '+':
      result = systNum1 + systNum2;
      break;
    case '-':
      result = systNum1 - systNum2;
      break;
    default:
      result = systNum1 * systNum2;
  }
  const desicion = result === Number(usersAnswer) ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${result}'`);
  }
  return desicion;
};

const checkCalc = () => {
  questionGreeting();
  console.log('What is the result of the expression?');
  let count = 0;
  const countCorrect = 3;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < countCorrect; i++) {
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

checkCalc();

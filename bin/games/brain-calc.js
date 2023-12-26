#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting, getRandomNum, userName, getIntermidiateCheck, getFinalCheck,
} from '../../src/index.js';

const checkAnswer = () => {
  const systNum1 = getRandomNum();
  const systNum2 = getRandomNum();
  const arrSymbols = ['+', '-', '*'];
  const index = getRandomNum(3);
  const symbol = arrSymbols[index];
  console.log(`Question: ${systNum1} ${symbol} ${systNum2}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  let result;
  switch (symbol) {
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

const checkCalc = () => {
  questionGreeting();
  console.log('What is the result of the expression?');
  checkRepeat();
};

checkCalc();

#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting, getRandomNumber, userName, getIntermidiateCheck, getFinalCheck,
} from '../../src/index.js';

import {
  getRandomNumber,
} from '../../src/helpers.js';

const getSymbol = (symbol, systNum1, systNum2) = {
  let result;
  const operator = symbol;
  switch (operator) {
    case '+':
      result = systNum1 + systNum2;
      return result;
      break;
    case '-':
      result = systNum1 - systNum2;
      return result;
      break;
    default:
      result = systNum1 * systNum2;
      return result;
  }
};

const checkAnswer = () => {
  const systNum1 = getRandomNumber();
  const systNum2 = getRandomNumber();
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(3);
  const symbol = operators[index];
  console.log(`Question: ${systNum1} ${symbol} ${systNum2}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  let resultSymbol = getSymbol(symbol, systNum1, systNum2);
  const desicion = resultSymbol === Number(usersAnswer) ? 0 : 1;
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

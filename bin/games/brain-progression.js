#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting, randomNum, userName, randomIndex,
} from '../../src/index.js';

const checkAnswer = () => {
  const systNum = randomNum();
  const systNumAdd = randomNum();
  const arrProgress = [];
  const maxCount = 10;
  let sum = systNum;
  arrProgress.push(systNum);
  for (let i = 1; i <= maxCount - 1; i += 1) {
    sum += systNumAdd;
    arrProgress.push(sum);
  }
  const numberInArr = randomIndex(4) + 5;
  const index = randomIndex(numberInArr);
  const copyArrProgress = arrProgress.slice(0, numberInArr);
  const secretNum = arrProgress[index];
  copyArrProgress[index] = '..';
  console.log(`Question: ${copyArrProgress.join(' ')}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const desicion = secretNum === Number(usersAnswer) ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${secretNum}'`);
  }
  return desicion;
};

const checkProgression = () => {
  questionGreeting();
  console.log('What number is missing in the progression?');
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

checkProgression();

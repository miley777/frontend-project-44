#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import {
  questionGreeting,
  getRandomNumber, userName, getIntermidiateCheck, getFinalCheck,
} from '../../src/index.js';

const checkAnswer = () => {
  const systNum = getRandomNumber();
  const systNumAdd = getRandomNumber();
  const arrProgress = [];
  const maxCount = 10;
  let sum = systNum;
  arrProgress.push(systNum);
  for (let i = 1; i <= maxCount - 1; i += 1) {
    sum += systNumAdd;
    arrProgress.push(sum);
  }
  const numberInArr = getRandomNumber(4) + 5;
  const index = getRandomNumber(numberInArr);
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

const checkProgression = () => {
  questionGreeting();
  console.log('What number is missing in the progression?');
  checkRepeat();
};

checkProgression();

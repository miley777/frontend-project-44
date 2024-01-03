import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const getArrayProgression = (number, numberAdd) => {
  const arrProgress = [];
  let sum = number;
  arrProgress.push(number);
  const maxCount = 10;
  for (let i = 1; i <= maxCount - 1; i += 1) {
    sum += numberAdd;
    arrProgress.push(sum);
  }
  return arrProgress;
};

const generateRound = () => {
  const number = getRandomNumber(1, 10);
  const numberAdd = getRandomNumber(1, 10);
  const arrProgress = getArrayProgression(number, numberAdd);
  const numberInArr = getRandomNumber(1, 4) + 5;
  const index = getRandomNumber(1, numberInArr);
  const copyArrProgress = arrProgress.slice(0, numberInArr);
  const secretNumber = arrProgress[index];
  copyArrProgress[index] = '..';
  const question = String(copyArrProgress.join(' '));
  return [question, String(secretNumber)];
};

const runProgression = () => {
  const description = 'What number is missing in the progression?';
  runEngine(description, generateRound);
};

export default runProgression;

import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const generateRounds = () => {
  const systNumber = getRandomNumber(1, 10);
  const systNumberAdd = getRandomNumber(1, 10);
  const arrProgress = [];
  let sum = systNumber;
  arrProgress.push(systNumber);
  const maxCount = 10;
  for (let i = 1; i <= maxCount - 1; i += 1) {
    sum += systNumberAdd;
    arrProgress.push(sum);
  }
  const numberInArr = getRandomNumber(1, 4) + 5;
  const index = getRandomNumber(1, numberInArr);
  const copyArrProgress = arrProgress.slice(0, numberInArr);
  const secretNumber = arrProgress[index];
  copyArrProgress[index] = '..';
  const question = `${copyArrProgress.join(' ')}`;
  return [question, secretNumber];
};

const checkProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  runEngine(gameDescription, generateRounds);
};

export default checkProgression;

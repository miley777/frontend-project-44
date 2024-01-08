import runEngine from '../index.js';

import getRandomNumber from '../helpers.js';

const getProgression = (number, numberAdd, progressionLength) => {
  const progression = [];
  let sum = number;
  progression.push(number);
  for (let i = 1; i <= progressionLength - 1; i += 1) {
    sum += numberAdd;
    progression.push(sum);
  }
  return progression;
};

const generateRound = () => {
  const number = getRandomNumber(1, 10);
  const numberAdd = getRandomNumber(1, 10);
  const minProgressionLength = 5;
  const progressionLength = getRandomNumber(minProgressionLength, 10);
  const progression = getProgression(number, numberAdd, progressionLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const secretNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(secretNumber)];
};

const runProgression = () => {
  const description = 'What number is missing in the progression?';
  runEngine(description, generateRound);
};

export default runProgression;

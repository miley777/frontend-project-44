import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-unresolved
import checkAnswer from './games/game-calc.js';
import checkAnswer from './games/game-even.js';
import checkAnswer from './games/game-gcd.js';
import checkAnswer from './games/game-prime.js';
import checkAnswer from './games/game-progression.js';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

export const questionGreeting = () => {
  console.log(`Hello, ${userName}!`);
};

export const getCurrectAnswer = (systemAnswer, usersAnswer) => {
  let desicion = 0;
  if (systemAnswer !== usersAnswer) {
    desicion = 1;
    if (desicion !== 0) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
    }
  }
  return desicion;
};

/*
const getIntermidiateCheck = (answer, nameOfUser) => {
  if (answer === 0) {
    console.log('Correct!');
  } else {
    console.log(`Let's try again, ${nameOfUser}!`);
  }
};
*/

/*
const getFinalCheck = (count, nameOfUser) => {
  if (count === 3) {
    console.log(`Congratulations, ${nameOfUser}!`);
  }
};
*/

// export { userName };

export const checkRepeat = () => {
  let count = 0;
  // const nameOfUser = userName;
  for (let i = 0; i < 3; i += 1) {
    const answer = checkAnswer();
    if (answer === 0) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
    if (answer !== 0) {
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  // getFinalCheck(count, nameOfUser);
};

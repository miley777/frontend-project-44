#!/usr/bin/env node
import readlineSync from 'readline-sync';

const checkAnswer = () => {
  const systNum = Math.floor(Math.random() * 10);
  console.log(`Question: ${systNum}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = systNum % 2 === 0 ? 'yes' : 'no';
  let desicion = 0;
  if (systemAnswer !== usersAnswer) {
    desicion = usersAnswer === 'yes' ? 1 : -1;
  }
  return desicion;
};

const checkParity = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  const countCorrect = 3;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < countCorrect; i++) {
    const answer = checkAnswer();
    if (answer === 0) {
      count += 1;
      console.log('Correct!');
    } else if (answer !== 0) {
      if (answer === 1) {
        console.log("'yes' is wrong ;(. Correct answer was 'no'");
      } else if (answer === -1) {
        console.log("'no' is wrong ;(. Correct answer was 'yes'");
      }
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

checkParity();

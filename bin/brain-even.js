import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const checkAnswer = () => {
  const systNum = Math.floor(Math.random() * 10);
  console.log(`Question: ${systNum}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = systNum % 2 === 0 ? 'yes' : 'no';
  if (systemAnswer !== usersAnswer) {
    return 1;
  }
  return 0;
};

const checkParity = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  const countCorrect = 3;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < countCorrect; i++) {
    const answer = checkAnswer();
    if (answer === 0) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${getName.userName}`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${getName.userName}`);
  }
};

getName();
checkParity();

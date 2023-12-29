import readlineSync from 'readline-sync';

const runEngine = (gameDiscription, answer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDiscription);
  let countRounds = 0;
  const rounds = 3;
  while (rounds !== countRounds) {
    const [question, rightAnswer] = answer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const systemAnswer = rightAnswer;
    let formatUsersAnswer;
    if ((typeof userAnswer === 'string') && (Number(userAnswer) !== systemAnswer)) {
      formatUsersAnswer = userAnswer;
    } else {
      formatUsersAnswer = Number(userAnswer);
    }
    const desicion = systemAnswer !== formatUsersAnswer ? 1 : 0;
    countRounds += 1;
    if (desicion === 0) {
      console.log('Correct!');
    } else {
      console.log(`'${formatUsersAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (countRounds === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runEngine;

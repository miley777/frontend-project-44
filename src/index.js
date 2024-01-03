import readlineSync from 'readline-sync';

const runEngine = (discription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(discription);
  let countRounds = 0;
  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const [question, systemAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const desicion = systemAnswer === userAnswer;
    if (desicion !== true) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    countRounds += 1;
  }
  if (countRounds === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runEngine;

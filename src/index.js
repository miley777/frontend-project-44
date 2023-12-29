import readlineSync from 'readline-sync';

// console.log('Welcome to the Brain Games!');

// const userName = readlineSync.question('May I have your name? ');

/*
export const questionGreeting = () => {
  console.log(`Hello, ${userName}!`);
};
*/
/*
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

export const getIntermidiateCheck = (answer, nameOfUser) => {
  if (answer === 0) {
    console.log('Correct!');
  } else {
    console.log(`Let's try again, ${nameOfUser}!`);
  }
};

export const getFinalCheck = (count, nameOfUser) => {
  if (count === 3) {
    console.log(`Congratulations, ${nameOfUser}!`);
  }
};
*/
// export { userName };

const runEngine = (gameDisc, answer) => {
  console.log('Welcome to the Brain Games!');
  // return desicion;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDisc);
  let countRepeatAnswer = 0;
  const rightCount = 3;
  console.log(answer);
  while (rightCount !== countRepeatAnswer) {
    console.log(answer);
    const [question, rightAnswer] = answer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const systemAnswer = rightAnswer;
    console.log(systemAnswer);
    const usersAnswer = Number(userAnswer);
    const desicion = systemAnswer !== usersAnswer ? 1 : 0;
    countRepeatAnswer += 1;
    if (desicion === 0) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (countRepeatAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
// getFinalCheck(count, nameOfUser);
};

export default runEngine;

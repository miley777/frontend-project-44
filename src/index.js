import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

// const userName = readlineSync.question('May I have your name? ');

/*
export const questionGreeting = () => {
  console.log(`Hello, ${userName}!`);
};
*/

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

export const runEngine = (gameDisc, answer) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(gameDisc);
  console.log(`Hello, ${userName}!`);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    // const answer = checkAnswer;
    if (answer === 0) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    count += 1;
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
  // getFinalCheck(count, nameOfUser);
};

// export default runEngine;

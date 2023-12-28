import readlineSync from 'readline-sync';

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

export { userName };

export const checkRepeat = (checkAnswer) => {
  let count = 0;
  const nameOfUser = userName;
  for (let i = 0; i < 3; i += 1) {
    getIntermidiateCheck(checkAnswer, nameOfUser);
    if (checkAnswer !== 0) {
      break;
    }
    count += 1;
  }
  getFinalCheck(count, nameOfUser);
};

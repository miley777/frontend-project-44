import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

export const questionGreeting = () => {
  console.log(`Hello, ${userName}!`);
};

export const randomNum = (max = 10) => {
  const number = Math.floor(Math.random() * max);
  return number;
};

export const intermidiateCheck = (answer, nameOfUser) => {
  if (answer === 0) {
    console.log('Correct!');
  } else {
    console.log(`Let's try again, ${nameOfUser}`);
  }
};

export const finalCheck = (count, nameOfUser) => {
  if (count === 3) {
    console.log(`Congratulations, ${nameOfUser}`);
  }
};
export { userName };

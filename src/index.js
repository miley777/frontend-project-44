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

export const randomIndex = (max = 9) => {
  const index = Math.floor(Math.random() * max);
  return index;
};

export { userName };

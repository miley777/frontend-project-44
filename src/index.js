import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

export const questionGreeting = () => {
  console.log(`Hello, ${userName}!`);
};

export const randomNum = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

export { userName };

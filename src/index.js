import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

export const questionGreeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

export const randomNum = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

export { userName };

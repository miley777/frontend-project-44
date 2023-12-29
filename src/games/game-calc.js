// import readlineSync from 'readline-sync';
// eslint-disable-next-line import/named, import/no-cycle
import runEngine from '../index.js';

// eslint-disable-next-line import/named
import getRandomNumber from '../helpers.js';

const generateRounrds = () => {
  const systNumber1 = getRandomNumber(1, 100);
  const systNumber2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(0, 3);
  const symbol = operators[index];
  let question;
  switch (symbol) {
    case '+':
      question = `${systNumber1} ${symbol} ${systNumber2} `;
      return [question, (systNumber1 + systNumber2)];
    case '-':
      question = `${systNumber1} ${symbol} ${systNumber2} `;
      return [question, (systNumber1 - systNumber2)];
    case '*':
      question = `${systNumber1} ${symbol} ${systNumber2} `;
      return [question, (systNumber1 * systNumber2)];
    default:
      return 'Error';
  }
};

// export const checkAnswer = () => {
// const index = getRandomNumber(0, 3);
// const symbol = operators[index];
/*
  console.log(`Question: ${systNumber1} ${symbol} ${systNumber2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const systemAnswer = getSymbol(symbol, systNumber1, systNumber2);
  const usersAnswer = Number(userAnswer);
  */
// getCurrectAnswer(systemAnswer, usersAnswer);
/*
  const desicion = systemAnswer === usersAnswer ? 0 : 1;
  if (desicion !== 0) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'`);
  }
  return desicion;
  */
// };

const checkCalc = () => {
  // questionGreeting();
  const gameDescription = 'What is the result of the expression?';
  // let result = ;
  runEngine(gameDescription, generateRounrds());
};

export default checkCalc;

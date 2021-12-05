import getRandomInt from '../getRandom.js';
import gameShell from '../index.js';

const calc = (a, b, operator) => {
  let result;
  if (operator === '+') {
    result = a + b;
  }
  if (operator === '-') {
    result = a - b;
  }
  if (operator === '*') {
    result = a * b;
  }
  return result;
};

const round = 'What is the result of the expression?';

const gameCalculator = () => {
  const operators = ['+', '-', '*'];
  const randomNum1 = getRandomInt(0, 10);
  const randomNum2 = getRandomInt(0, 10);
  const operator = operators[getRandomInt(0, operators.length)];
  const question = `${randomNum1}${operator}${randomNum2}`;
  const correctAnswer = calc(randomNum1, randomNum2, operator).toString();
  return [question, correctAnswer];
};

const brainCalc = () => gameShell(round, gameCalculator);

export default brainCalc;

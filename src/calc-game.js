import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1)) + min1;
};
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
export const dialog = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const operators = ['+', '-', '*'];
  const num = 3;
  for (let i = 1; i <= num; i += 1) {
    const randomNum1 = getRandomInt(0, 100);
    const randomNum2 = getRandomInt(0, 100);
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const correctAnswer = calc(randomNum1, randomNum2, operator).toString();
    console.log('What is the result of the expression?');
    const question = `${randomNum1}${operator}${randomNum2}`;
    console.log('Question: ', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === num) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

import getRandomInt from '../getRandom.js';
import gameShell from '../index.js';

const calc = (a, b) => {
  let result = 1;
  if (a === 0) {
    result = Math.abs(b);
  }
  if (b === 0) {
    result = Math.abs(a);
  }
  let num;
  if (Math.abs(a) > Math.abs(b)) {
    num = b;
  }
  num = Math.abs(a);
  for (let i = 1; i <= num; i += 1) {
    if ((a % i === 0) && (b % i === 0)) {
      result = i;
    }
  }
  return result;
};

const rule = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  const randomNum1 = getRandomInt(0, 100);
  const randomNum2 = getRandomInt(0, 100);
  const question = `${randomNum1} ${randomNum2}`;
  const correctAnswer = calc(randomNum1, randomNum2).toString();
  return [question, correctAnswer];
};

const brainGcd = () => gameShell(rule, gameGcd);

export default brainGcd;

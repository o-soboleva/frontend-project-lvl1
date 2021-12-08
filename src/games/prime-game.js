import getRandomInt from '../getRandom.js';
import gameShell from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gamePrime = () => {
  let correctAnswer;
  const question = getRandomInt(0, 1000);
  if (question === 0 || question === 1) {
    correctAnswer = 'no';
  } else if (question === 2) {
    correctAnswer = 'yes';
  } else {
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) {
        correctAnswer = 'no';
        break;
      }
      correctAnswer = 'yes';
    }
  }
  return [question, correctAnswer];
};

const brainPrime = () => gameShell(rule, gamePrime);

export default brainPrime;

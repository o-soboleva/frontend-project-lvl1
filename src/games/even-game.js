import getRandomInt from '../getRandom.js';
import gameShell from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const question = getRandomInt(0, 1000);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => gameShell(rule, gameEven);

export default brainEven;

import readlineSync from 'readline-sync';
import getRandomInt from '../getRandom.js';

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let randomNum;
  const num = 3;
  for (let i = 1; i <= num; i += 1) {
    randomNum = getRandomInt(0, 100000);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log('Question: ', randomNum);
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
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

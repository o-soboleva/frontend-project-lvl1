import readlineSync from 'readline-sync';

const gameShell = (rule, gameQuestionAnswer) => {
  const numRound = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 1; i <= numRound; i += 1) {
    const [gameQuestion, correctAnswer] = gameQuestionAnswer();
    console.log('Question:', gameQuestion);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === numRound) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default gameShell;

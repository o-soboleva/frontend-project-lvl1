import readlineSync from 'readline-sync';

const dialog = () => {
  console.log('Welcome to the Brain Games!!!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default dialog;

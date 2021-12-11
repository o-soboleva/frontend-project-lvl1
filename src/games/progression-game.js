import getRandomInt from '../getRandom.js';
import gameShell from '../index.js';

const formProgression = (a, step, lengthProgression, positionX) => {
  let arr = [];
  arr.push(a);
  for (let i = 1; i < lengthProgression; i += 1) {
    arr.push(arr[i - 1] + step);
  }
  const result = arr[positionX];
  const arr1 = arr.slice(0, positionX);
  const arr2 = arr.slice(positionX + 1, lengthProgression);
  const arr3 = '..';
  arr = arr1.concat(arr3, arr2);
  return [result, arr];
};

const rule = 'What number is missing in the progression?';

const gameProgression = () => {
  const randomN = getRandomInt(6, 10); // количество членов прогрессии
  const randomPositionX = getRandomInt(0, randomN - 2); // позиция пропущенного числа
  const firstNum = getRandomInt(0, 50);// первый член прогрессии
  const randomStep = getRandomInt(1, 10);
  const [res, arr] = formProgression(firstNum, randomStep, randomN, randomPositionX);
  const correctAnswer = res.toString();
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const brainProgression = () => gameShell(rule, gameProgression);

export default brainProgression;

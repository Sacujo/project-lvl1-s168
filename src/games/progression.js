import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';

const generateArray = () => {
  const array = [randomInt(100)];
  const diss = randomInt(10);
  for (let i = 1; i < 10; i += 1) {
    array.push(array[i - 1] + diss);
  }
  return array;
};

const generateQuestionAndAnswer = () => {
  const array = generateArray();
  const elemNum = randomInt(array.length - 1);
  const correctAnswer = String(array[elemNum]);
  array[elemNum] = '..';
  const question = `${array}`;
  return cons(question, correctAnswer);
};

export default () => {
  const descriptionOfGame = 'What number is missing in this progression?';
  startOfGame(generateQuestionAndAnswer, descriptionOfGame);
};

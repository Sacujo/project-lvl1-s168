import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';

const getMaxOfArray = (numArray) => {
  const maxOfArray = Math.max.apply(null, numArray);
  return maxOfArray;
};

const getMinOfArray = (numArray) => {
  const minOfArray = Math.min.apply(null, numArray);
  return minOfArray;
};

const balanceOfNum = (num) => {
  const numArray = String(num).split('');
  const makeBalance = (arr) => {
    const sortedArray = arr.sort();
    const maxOfArray = getMaxOfArray(arr);
    const minOfArray = getMinOfArray(arr);
    if (minOfArray + 1 >= maxOfArray) {
      return sortedArray;
    }
    sortedArray[0] = minOfArray + 1;
    sortedArray[sortedArray.length - 1] = maxOfArray - 1;
    return makeBalance(sortedArray);
  };
  const balanced = makeBalance(numArray).join('');
  return balanced;
};

const generateQuestionAndAnswer = () => {
  const num = randomInt(1000);
  const question = `${num}`;
  const correctAnswer = balanceOfNum(num);
  return cons(question, correctAnswer);
};

export default () => {
  const descriptionOfGame = 'Balance the given number.';
  startOfGame(generateQuestionAndAnswer, descriptionOfGame);
};

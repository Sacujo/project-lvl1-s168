import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';

const isPrime = (num) => {
  const iter = (counter) => {
    if (num < 2) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }
    if (counter < num / 2) {
      return iter(counter + 1);
    }
    return true;
  };
  return iter(2);
};

const generateQuestionAndAnswer = () => {
  const num = randomInt(1000);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const descriptionOfGame = 'Is this number prime?';
  startOfGame(generateQuestionAndAnswer, descriptionOfGame);
};

import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';

const askQuestion = () => {
  const num = randomInt(100);
  const question = `${num}`;
  const correctAnswer = ((num % 2) === 0) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const descriptionOfGame = 'Answer "yes" if number even otherwise answer "no" \n';
  startOfGame(askQuestion, descriptionOfGame);
};

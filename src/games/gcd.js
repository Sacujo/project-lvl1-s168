import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';


const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  } return gcd(num2, num1 % num2);
};

const askQuestion = () => {
  const num1 = randomInt(10);
  const num2 = randomInt(10);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return cons(question, correctAnswer);
};

export default () => {
  const descriptionOfGame = 'Find the greatest common divisor of given numbers. \n';
  startOfGame(askQuestion, descriptionOfGame);
};

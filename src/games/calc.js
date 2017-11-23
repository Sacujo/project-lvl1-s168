import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';


const generateRandomOper = () => {
  switch (randomInt(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};


const generateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const generateQuestionAndAnswer = () => {
  const num1 = randomInt(10);
  const num2 = randomInt(10);
  const operation = generateRandomOper();
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = String(generateResult(num1, num2, operation));
  return cons(question, correctAnswer);
};


export default () => {
  const descriptionOfGame = 'What is the result of the expression?';
  startOfGame(generateQuestionAndAnswer, descriptionOfGame);
};

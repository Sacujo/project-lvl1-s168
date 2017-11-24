import randomInt from 'random-int';
import { cons } from 'hexlet-pairs';
import startOfGame from '..';

const genElemOfProg = (coreElem, diss, n) => {
  const currentElem = (coreElem + (diss * n));
  return currentElem;
};

const genQuestion = (ansIndex, coreElem, diss, n) => {
  let currentElem = genElemOfProg(coreElem, diss, n);
  if (n === 10) {
    return String(genElemOfProg(coreElem, diss, n));
  }
  if (n === ansIndex) {
    currentElem = '..';
  }
  return `${currentElem} ${genQuestion(ansIndex, coreElem, diss, n + 1)}`;
};

const generateQuestionAndAnswer = () => {
  const coreElem = randomInt(100);
  const ansIndex = randomInt(1, 10);
  const diss = randomInt(1, 10);
  const correctAnswer = String(genElemOfProg(coreElem, diss, ansIndex));
  const question = genQuestion(ansIndex, coreElem, diss, 1);
  return cons(question, correctAnswer);
};

export default () => {
  const descriptionOfGame = 'What number is missing in this progression?';
  startOfGame(generateQuestionAndAnswer, descriptionOfGame);
};

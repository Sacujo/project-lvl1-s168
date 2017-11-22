import randomInt from 'random-int';
import startOfGame from '..';

const askQuestion = () => {
  const num = randomInt(100);
  console.log(`Question: ${num}`);
  return ((num % 2) === 0) ? 'yes' : 'no';
};

export default () => {
  const descriptionOfGame = 'Answer "yes" if number even otherwise answer "no" \n';
  startOfGame(askQuestion, descriptionOfGame);
};

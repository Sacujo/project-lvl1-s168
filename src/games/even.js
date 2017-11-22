import randomInt from 'random-int';
import startOfGame from '..';

export const descriptionOfGame = 'Answer "yes" if number even otherwise answer "no" \n';


const askQuestion = () => {
  const num = randomInt(100);
  console.log(`Question: ${num}`);
  return ((num % 2) === 0) ? 'yes' : 'no';
};

export default () => {
  startOfGame(askQuestion, descriptionOfGame);
};

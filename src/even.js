import randomInt from 'random-int';
import { askUserName, askUserAnswer, welcome } from '.';

const correctAnswer = (num) => {
  return ((num % 2) === 0) ? 'yes' : 'no';
};

export default () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no" \n');
  const userName = askUserName();
  for (let i = 0; i < 3; i += 1) {
    const num = randomInt(100);
    console.log(`Question: ${num}`);
    const userAnswer = askUserAnswer();
    if (userAnswer === correctAnswer(num)) {
      console.log('Correct!');
    }
    else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(num)}'.
Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

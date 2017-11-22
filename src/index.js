import readlineSync from 'readline-sync';

const askUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const greetings = (descriptionOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(descriptionOfGame);
  const userName = askUserName();
  return userName;
};

const failingOfGame = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let/s try again, ${userName}`);
};

export default (askQuestion, descriptionOfGame) => {
  const userName = greetings(descriptionOfGame);
  for (let counter = 0; counter < 3; counter += 1) {
    const correctAnswer = askQuestion();
    const userAnswer = askUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else return failingOfGame(userAnswer, correctAnswer, userName);
  }
  return console.log(`Congratulations, ${userName}!`);
};

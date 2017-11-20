import readlineSync from 'readline-sync';

let getUserName = () => readlineSync.question('May I have your name? ');

console.log('Welcome to the Brain Games!');
console.log('Hello, ' + getUserName() + '!');

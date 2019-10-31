import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameCore = (gameRules, question) => {
  const userName = readlineSync.question(`Welcome to the Brain Games!\n${gameRules}\n\nMay i have your name?`);
  console.log(`Hello, ${userName}!`);
  for (let askCount = 0; askCount < 3; askCount += 1) {
    const pairQuestionResult = question();
    const questionForUser = car(pairQuestionResult);
    const correctAnswer = cdr(pairQuestionResult);
    const userAnswer = readlineSync.question(`Question: ${questionForUser}\nYour answer: `);
    const checkAnswer = userAnswer === correctAnswer;
    const logForWrongAnswer = `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    if (userAnswer === '') return '';
    if (checkAnswer) console.log('Correct!');
    if (!checkAnswer) {
      console.log(logForWrongAnswer);
      return '';
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return '';
};

export default gameCore;

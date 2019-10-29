import { cons } from '@hexlet/pairs';
import gameCore from '../core';
import getRandomNumber from '../numgenerator';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameQuestionAndResult = () => {
  const randomNumber = getRandomNumber();
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, String(result));
};

const evenGame = () => gameCore(gameRule, getGameQuestionAndResult);

export default evenGame;

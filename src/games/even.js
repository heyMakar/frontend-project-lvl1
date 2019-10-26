import questionAndResult from '../question';
import gameCore from '../core';
import generator from '../numgenerator';

const textRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameQuestionAndResult = () => {
  const question = generator();
  const result = isEven(question) ? 'yes' : 'no';
  return questionAndResult(question, result);
};

const evenGame = () => gameCore(textRule, gameQuestionAndResult);

export default evenGame;
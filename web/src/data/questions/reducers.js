import { QUESTION_TYPES } from '@/const';
import * as ActionTypes from '@/data/rootActionTypes';
import update from 'immutability-helper';
import shortid from 'shortid';

const initState = [
  { type: QUESTION_TYPES.MULTIPLE_CHOICE, image: null, numChoices: 5, answer: [2], id: shortid() },
  {
    type: QUESTION_TYPES.MULTIPLE_CHOICE,
    image: null,
    numChoices: 5,
    answer: [2, 3],
    id: shortid(),
  },
];

const getNewQuestion = () => ({
  type: QUESTION_TYPES.MULTIPLE_CHOICE,
  image: null,
  numChoices: 5,
  answer: [2],
  id: shortid(),
});

const questions = (state = initState, action = {}) => {
  switch (action.type) {
    case ActionTypes.ADD_QUESTION:
      return update(state, { $push: [getNewQuestion()] });

    case ActionTypes.CHANGE_TYPE:
      return update(state, {
        [action.idx]: { type: { $set: action.checked } },
      });

    case ActionTypes.TOGGLE_ANSWER:
      if (action.value) {
        return update(state, {
          [action.idx]: { answer: { $push: [action.answerIdx] } },
        });
      }

      return state.map((question, qIdx) => {
        if (qIdx !== action.idx) return question;

        return {
          ...question,
          answer: question.answer.filter((item) => item !== action.answerIdx),
        };
      });

    case ActionTypes.REMOVE_QUESTION:
      return update(state, { $splice: [[action.idx, 1]] });

    case ActionTypes.ADD_IMAGE_QUESTION:
      return update(state, {
        [action.idx]: {
          image: { $set: action.file },
        },
      });

    default:
      return state;
  }
};

export default questions;

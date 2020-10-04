import * as ActionTypes from '@/data/rootActionTypes';
import { combineReducers } from 'redux';
import { QUESTION_TYPES } from '@/const';
import update from 'immutability-helper';

const initExamState = {
  classTitle: '기본 이름',
  testName: '기본 시험지',
  testTime: '시험 시간',
};

const info = (state = initExamState) => state;

const initQuestionState = [
  { img: null, type: QUESTION_TYPES.MULTIPLE_CHOICE, answer: [0, 1], numChoices: 5 },
  { img: null, type: QUESTION_TYPES.MULTIPLE_CHOICE, answer: [3], numChoices: 4 },
  { img: null, type: QUESTION_TYPES.SHORT_ANSWER, answer: [] },
];

const questions = (state = initQuestionState, action = {}) => {
  switch (action.type) {
    case ActionTypes.MARK_ANSWER:
      if (action.value) {
        return update(state, {
          [action.idx]: {
            answer: { $push: [action.answerIdx] },
          },
        });
      }

      return state.map((question, qIdx) => {
        if (qIdx !== action.idx) return question;

        return {
          ...question,
          answer: question.answer.filter((item) => item !== action.answerIdx),
        };
      });
    default:
      return state;
  }
};

export default combineReducers({
  info,
  questions,
});

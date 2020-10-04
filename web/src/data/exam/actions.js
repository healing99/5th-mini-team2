import * as ActionTypes from '@/data/rootActionTypes';

export const markAnswer = (idx, answerIdx, value) => ({
  type: ActionTypes.MARK_ANSWER,
  answerIdx,
  idx,
  value,
});

export const nextQuestion = () => ({ type: ActionTypes.NEXT_QUESTION });

export const prevQuestion = () => ({ type: ActionTypes.PREV_QUESTION });

import * as ActionTypes from '@/data/rootActionTypes';

export const addQuestion = () => ({
  type: ActionTypes.ADD_QUESTION,
});

export const changeQuestionType = (idx, checked) => ({
  type: ActionTypes.CHANGE_TYPE,
  idx,
  checked,
});

export const toggleAnswer = (idx, answerIdx, value) => ({
  type: ActionTypes.TOGGLE_ANSWER,
  idx,
  answerIdx,
  value,
});

export const removeQuestion = (idx) => ({
  type: ActionTypes.REMOVE_QUESTION,
  idx,
});

export const addImage = (file, idx) => ({
  type: ActionTypes.ADD_IMAGE_QUESTION,
  file,
  idx, 
})
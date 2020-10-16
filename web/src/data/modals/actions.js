import * as ActionTypes from '@/data/rootActionTypes';

export const showQuestionModal = (url) => ({
  type: ActionTypes.SHOW_QUESTION_MODAL,
  url,
});

export const closeQuestionModal = () => ({
  type: ActionTypes.CLOSE_QUESTION_MODAL,
});

export const showOMRModal = () => ({
  type: ActionTypes.SHOW_OMR_MODAL,
});

export const closeOMOModal = () => ({
  type: ActionTypes.CLOSE_OMR_MODAL,
});

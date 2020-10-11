import * as ActionTypes from '@/data/rootActionTypes';

export const showQuestionModal = (url) => ({
  type: ActionTypes.SHOW_QUESTION_MODAL,
  url,
});

export const hideQuestionModal = () => ({
  type: ActionTypes.HIDE_QUESTION_MODAL,
});

export const showOMRModal = () => ({
  type: ActionTypes.SHOW_OMR_MODAL,
});

export const hideOMOModal = () => ({
  type: ActionTypes.HIDE_OMR_MODAL,
});

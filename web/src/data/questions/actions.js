import * as ActionTypes from '@/data/rootActionTypes';
import * as Services from '@/data/rootServices';

export const initQuestions = () => ({
  type: ActionTypes.INIT_QUESTIONS,
});

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

export const reorderQuestion = (firstIdx, secondIdx) => ({
  // 순서바꾸기
  type: ActionTypes.REORDER_QUESTION,
  firstIdx,
  secondIdx,
});

export const addImage = (file, idx) => ({
  type: ActionTypes.ADD_IMAGE_QUESTION,
  file,
  idx,
});

export const createExam = (info, questions) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.SHOW_LOADING });

    const { examPK } = await Services.addExam(info);

    const images = await Services.uploadImages(questions);

    const questionsWithImg = Services.setQuestionsWithImage(questions, images);
    await Services.addQuestionsToExam(examPK, questionsWithImg);

    dispatch({ type: ActionTypes.CREATE_EXAM });
    dispatch({ type: ActionTypes.SHOW_QUESTION_MODAL, url: `${origin}/solve/${examPK}` });
  } catch (err) {
    alert('오류가 발생했습니다.');
  } finally {
    dispatch({ type: ActionTypes.HIDE_LOADING });
  }
};

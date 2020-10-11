import * as ActionTypes from '@/data/rootActionTypes';
import * as Services from '@/data/rootServices';

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
});

export const createExam = (info, questions) => async (dispatch) => {
  try {
    const { examPK } = await Services.addExam(info);

    const images = await Services.uploadImages(questions);

    const questionsWithImg = Services.setQuestionsWithImage(questions, images);
    console.log(questionsWithImg);
    await Services.addQuestionsToExam(examPK, questionsWithImg);

    dispatch({ type: ActionTypes.CREATE_EXAM });
    dispatch({ type: ActionTypes.SHOW_QUESTION_MODAL, url: `${origin}/solve/${examPK}` });
  } catch (err) {
    console.log(err);
  }
};

import * as ActionTypes from '@/data/rootActionTypes';
import * as Services from '@/data/rootServices';

export const markAnswer = (idx, answerIdx, value) => ({
  type: ActionTypes.MARK_ANSWER,
  answerIdx,
  idx,
  value,
});

export const nextQuestion = () => ({ type: ActionTypes.NEXT_QUESTION });

export const prevQuestion = () => ({ type: ActionTypes.PREV_QUESTION });

export const getExam = (id) => async (dispatch) => {
  try {
    const exam = await Services.fetchExam(id);
    const { questions, ...info } = exam;

    const parsedQuestions = Services.parseQuestions(questions);
    dispatch({ type: ActionTypes.GET_EXAM, info, questions: parsedQuestions });
  } catch (err) {
    console.log(err);
  }
};

export const setSolveStep = (step) => ({
  type: ActionTypes.SET_SOLVE_STEP,
  step,
});

import * as ActionTypes from '@/data/rootActionTypes';
import * as Services from '@/data/rootServices';
import history from '@/utils/history';
import { EXAM } from '@/const/';

export const nextQuestion = () => ({ type: ActionTypes.NEXT_QUESTION });
export const prevQuestion = () => ({ type: ActionTypes.PREV_QUESTION });
export const increaseRemaining = () => ({ type: ActionTypes.INCREASE_REMAINING });
export const decreaseRemaining = () => ({ type: ActionTypes.DECREASE_REMAINING });
export const initGraded = () => ({ type: ActionTypes.INIT_GRADED });
export const startExam = () => ({ type: ActionTypes.START_EXAM, time: new Date() });
export const endExam = () => ({ type: ActionTypes.END_EXAM, time: new Date() });

export const markAnswer = (idx, answerIdx, value) => ({
  type: ActionTypes.MARK_ANSWER,
  answerIdx,
  idx,
  value,
});

export const writeAnswer = (idx, value) => ({
  type: ActionTypes.WRITE_ANSWER,
  idx,
  value,
});

export const setSolveStep = (step) => ({
  type: ActionTypes.SET_SOLVE_STEP,
  step,
});

export const getExam = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.SHOW_LOADING });

    const exam = await Services.fetchExam(id);
    const { questions, ...info } = exam;

    const parsedQuestions = Services.parseQuestions(questions);

    dispatch({ type: ActionTypes.INIT_GRADED });
    dispatch({ type: ActionTypes.GET_EXAM, info, questions: parsedQuestions });
  } catch (err) {
    dispatch({ type: ActionTypes.SET_SOLVE_STEP, step: EXAM.LOGIN_STEP });
    history.push('/wrong-exam-id');
  } finally {
    dispatch({ type: ActionTypes.HIDE_LOADING });
  }
};

export const submitExam = (questions) => (dispatch) => {
  const gradedResult = Services.gradeExam(questions);

  dispatch({
    type: ActionTypes.END_EXAM,
    time: new Date(),
  });

  dispatch({
    type: ActionTypes.SET_GRADED,
    gradedResult,
  });

  history.push('/result');
};

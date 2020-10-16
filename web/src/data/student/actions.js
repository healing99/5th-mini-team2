import * as Services from '@/data/rootServices';
import * as ActionTypes from '@/data/rootActionTypes';
import { EXAM, DUMMY } from '@/const';

export const signIn = (creds) => async (dispatch) => {
  try {
    const { token } = await Services.signInStudent(creds);
    Services.setToken(token);

    dispatch({ type: ActionTypes.SET_STUDENT, name: DUMMY.STUDENT_NAME });
    dispatch({ type: ActionTypes.SET_SOLVE_STEP, step: EXAM.WELCOME_STEP });
  } catch (err) {
    alert("잘못된 계정입니다.");
  }
}
import * as ActionTypes from '@/data/rootActionTypes';
import { combineReducers } from 'redux';

const question = (state = { show: false, url: '' }, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_QUESTION_MODAL:
      return {
        open: true,
        url: action.url,
      };
    case ActionTypes.HIDE_QUESTION_MODAL:
      return {
        open: false,
        url: '',
      };
    default:
      return state;
  }
};

const OMR = (state = false, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_OMR_MODAL:
      return true;
    case ActionTypes.HIDE_OMR_MODAL:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  question,
  OMR,
});

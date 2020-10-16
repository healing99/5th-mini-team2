import * as ActionTypes from '@/data/rootActionTypes';

const loading = (state = false, action = {}) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return true;

    case ActionTypes.HIDE_LOADING:
      return false;

    default:
      return state;
  }
};

export default loading;

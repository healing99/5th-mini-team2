import * as ActionTypes from '@/data/rootActionTypes';

const student = (state = { name: '' }, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_STUDENT:
      return {
        name: action.name
      }

    default:
      return state;
  }
};

export default student;

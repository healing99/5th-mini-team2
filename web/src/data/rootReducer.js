import { combineReducers } from 'redux';
import questionReducer from './questions/reducers';
import examReducer from './exam/reducers';

export default combineReducers({ questions: questionReducer, exam: examReducer });

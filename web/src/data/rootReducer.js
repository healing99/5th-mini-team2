import { combineReducers } from 'redux';
import questionReducer from './questions/reducers';
import examReducer from './exam/reducers';
import modalsReducer from './modals/reducers';

export default combineReducers({ questions: questionReducer, exam: examReducer, modals: modalsReducer });

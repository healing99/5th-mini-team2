import { combineReducers } from 'redux';
import questionReducer from './questions/reducers';

export default combineReducers({ questions: questionReducer });

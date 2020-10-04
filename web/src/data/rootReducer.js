import { combineReducers } from 'redux';
import questionReducer from './questions/reducers';
import temp from './Temp/reducers';

export default combineReducers({ temp, questions: questionReducer });

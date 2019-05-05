import { combineReducers } from 'redux';
import authedUser from './authedUser';
import loading from './loading';
import questions from './questions';
import users from './users';

export default combineReducers({
  authedUser,
  loading,
  questions,
  users
});
import * as data from '../data/_DATA';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setIsLoading } from '../actions/loading';

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      data._getQuestions(),
      data._getUsers()
    ]).then(([questions, users]) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        dispatch(setIsLoading(false));
      });
  }
}
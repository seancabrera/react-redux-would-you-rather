import * as data from '../data/_DATA';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

// TODO - implement login functionality. Hardcoding for now.
const AUTHED_ID = 'seancabrera';

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
        data._getQuestions(),
        data._getUsers()
    ]).then(([questions, users]) => {
        console.log(questions);
        console.log(users);
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
        // dispatch(setAuthedUser(AUTHED_ID));
      });
  }
}
import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION_ANSWER:
      const newState = Object.assign({}, state);
      newState[action.qid][action.answer].votes = newState[action.qid][action.answer].votes.concat(action.authedUser);
      return newState;
    default:
      return state;
  }
}
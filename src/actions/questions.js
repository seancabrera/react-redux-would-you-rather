import * as data from '../data/_DATA';
import { fetchUsersAndQuestions } from './shared';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveQuestionAnswer({authedUser, qid, answer}) {
  return (dispatch) => {
    return data._saveQuestionAnswer({authedUser, qid, answer})
      .then(() => {
        dispatch(fetchUsersAndQuestions());
      })
      .catch((e) => {
        alert('Failed to save answer');
        dispatch(fetchUsersAndQuestions());
      });
  }
}

export function saveQuestion({author, optionOneText, optionTwoText}) {
  return (dispatch) => {
    return data._saveQuestion({author, optionOneText, optionTwoText})
      .then(() => {
        return dispatch(fetchUsersAndQuestions());
      })
      .catch((e) => {
        alert('Failed to save question');
        dispatch(fetchUsersAndQuestions());
      });
  }
}
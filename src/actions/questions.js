import * as data from '../data/_DATA';
import { handleInitialData } from './shared';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveQuestionAnswer({authedUser, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveQuestionAnswer({authedUser, qid, answer}) {
  return (dispatch) => {
    return data._saveQuestionAnswer({authedUser, qid, answer})
      .then(() => {
        dispatch(handleInitialData());
      })
      .catch((e) => {
        alert('Failed to save answer');
        dispatch(handleInitialData());
      });
  }
}
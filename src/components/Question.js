import React from 'react';
import { connect } from 'react-redux';
import QuestionInput from './QuestionInput';
import QuestionResults from './QuestionResults';

class Question extends React.Component {
  render() {
    const questionId = this.props.match.params.id;
    const question = this.props.questions[questionId];
    if(!question) return null;

    const { authedUser } = this.props;
    const answeredByAuthedUser = isAnsweredByAuthedUser(question, authedUser);

    return (
      <div>
        {
          answeredByAuthedUser ?
            <QuestionResults question={question}/> :
            <QuestionInput question={question}/>
        }
      </div>
    );
  }
}

function isAnsweredByAuthedUser(question, authedUser) {
  return question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions
  };
}


export default connect(mapStateToProps)(Question);
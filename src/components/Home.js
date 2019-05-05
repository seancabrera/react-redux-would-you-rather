import React from 'react';
import { connect } from 'react-redux';
import QuestionSummary from './QuestionSummary';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';

class Home extends React.Component {
  render() {
    const { questions, authedUser, loading } = this.props;

    const answeredQuestions = getAnsweredQuestions(questions, authedUser);
    const unansweredQuestions = getUnansweredQuestions(questions, authedUser);

    return (
      loading ?
      <Spinner animation="grow" /> :

      <div className="home">
        <Tabs defaultActiveKey="unanswered">
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <br/>
            {unansweredQuestions.map(question => (
              <QuestionSummary key={question.id} question={question} />
            ))}
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <br/>
            {answeredQuestions.map(question => (
              <QuestionSummary key={question.id} question={question} />
            ))}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function getAnsweredQuestions(questions, authedUserId) {
  let answeredQuestions = questions.filter(question => {
    return question.optionOne.votes.includes(authedUserId) ||
      question.optionTwo.votes.includes(authedUserId);
  });

  return answeredQuestions.sort(sortByTimestamp);
}

function getUnansweredQuestions(questions, authedUserId) {
  let unansweredQuestions = questions.filter(question => {
    return !question.optionOne.votes.includes(authedUserId) &&
      !question.optionTwo.votes.includes(authedUserId);
  });

  return unansweredQuestions.sort(sortByTimestamp);
}

function sortByTimestamp(a, b) {
  return b.timestamp - a.timestamp;
}

function mapStateToProps ({ authedUser, loading, questions }) {
  const questionsArray = [];
    Object.keys(questions).forEach(questionId => {
      questionsArray.push(questions[questionId]);
    });

  return {
    authedUser,
    loading,
    questions: questionsArray
  };
}


export default connect(mapStateToProps)(Home);
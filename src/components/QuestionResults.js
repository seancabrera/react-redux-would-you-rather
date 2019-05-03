import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import QuestionOptionResult from './QuestionOptionResult';

class QuestionResults extends React.Component {
  render() {
    const { question, authedUser, users } = this.props;
    const author = users[question.author];

    const totalVotes = question.optionOne.votes.length +
      question.optionTwo.votes.length;

    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;

    const optionOnePercentage = getRoundedPercentage(optionOneVotes, totalVotes);
    const optionTwoPercentage = getRoundedPercentage(optionTwoVotes, totalVotes);

    const authedUserVotedOptionOne = question.optionOne.votes.includes(authedUser);
    const authedUserVotedOptionTwo = question.optionTwo.votes.includes(authedUser);

    return (
      <div>
        <Card>
          <Card.Header>Asked by {author.name}</Card.Header>
          <h2>Results</h2>

          <QuestionOptionResult
            text={question.optionOne.text}
            percentage={optionOnePercentage}
            votes={optionOneVotes}
            totalVotes={totalVotes}
            userVoted={authedUserVotedOptionOne}
          />

          <QuestionOptionResult
            text={question.optionTwo.text}
            percentage={optionTwoPercentage}
            votes={optionTwoVotes}
            totalVotes={totalVotes}
            userVoted={authedUserVotedOptionTwo}
          />
        </Card>
      </div>
    );
  }
}

function getRoundedPercentage(optionVotes, totalVotes) {
  const optionPercentage = optionVotes / totalVotes * 100;
  return Math.round( optionPercentage * 10 ) / 10;
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(QuestionResults);
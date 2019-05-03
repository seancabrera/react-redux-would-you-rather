import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

class QuestionOptionResult extends React.Component {
  render() {
    const {
      text,
      percentage,
      votes,
      totalVotes,
      userVoted
    } = this.props;

    return (
      <Card className="question-option-result">
        Would you rather {text}?
        <ProgressBar className="result-bar" now={percentage} label={`${percentage}%`}/>
        <strong className="option-vote-summary">{votes} out of {totalVotes} votes</strong>

        { userVoted &&
          <Badge className="you-voted-badge" variant="secondary">Your Vote</Badge>
        }
      </Card>
    );
  }
}

export default QuestionOptionResult;
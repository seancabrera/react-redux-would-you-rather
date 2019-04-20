import React from 'react';
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class QuestionSummary extends React.Component {
  render() {
    const { question, users } = this.props;
    const author = users[question.author];

    if(!author) return null;

    return (
      <div className="home">
        <Card>
          <Card.Header>{author.name} asks:</Card.Header>
          <h2>Would you rather:</h2>
          <p>1. {question.optionOne.text}</p>
          <p>2. {question.optionTwo.text}</p>
          <Button className='question-summary-button' variant="info">View Poll</Button>
        </Card>
      </div>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(QuestionSummary);
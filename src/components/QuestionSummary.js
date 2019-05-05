import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class QuestionSummary extends React.Component {
  render() {
    const { question, users } = this.props;
    const author = users[question.author];

    if(!author) return null;

    return (
      <div className="home">
        <Card className="app-card">
          <Card.Header>
            <img className="card-header-avatar" alt={author.name} src={author.avatarURL}/>
            <div className="card-header-name">{author.name} asks:</div>
          </Card.Header>
          <h2>Would you rather</h2>
          <p>1. {question.optionOne.text}</p>
          <p>2. {question.optionTwo.text}</p>
          <Link to={'/questions/' + question.id}>
            <Button className='submit-button' variant="info">
              View Poll
            </Button>
          </Link>
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
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { saveQuestion } from '../actions/questions';

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: ''
    };

    this.setOptionOne = this.setOptionOne.bind(this);
    this.setOptionTwo = this.setOptionTwo.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  setOptionOne(optionOne) {
    this.setState({
      optionOne: optionOne
    });
  }

  setOptionTwo(optionTwo) {
    this.setState({
      optionTwo: optionTwo
    });
  }

  submitAnswer() {
    const { authedUser, question } = this.props;

    this.props.dispatch(saveQuestion({
        author: authedUser,
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo
    }))
    .then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <Card>
        <Card.Header>Create New Question</Card.Header>

        <h2>Would you rather...</h2>

        <input
          type="text"
          className="new-question-input"
          placeholder="Enter option one text here"
          onChange={e => this.setOptionOne(e.target.value)}
        />

        OR

        <input
          type="text"
          className="new-question-input"
          placeholder="Enter option two text here"
          onChange={e => this.setOptionTwo(e.target.value)}
        />

        <div className="submit-button-container">
            <Button
              className='submit-button'
              variant="info"
              onClick={this.submitAnswer}
            >
              Submit
            </Button>
          </div>
      </Card>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

export default withRouter(connect(mapStateToProps)(NewQuestion));
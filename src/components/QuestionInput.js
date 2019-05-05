import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { withRouter } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';

class QuestionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: '',
      saving: false
    };

    this.setOption = this.setOption.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  setOption(option) {
    this.setState({
      option: option
    });
  }

  submitAnswer() {
    const { authedUser, question } = this.props;

    this.setState({
      saving: true
    });

    this.props.dispatch(handleSaveQuestionAnswer({
        authedUser: authedUser,
        qid: question.id,
        answer: this.state.option
    }));
  }

  render() {
    const { question, authedUser, users } = this.props;
    if(!question || !authedUser || !users[authedUser]) return null;

    const author = users[question.author];

    const { saving } = this.state;

    return (
      <div>
        <Card>
          <Card.Header>{author.name} asks:</Card.Header>
          <h2>Would you rather:</h2>

          <div className="question-options">
            <div className="radio">
              <label>
              <input
                type="radio"
                name="option"
                value="optionOne"
                onClick={(evt) => this.setOption(evt.target.value)}
              />
              &nbsp; 1. {question.optionOne.text}
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="optionTwo"
                  onClick={(evt) => this.setOption(evt.target.value)}
                />
                &nbsp; 2. {question.optionTwo.text}
              </label>
            </div>
          </div>

          <div className="submit-button-container">
            <Button
              className='submit-button'
              variant="info"
              onClick={this.submitAnswer}
              disabled={saving}
            >
              { saving &&
                <Spinner
                  animation="border"
                  as="span"
                  size="sm"
                  className="saving-spinner"/>
              }

              Submit
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}


export default withRouter(connect(mapStateToProps)(QuestionInput));
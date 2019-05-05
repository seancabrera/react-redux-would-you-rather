import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { saveQuestion } from '../actions/questions';

class NewQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionOne: '',
      optionTwo: '',
      saving: false
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
    const { authedUser } = this.props;

    this.setState({
      saving: true
    });

    this.props.saveQuestion({
        author: authedUser,
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo
    })
    .then(() => this.props.history.push('/'));
  }

  render() {
    const { saving } = this.state;

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
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveQuestion: ({author, optionOneText, optionTwoText}) => {
      return dispatch(saveQuestion({author, optionOneText, optionTwoText}));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion));
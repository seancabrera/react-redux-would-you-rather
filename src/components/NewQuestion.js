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

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  handleOptionChange(e) {
    this.setState({[e.target.name]: e.target.value});
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
          name="optionOne"
          onChange={this.handleOptionChange}
        />

        OR

        <input
          type="text"
          className="new-question-input"
          placeholder="Enter option two text here"
          name="optionTwo"
          onChange={this.handleOptionChange}
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
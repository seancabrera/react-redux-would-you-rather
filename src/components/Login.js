import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { setAuthedUser } from '../actions/authedUser';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: 'seancabrera'
    };

    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="login">
        <Card>
          <Card.Header>
            <p className="login-welcome">Welcome to Would You Rather?</p>
            <p className="login-please">Please sign in to continue</p>

          </Card.Header>
          <select className="login-select" onChange={(e) => this.setUser(e.target.value)}>
            <option value="seancabrera">Sean Cabrera</option>
            <option value="stephencurry">Stephen Curry</option>
            <option value="tombrady">Tom Brady</option>
          </select>

          <div className="submit-button-container">
            <Button
              className='submit-button'
              variant="info"
              onClick={() => this.props.login(this.state.user)}
            >
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(setAuthedUser(user))
  };
}

export default connect(null, mapDispatchToProps)(Login);
import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from 'react-router-bootstrap';
import { setAuthedUser } from '../actions/authedUser';

class AppNavbar extends React.Component {
  render() {
    const { authedUser, users } = this.props;
    const username = users[authedUser] ? users[authedUser].name : '';

    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <LinkContainer to="/">
            <Navbar.Brand href="/">Would You Rather</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <NavItem>
              <LinkContainer to="/">
                <NavLink>Home</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/add">
                <NavLink>New Question</NavLink>
              </LinkContainer>
            </NavItem>
            <NavItem>
              <LinkContainer to="/leaderboard">
                <NavLink>Leader Board</NavLink>
              </LinkContainer>
            </NavItem>
          </Nav>
          <Nav>
            <Navbar.Text className="navbar-user">
              {username && <span>Hello, {username}</span>}
            </Navbar.Text>
            <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
    logout: () => dispatch(setAuthedUser(null))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);

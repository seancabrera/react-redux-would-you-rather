import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { LinkContainer } from 'react-router-bootstrap';

class AppNavbar extends React.Component {
  render() {
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
              <LinkContainer to="/new-question">
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
              Tyler McGinnis
            </Navbar.Text>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;

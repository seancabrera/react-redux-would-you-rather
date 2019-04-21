import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">Would You Rather</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#new-question">New Question</Nav.Link>
            <Nav.Link href="#leaderboard">Leader Board</Nav.Link>
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

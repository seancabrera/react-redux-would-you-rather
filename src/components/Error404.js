import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Error404 extends React.Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>The requested page does not exist.</p>

        <Link to="/">Click here to play "Would You Rather?"</Link>
      </div>
    );
  }
}


export default Error404;
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import RoutedApp from './RoutedApp';
import '../App.css';

class App extends Component {
  render() {
    const { authedUser } = this.props;

    return (
      authedUser ? <RoutedApp/> : <Login/>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import '../App.css';
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default connect()(App);
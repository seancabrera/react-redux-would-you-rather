import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import AppNavbar from './AppNavbar';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/new-question" component={NewQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Router>
    );
  }
}

export default connect()(App);

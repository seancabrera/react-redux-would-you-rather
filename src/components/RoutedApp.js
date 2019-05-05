import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import AppNavbar from './AppNavbar';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class RoutedApp extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    return (
      <Router>
        <div className="App">
          <AppNavbar />

        {
          loading ?
          <Spinner animation="grow" className="loading-spinner" /> :

          <div className="app-body">
            <Route exact path="/" component={Home} />
            <Route path="/new-question" component={NewQuestion} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/questions/:id" component={Question} />
          </div>
        }
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ loading }) {
  return {
    loading
  };
}

export default connect(mapStateToProps)(RoutedApp);
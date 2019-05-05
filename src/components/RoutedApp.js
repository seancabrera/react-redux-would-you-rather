import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from './Home';
import '../App.css';
import { handleInitialData } from '../actions/shared';
import AppNavbar from './AppNavbar';
import Error404 from './Error404';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Question from './Question';
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/questions/:id" component={Question} />
              <Route component={Error404} />
            </Switch>
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
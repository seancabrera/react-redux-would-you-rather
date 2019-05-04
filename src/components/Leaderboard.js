import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

class Leaderboard extends React.Component {
  render() {
    const { users } = this.props;

    const userData = formatUserData(users);

    return (
      <div>
        {userData.map(user => {
          return (
            <Card className="app-card">
              <Card.Header>{user.name}</Card.Header>
              <div className="leaderboard-card-body">
                <div>
                  Image
                </div>
                <div className="leaderboard-score-details">
                  <p><strong>Answered questions: {user.answers}</strong></p>
                  <p><strong>Created questions: {user.questions}</strong></p>
                </div>
                <div>
                  <Card bg="primary" text="white">
                    <Card.Header>Score</Card.Header>
                    <p className="leaderboard-score">{user.answers + user.questions}</p>
                  </Card>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    );
  }
}

function formatUserData(users) {
  const userData = [];

  Object.values(users).forEach(user => {
    userData.push({
      name: user.name,
      questions: user.questions.length,
      answers: Object.keys(user.answers).length
    });
  });

  userData.sort((a,b) => {
    return (b.questions + b.answers) - (a.questions + a.answers);
  });
  return userData;
}

function mapStateToProps ({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
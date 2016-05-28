import React from 'react';
import { connect } from 'react-redux';
import { userManager } from '../../store';
import { loadVideosStart } from '../../actions';

class MainPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadVideosStart());
  }

  showUserInfoButtonClick = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.props.user, null, 2));
  }

  onLogoutButtonClicked = (event) => {
    event.preventDefault();
    userManager.signoutRedirect();
  }

  render() {
    const { user } = this.props;

    return (
      <div style={styles.root}>
        <h3>Welcome {user.profile.name}!</h3>
        <button onClick={this.showUserInfoButtonClick}>Show user info</button>
        <button onClick={this.onLogoutButtonClicked}>Logout</button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

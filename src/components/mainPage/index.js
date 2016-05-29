import React from 'react';
import { connect } from 'react-redux';
import { userManager } from '../../store';
import { loadSubscriptionsStart } from '../../actions';
import ChannelInfo from '../channelInfo';

class MainPage extends React.Component {
  // load the subscriptions
  componentWillMount() {
    this.props.dispatch(loadSubscriptionsStart());
  }

  // display the current user
  showUserInfoButtonClick = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.props.user, null, 2));
  }

  // log out
  onLogoutButtonClicked = (event) => {
    event.preventDefault();
    userManager.signoutRedirect();
  }

  get channels() {
    const { channels } = this.props;
    return (
      <ul style={styles.list}>
        {channels.map((channel) => (
          <li key={channel.id} stlye={styles.li}><ChannelInfo channel={channel} /></li>
        ))}
      </ul>
    );
  }

  render() {
    const { user, channels } = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.title}>
          <h3>Welcome, {user.profile.name}!</h3>
          <p>Your 5 recent YouTube subscriptions:</p>
        </div>
        { channels.length > 0 ? this.channels: <span>You have no subscriptions.</span>}
        <button style={styles.button} onClick={this.showUserInfoButtonClick}>Show user info</button>
        <button style={styles.button} onClick={this.onLogoutButtonClicked}>Logout</button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    flex: '1 0 auto',
  },
  list: {
    listStyle: 'none',
  },
  li: {
    display: 'flex',
  },
  button: {
    flexShrink: 1
  }
}

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
    channels: state.subscriptions.channels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

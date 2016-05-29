import React from 'react';
import { connect } from 'react-redux';
import userManager from '../../utils/userManager';
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

  // the channels list
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
          <h3>Welcome, {user ? user.profile.name : 'Mister Unknown'}!</h3>
          <p>Your 5 most recent YouTube channel subscriptions:</p>
        </div>
        { channels.length > 0 ? this.channels: <i>You have no subscriptions.</i>}
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
  },
  title: {
    flex: '1 0 auto',
  },
  list: {
    listStyle: 'none',
  },
  li: {
    display: 'flex',
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

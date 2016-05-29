import React from 'react';
import { userManager } from '../../store';

class LoginPage extends React.Component {
  onLoginButtonClick = (event) => {
    event.preventDefault();
    userManager.signinRedirect();
  };

  render() {
    return (
      <div style={styles.root}>
        <h3>Welcome to the redux-oidc sample app!</h3>
        <p>Please log in to continue</p>
        <button onClick={this.onLoginButtonClick}>Login</button>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexShrink: 1,
  }
}

export default LoginPage;

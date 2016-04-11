import React from 'react';
import { createTokenManager } from 'redux-oidc';
import { createTokenManagerConfig } from '../../helpers';
import radium from 'radium';

class HomePage extends React.Component {
  get infoPage() {
    return(
      <div>Info Page</div>
    );
  }

  render() {
    return (
      <div>
        { this.infoPage }
      </div>
    )
  }
}

export default radium(HomePage);

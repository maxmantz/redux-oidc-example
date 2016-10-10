import React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { push } from 'react-router-redux';

class CallbackPage extends React.Component {
  successCallback = () => {
    this.props.dispatch(push('/'));
  }

  render() {
    // just redirect to '/' in both cases
    return (
      <CallbackComponent successCallback={this.successCallback} errorCallback={this.successCallback} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(CallbackPage);

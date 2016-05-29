import React from 'react';
import { connect } from 'react-redux';
import LoginPage from '../loginPage';
import MainPage from '../mainPage';

class HomePage extends React.Component {
  get infoPage() {
    return(
      <div>Info Page</div>
    );
  }

  render() {
    const { user } = this.props;

    return !user || user.expired ? <LoginPage/> : <MainPage />;
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

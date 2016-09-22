import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper'

import store from './store';
import { syncHistoryWithStore, routerActions } from 'react-router-redux';
import HomePage from './components/homePage';
import CallbackPage from './components/callback';
import LoginPage from './components/loginPage';
import ErrorPage from './components/errorPage';

const history = syncHistoryWithStore(browserHistory, store);

// Redirects to /login by default
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.oidc.user, // how to get the user state
  authenticatingSelector: state => state.oidc.isLoadingUser, // wait for async loading of user to complete
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
})

export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/" component={UserIsAuthenticated(HomePage)}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/callback" component={CallbackPage} />
      <Route path="/error" component={ErrorPage} />
    </Router>
  );
}

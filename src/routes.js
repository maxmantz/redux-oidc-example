import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import HomePage from './components/homePage';
import CallbackPage from './components/callback';
import LoginPage from './components/loginPage';

const history = syncHistoryWithStore(browserHistory, store);

export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/callback" component={CallbackPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
}

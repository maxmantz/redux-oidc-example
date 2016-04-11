import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createTokenMiddleware from 'redux-oidc';
import { createTokenManagerConfig } from './helpers';
import reducer from './reducer';

// don't trigger validation when on LoginPage
function shouldValidate(state, action) {
  const currentLocation = window.location.href;
  const parts = currentLocation.split('/');
  if (parts[parts.length - 1] === 'login') {
    return false;
  }
  return true;
}

const tokenMiddleware = createTokenMiddleware(createTokenManagerConfig(), shouldValidate);

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(routerMiddleware(browserHistory), tokenMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;

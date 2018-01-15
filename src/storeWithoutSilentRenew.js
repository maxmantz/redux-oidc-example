import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import reducer from './reducer';
import userManager from './utils/userManager';

// create the middleware with the userManager
const oidcMiddleware = createOidcMiddleware(userManager);

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory))
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;

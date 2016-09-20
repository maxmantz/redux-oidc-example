import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer';
import userManager from './utils/userManager';

// create the middleware with the userManager, null for shouldValidate, and triggerAuthFlow false
const oidcMiddleware = createOidcMiddleware(userManager, null, false);

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), thunkMiddleware, logger())
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

export default store;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import createSagaMiddleware from 'redux-saga'
import { loadSubscriptionsSaga } from './sagas';
import reducer from './reducer';
import userManager from './utils/userManager';

// create the middleware with the userManager
const oidcMiddleware = createOidcMiddleware(userManager);

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

sagaMiddleware.run(loadSubscriptionsSaga);

export default store;

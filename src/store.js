import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { createUserManager, loadUser } from 'redux-oidc';
import createSagaMiddleware from 'redux-saga'
import { loadSubscriptionsSaga } from './sagas';
import reducer from './reducer';
import userManager from './utils/userManager';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
}

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(loggerMiddleware, routerMiddleware(browserHistory), sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

// load the current user into the redux store
loadUser(store, userManager);

sagaMiddleware.run(loadSubscriptionsSaga);

export default store;

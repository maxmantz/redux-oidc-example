import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as oidcReducer } from 'redux-oidc';
import subscriptionsReducer from './subscriptions';

const reducer = combineReducers(
  {
    routing: routerReducer,
    oidc: oidcReducer,
    subscriptions: subscriptionsReducer
  }
);

export default reducer;

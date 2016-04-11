import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const reducer = combineReducers(
  {
    routing: routerReducer
  }
);

export default reducer;

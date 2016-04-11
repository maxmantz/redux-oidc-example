import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import store from '../store';

export default function App(props) {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

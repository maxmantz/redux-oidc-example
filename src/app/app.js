import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import Routes from '../routes';
import store from '../store';
import userManager from '../utils/userManager';
import Root from '../components/root';

export default function App(props) {
  return (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <Root>
          <Routes />
        </Root>
      </OidcProvider>
    </Provider>
  );
}

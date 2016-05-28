import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import Routes from '../routes';
import store, { userManager } from '../store';
import Root from '../components/Root';

export default function App(props) {
  return (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <Root>
          <Routes />
        </Root>
      </OidcProvider>
    </Provider>
  )
}

import React from 'react';
import { CallbackComponent } from 'redux-oidc';
import { createTokenManagerConfig } from '../../helpers';

export default function CallbackPage(props) {
  return (
    <CallbackComponent config={createTokenManagerConfig()} />
  );
}

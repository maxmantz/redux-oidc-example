export function createTokenManagerConfig() {
  return {
    client_id: '581912277515-2htoi7tfgmcj6o1dbvau9q0tuuaqitot.apps.googleusercontent.com',
    redirect_uri: 'https://redux-oidc-example.herokuapp.com/callback',
    scope: 'openid profile',
    response_type: 'id_token token',
    authority: 'https://accounts.google.com/o/oauth2/v2/auth'
  };
}

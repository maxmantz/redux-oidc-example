import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createOidcMiddleware, { createUserManager } from 'redux-oidc';
import createSagaMiddleware from 'redux-saga'
import { loadSubscriptionsSaga } from './sagas';
import reducer from './reducer';

const userManagerConfig = {
  client_id: '581912277515-8pqeloei552og7pa13iufb57iug8vu9k.apps.googleusercontent.com',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile https://www.googleapis.com/auth/youtube.readonly',
  authority: 'https://accounts.google.com',
  silent_redirect_uri: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  metadata: {
    issuer: "https://accounts.google.com",
    authorization_endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
    token_endpoint: "https://www.googleapis.com/oauth2/v4/token",
    userinfo_endpoint: "https://www.googleapis.com/oauth2/v3/userinfo",
    jwks_uri: "https://www.googleapis.com/oauth2/v3/certs",
    // end_session_endpoint: "https://accounts.google.com/o/oauth2/revoke",
    signingKeys: [
      {
        "kty": "RSA",
        "alg": "RS256",
        "use": "sig",
        "kid": "ba1b3ecbf5f87c50b6ef15f1bb50a8c13f17a497",
        "n": "oyMZAGpqaNdfSdWlUb8zDQab8Z99rt01UK5A4g6eMWrV7f-o2HopdZZtQebMkQ5UYMxFnjBoowwiVKaW_EWc3DCs6wwiYposR18kLZht2NKxRd9VykfsQLoxuC8fZVWQQ5c3Fznd-cRvPfbdZkdRj1Y_vkgzZQnK_Q5gcUAYsLJZodL_jTc9hRjys2F5wwt-npPpa1pMxSLY_IfCnrW7ucnvQAgCdXedI2D_s2Y-Wrks9kj0zwe31GTFI2ZUOQwdPafY982oGiO15l5fwrq-xjNxFo8JIfHBzPr3JVkWsPETmS74DJeKo172d6SccNsyNnBIUBlqxYt6IeNpktIwCw",
        "e": "AQAB"
      },
      {
        "kty": "RSA",
        "alg": "RS256",
        "use": "sig",
        "kid": "93d45f7c2d58c6eaba22373bf1adcdbe9ab49af8",
        "n": "wUSUDL3sRKAkDh9LwfGVdi_shYDB0bD23YQnVqUaKlLk0YHOuo7iS5CfQAdCnS_w-fZKTui2yGlCu4oVhVHgnTkAU3cWRhyQNjJxG_tfFQg2sID2UaCNCq7jMHTIbAsf4MmDgZ6HOpiKsafMGUfWLsJc0Loe0QJnIWywSPnHmcXjs9kWExp29Xu1ka7rGK5rsDUH39sfi_Px2IeqDPdOFqUDRLCO9goaKE-IlCbZlgv2lnAoLRkmSVu7IXyNRjQPawIfBCLw91PxYMDqBcnTMf1fHAlnXzPy68B_aodv6PgPg5li0Y7aTDiiRmbyQVl-w7MCqAD1dxxqapbIqhmmhQ",
        "e": "AQAB"
      },
      {
        "kty": "RSA",
        "alg": "RS256",
        "use": "sig",
        "kid": "df6dbd2fe4ef7f280fd258f4f9ba4d0c47084e45",
        "n": "vyM4hMZhtQM6hegDxcW1WMETR1d4ddtO8KZYrP86ax75L6TKKKfFSkIA0xGAtmnyxjGlfWi02DAj_giqSv2LSK5Ufmo79hOyQUgVbEyYgVkSFohYvBTAdY9lbIWJuzAxjplX7g3psrpv4sNdBdp1R3xvcNOiGBBUsuQJ7pZbez_wm3an07Gc2wfWNZpDYJFlhzusqRVCX4DY4OR_I1Fc9a97PRfKlKyjHzBT208YRap_IypSZrN5cQZ2ikAmPZDjX17ozaAhlXbPW-_NV31R6FmdhtH4BYz-uHSBvWvZWnUCQlk4PbfAJgf1pCNsP-qZoGtVXenyBF6nEjXnIlR7Hw",
        "e": "AQAB"
      }
    ]
  }
};

export const userManager = createUserManager(userManagerConfig);

// create the middleware with the userManager, nothing for shouldValidate, and don't trigger redirection
const oidcMiddleware = createOidcMiddleware(userManager, null, false);

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const createStoreWithMiddleware = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(browserHistory), sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState);

sagaMiddleware.run(loadSubscriptionsSaga);

export default store;

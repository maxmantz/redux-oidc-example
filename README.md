# redux-oidc-example

This is a small sample app to demonstrate the usage of [redux-oidc](https://github.com/maxmantz/redux-oidc).

You will need a Google account to use it.

After logging in, the app will query the YouTube API for a list of your 5 most recent channel subsciptions (if any).
You can click on `Show user info` to view the user info stored in the reducer.
Click on `Logout` to log out again.

Visit <https://redux-oidc-example.herokuapp.com/> for the live demo (might take a while to load).

## Usage with silent renew (since redux-oidc v3.0.0-beta.7)
See this app's [store](https://github.com/maxmantz/redux-oidc-example/blob/master/src/store.js) and [silent renew](https://github.com/maxmantz/redux-oidc-example/blob/master/silent_renew/index.js) configurations, as well as [webpack config](https://github.com/maxmantz/redux-oidc-example/blob/master/webpack.config.js) on how to use it.

## Usage without silent renew
Using this library without silent renew is possible by using the oidc middleware. See [this store configuration](https://github.com/maxmantz/redux-oidc-example/blob/master/src/storeWithoutSilentRenew.js) on how to use it.

### Technologies
This app uses [react-router-redux](https://github.com/reactjs/react-router-redux) for routing and [redux-saga](https://github.com/yelouafi/redux-saga) to make API requests.

### Running locally
Clone this repo and run `npm install`.
After that run `node server` to start the server.
Please note that the server is running under TLS and therefore you need to visit [https://localhost:8080](https://localhost:8080) to find the app.

### Configuration
This app uses a [webpack config](webpack.config.js) for building two separate files, `index.html` for the app & `silent_renew.html` for silent renew. It uses [express](https://github.com/expressjs/express) as a server with this [config](server.prod.js) to allow the routing for both HTML files to work.

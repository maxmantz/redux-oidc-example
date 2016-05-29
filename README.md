# redux-oidc-example

This is a small sample app to demonstrate the usage of `redux-oidc`.

You will need a Google account to use it.

Visit <https://redux-oidc-example.herokuapp.com/>.

### Technologies
This app uses [react-router-redux](https://github.com/reactjs/react-router-redux) for routing and [redux-saga](https://github.com/yelouafi/redux-saga) to make API reqests.

### Running locally
Clone this repo and run `npm install`.
After that run `node server` to start the server.

### Configuration
This app uses a [webpack config](webpack.config.js) for building two separate files, `index.html` for the app & `silent_renew.html` for silent renew. It uses express as a server with this [config](server.js) to allow the routing for both HTML files to work.

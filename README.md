# redux-oidc-example

This is a small sample app to demonstrate the usage of [redux-oidc](https://github.com/maxmantz/redux-oidc).

You will need a Google account to use it.

After logging in, the app will query the YouTube API for a list of your 5 most recent channel subsciptions (if any).
You can click on `Show user info` to view the user info stored in the reducer.
Click on `Logout` to log out again.

Visit <https://redux-oidc-example.herokuapp.com/> for the live demo (might take a while to load).

---
_**Breaking Change:_
- Replaced Webpack with Vite Bundler
- In dev mode, the https server should handle both the html files placed outside. (Need to be validated for the slient renew feature)
- The build works fine, so use the `npm run build` and then `npm run start` to test the application.
- check the `./src/utils/userManager.js` file for how to create a google auth client id by creating a new project.
- use test gmail account for using this example
- Also, see the npm alias in the package.json for how i used the `oidc-client` older js package in place of `oidc-client-ts` as it was not supporting the feature that requires the google auth and youtube api to work. 
---

## Usage since redux-oidc v3.0.0-beta.10
`co` has been removed from the peer dependencies. You don't need it anymore for running this library. You can also safely drop `babel-polyfill` from the silent renew script.

## Usage with silent renew (since redux-oidc v3.0.0-beta.7)
See this app's [store](https://github.com/maxmantz/redux-oidc-example/blob/master/src/store.js) and [silent renew](https://github.com/maxmantz/redux-oidc-example/blob/master/silent_renew/index.js) configurations, as well as [webpack config](https://github.com/maxmantz/redux-oidc-example/blob/master/webpack.config.js) on how to use it.

## Usage without silent renew
Using this library without silent renew is possible by using the oidc middleware. See [this store configuration](https://github.com/maxmantz/redux-oidc-example/blob/master/src/storeWithoutSilentRenew.js) on how to use it.

### Technologies
This app uses [react-router-redux](https://github.com/reactjs/react-router-redux) for routing.

### Running locally
Clone this repo and run `npm install`.
After that run `node server` to start the server.
Please note that the server is running under TLS and therefore you need to visit [https://localhost:8080](https://localhost:8080) to find the app.

### Configuration
This app uses a [webpack config](webpack.config.js) for building two separate files, `index.html` for the app & `silent_renew.html` for silent renew. It uses [express](https://github.com/expressjs/express) as a server with this [config](server.prod.js) to allow the routing for both HTML files to work.

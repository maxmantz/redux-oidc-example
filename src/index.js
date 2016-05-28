import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

// needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// you'll need this
require('es6-promise').polyfill();

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    fontFamily:'"Roboto", sans-serif',
    background: '#fff',
    display: 'flex'
  }
}

ReactDOM.render(<div style={styles.root}><App/></div>, document.getElementById('app'));

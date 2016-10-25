import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

// you'll need this for older browsers
require('es6-promise').polyfill();

const styles = {
  root: {
    fontFamily:'"Roboto", sans-serif',
    background: '#fff'
  }
};

ReactDOM.render(<div id="app-root" style={styles.root}><App/></div>, document.getElementById('app'));

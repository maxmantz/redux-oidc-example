import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

// you'll need this for older browsers
require('es6-promise').polyfill();

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    fontFamily:'"Roboto", sans-serif',
    background: '#fff',
    display: 'flex',
    alignItems: 'center'
  }
}

ReactDOM.render(<div style={styles.root}><App/></div>, document.getElementById('app'));

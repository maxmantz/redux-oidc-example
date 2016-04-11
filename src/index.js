import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    fontFamily:'"Roboto", sans-serif',
    background: '#fff'
  }
}

ReactDOM.render(<div style={styles.root}><App/></div>, document.getElementById('app'));

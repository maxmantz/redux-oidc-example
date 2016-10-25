import React from 'react';

function Root(props) {
  return (
      <div style={styles.root} id="root">
        <div style={styles.paper}>
          <div style={styles.content}>
            { props.children }
          </div>
        </div>
      </div>
  );
}

const styles = {
  root: {
    margin: 'auto',
    minHeight: '100%',
    maxWidth: '100%',
  },
  paper: {
    padding: '1em',
    border: '1px solid black',
    display: 'flex',
    margin: 'auto auto',
  },
  content: {
    padding: '1em',
    flex: '1 0 auto',
    display: 'flex'
  }
};

export default Root;

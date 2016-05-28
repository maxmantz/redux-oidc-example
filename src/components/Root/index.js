import React from 'react';

function Root(props) {
  return (
    <div style={styles.paper}>
      <div style={styles.content}>
        { props.children }
      </div>
    </div>
  );
}

const styles = {
  paper: {
    padding: '1em',
    width: '100%',
    border: '1px solid black'
  },
  content: {
    padding: '1em',
  }
}

export default Root;

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
    // width: '100%',
    border: '1px solid black',
    width: '90vw',
    display: 'flex',
    margin: '0 auto',
  },
  content: {
    padding: '1em',
    flex: '1 0 auto',
    // display: 'flex'
  }
}

export default Root;

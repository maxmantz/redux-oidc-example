import React from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { removeError } from '../../actions';

class ErrorPage extends React.Component {

  buttonClick = (event) => {
    event.preventDefault();
    this.props.dispatch(removeError());
    this.props.dispatch(push('/'));
  };

  render() {
    const { error } = this.props;
    return (
      <div style={styles.root}>
        <h1>Oops an error occurred!</h1>
        <h2>Error name: {error.name}</h2>
        <p>Error message: {error.message}</p>
        <button onClick={this.buttonClick.bind(this)}>Go back!</button>
      </div>
    );
  }
}

const styles = {
  root: {
    height: '500px',
    width: '500px',
    display: 'flex',
    padding: '10px',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'red',
    color: 'white'
  }
};

function mapStateToProps(state) {
  return {
    error: state.error.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);

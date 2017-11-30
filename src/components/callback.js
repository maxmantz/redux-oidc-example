import React from "react";
import { connect } from "react-redux";
import { CallbackComponent } from "redux-oidc";
import { push } from "react-router-redux";
import userManager from "../utils/userManager";

class CallbackPage extends React.Component {
  render() {
    console.log("MYPROPS: ", this.props);

    // just redirect to '/' in both cases
    return (
      <CallbackComponent
        userManager={userManager}
        successCallback={() => this.props.dispatch(push("/"))}
        errorCallback={() => this.props.dispatch(push("/"))}
      >
        <div>Redirecting...</div>
      </CallbackComponent>
    );
  }
}

export default connect()(CallbackPage);

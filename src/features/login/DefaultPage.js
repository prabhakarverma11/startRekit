import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SigninForm from "./components/SigninForm";

export class DefaultPage extends Component {
  static propTypes = {
    //errorMessage: PropTypes.object.isRequired,
    //successMessage: PropTypes.object.isRequired,
    requestSignin: PropTypes.func.isRequired,
  };

  render() {
    return (
        <div className="app app-header-fixed ">
          <div className="container w-xxl w-auto-xs">
            <a className="navbar-brand block m-t">Angulr</a>
            <div className="m-b-lg">
              <div className="wrapper text-center">
                <strong>Sign in to get in touch</strong>
              </div>
              <SigninForm {...this.props} requestSignin={(creds) => {
                  this.props.requestSignin(creds)
              }} errorMessage={this.props.errorMessage} successMessage={this.props.successMessage}/>

            </div>
          </div>
        </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(store) {
  return {
      errorMessage: store.authenticate.errorMessage,
      successMessage: store.authenticate.successMessage
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
      requestSignin: (creds) => {
          dispatch(signin(creds));
      }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SigninForm from "./components/SigninForm";
export class DefaultPage extends Component {
  static propTypes = {
      login: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired,
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
                  this.props.actions.login(creds)
              }} errorMessage={this.props.login.errorMessage} successMessage={this.props.login.successMessage}/>

            </div>
          </div>
        </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(store) {
  return {
      login: store.login
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);

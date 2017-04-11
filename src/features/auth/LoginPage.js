import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SigninForm from "./components/SigninForm";
import { push } from 'react-router-redux';
export class DefaultPage extends Component {
  static propTypes = {
      auth: PropTypes.object.isRequired,
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
              }} errorMessage={this.props.auth.errorMessage} successMessage={this.props.auth.successMessage}/>

            </div>
          </div>
        </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(store) {
  return {
      auth: store.auth,
      //nextPathname: store.routing.locationBeforeTransitions.state.nextPathname,
  }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({ ...actions }, dispatch),
      // changeLocationOnSignIn: () => {
      //     dispatch(push("/"));
      // },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);

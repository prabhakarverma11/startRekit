import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./redux/actions";
import LoginForm from "./components/LoginForm";


export class LoginPage extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        const {auth: {errorMessage,successMessage},actions: {login},history} = this.props;
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a className="navbar-brand block m-t">Angulr</a>
                    <div className="m-b-lg">
                        <div className="wrapper text-center">
                            <strong>Sign in to get in touch</strong>
                        </div>
                        <LoginForm {...this.props}
                                    login={(creds) => {
                                        login(creds, history)
                                    }}
                                    errorMessage={errorMessage}
                                    successMessage={successMessage}/>

                    </div>
                </div>
            </div>
        );
    }
}

/* istanbul ignore next */
function mapStateToProps(store) {
    return {
        auth: store.auth
        //nextPathname: store.routing.locationBeforeTransitions.state.nextPathname,
    }
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch),
        // changeLocationOnSignIn: () => {
        //     dispatch(push("/"));
        // },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPage);

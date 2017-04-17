import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./redux/actions";
import ForgotPwdForm from "./components/ForgotPwdForm";


export class ForgotPwdPage extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a className="navbar-brand block m-t">Angulr</a>
                    <div className="m-b-lg">
                        <div className="wrapper text-center">
                            <strong>Input your email to reset your password</strong>
                        </div>
                        <ForgotPwdForm {...this.props}
                                    login={(creds) => {
                                        this.props.actions.login(creds, this.props.history)
                                    }}
                                    errorMessage={this.props.auth.errorMessage}
                                    successMessage={this.props.auth.successMessage}/>

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
)(ForgotPwdPage);

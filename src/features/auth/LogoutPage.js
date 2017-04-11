import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import SigninForm from "./components/SigninForm";
import {browserHistory} from 'react-router';
import { Link } from 'react-router';

export class LogoutPage extends Component {
    componentDidMount =()=>{
        this.props.actions.logout();
        // browserHistory.push('/login/logout');
    };

    render() {

        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a className="navbar-brand block m-t">Angulr</a>
                    <div className="m-b-lg">
                        <h3 className="m-b-n-lg">You're signed out.</h3>
                        {/*<h3 className="m-b-n-lg">Click <Link to="/login"> here </Link> to login.</h3>*/}
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
)(LogoutPage);

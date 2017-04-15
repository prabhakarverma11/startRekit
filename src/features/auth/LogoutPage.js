import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./redux/actions";
import {Link} from "react-router";

export class LogoutPage extends Component {
    componentDidMount = () => {
        this.props.actions.logout();
    };

    render() {
        // this.props.actions.logout();
        return (
            <div className="app app-header-fixed ">
                <div className="container w-xxl w-auto-xs">
                    <a className="navbar-brand block m-t">Angulr</a>
                    <div className="m-b-lg">
                        <h3 className="m-b-n-lg">You're signed out.</h3><br/><br/>
                        <h5 className="m-b-n-lg">Click <Link to="/login" styleName="color: blue"> here </Link> to login.
                        </h5>
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
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutPage);

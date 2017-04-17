import React, {PropTypes, PureComponent} from "react";
import {connect} from "react-redux";
import {Brand} from "./Brand";
import {Home} from "./Home";
import {Menu} from "./Menu";
import {Notification} from "./Notification";
import {Search} from "./Search";
import {UserProfile} from "./UserProfile";

class Navigation extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        const {routes, auth: {isAuthenticated}} = this.props;
        console.log("from nav");
        console.log(isAuthenticated);
        return (
            <header id="header" className="app-header navbar" role="menu">
                <Brand></Brand>

                <div className="collapse pos-rlt navbar-collapse box-shadow bg-info dker">
                    <Home></Home>
                    <Menu routes={routes[0].childRoutes} basePath={""}></Menu>
                    <ul className="nav navbar-nav navbar-right">
                        <Notification></Notification>
                        <UserProfile></UserProfile>
                    </ul>

                    <Search></Search>

                </div>
            </header>
        );
    }
}

Navigation.propTypes = {
    routes: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps,)(Navigation);

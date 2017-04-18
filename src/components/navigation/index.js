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
            <div>
                {isAuthenticated && <header id="header" className="app-header navbar" role="menu">
                    <Brand />

                    <div className="collapse pos-rlt navbar-collapse box-shadow bg-info dker">
                        <Home />
                        <Menu routes={routes[0].childRoutes} basePath={""}/>
                        <ul className="nav navbar-nav navbar-right">
                            <Notification />
                            <UserProfile />
                        </ul>

                        <Search />

                    </div>
                </header>}
            </div>
        );
    }
}

Navigation.propTypes = {
    routes: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps,)(Navigation);

import React, {Component, PropTypes} from "react";
import Navigation from "../components/Navigation";
import {connect} from "react-redux";


class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        const {auth: {isAuthenticated}, routes} = this.props;
        console.log("App isAuthenticated: " + isAuthenticated);
        return (
            // className="app app-header-fixed "
            <div >
                {/*<h1>My Awesome Project!</h1>*/}
                {isAuthenticated && <Navigation routes={routes}/> }
                {/*{isAuthenticated && <SimpleNav routes={routes} /> }*/}
                <div className=" ">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
export default connect(mapStateToProps,)(App);

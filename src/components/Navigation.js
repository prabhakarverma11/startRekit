import React, {PropTypes, PureComponent} from "react";
import {connect} from "react-redux";
import {LinkContainer} from "react-router-bootstrap";
import {Link} from "react-router";
import {Button, FormControl, FormGroup, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import Header from "./table/Header";
class Navigation extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderLinks(items, basePath, isAuthenticated) {
        console.log("renderLinks");
        console.log(isAuthenticated);
        return (
            <div>
                {/*{*/}
                {/*items.reduce((prev, item) => {*/}
                {/*console.log("Navigation");*/}
                {/*console.log(prev);*/}
                {/*console.log(item.childRoutes);*/}
                {/*let path;*/}
                {/*if (/^\//.test(item.path)) {*/}
                {/*path = item.path;*/}
                {/*} else if (basePath === '/') {*/}
                {/*path = `/${item.path}`;*/}
                {/*} else {*/}
                {/*path = `${basePath}/${item.path}`;*/}
                {/*}*/}
                {/*console.log(path);*/}
                {/*prev.push(*/}
                {/*<li key={path}>*/}
                {/*<Link to={path}>*/}
                {/*{item.name || item.path}*/}
                {/*</Link>*/}
                {/*</li>*/}
                {/*);*/}

                {/*if (item.childRoutes && item.childRoutes.length) {*/}
                {/*prev.push(*/}
                {/*<li key={path+"/"}>*/}
                {/*{this.renderLinks(item.childRoutes, path)}*/}
                {/*</li>*/}
                {/*);*/}
                {/*}*/}
                {/*return prev;*/}
                {/*}, [])*/}
                {/*}*/}
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                        {/*<Navbar.Toggle />*/}
                    </Navbar.Header>
                    <Navbar.Collapse>

                        {/*{*/}
                        {/*!isAuthenticated &&*/}
                        {/*<Nav pullRight>*/}
                        {/*<LinkContainer to="/login">*/}
                        {/*<NavItem eventKey={0}>Login</NavItem>*/}
                        {/*</LinkContainer>*/}
                        {/*<LinkContainer to="/signup">*/}
                        {/*<NavItem eventKey={1}>Signup</NavItem>*/}
                        {/*</LinkContainer>*/}
                        {/*</Nav>*/}
                        {/*}*/}
                        {
                            isAuthenticated &&
                            <Nav pullRight>
                                <LinkContainer to="/auth/logout">
                                    <NavItem eventKey={0}>Logout</NavItem>
                                </LinkContainer>
                            </Nav>
                        }

                        <Nav>
                            {<LinkContainer to='/leads'>
                                <NavItem eventKey={3}>Lead</NavItem>
                            </LinkContainer>}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

    render() {
        const {routes, auth: {isAuthenticated}} = this.props;
        console.log("from nav");
        console.log(isAuthenticated);
        return (
            <div className="app app-header-fixed app-aside-fixed app-aside-folded">
                <Navbar inverse collapseOnSelect className="app-header navbar">
                    <Navbar.Header className="navbar-header bg-info dker">
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className="collapse pos-rlt navbar-collapse box-shadow bg-info dker">
                        {isAuthenticated &&
                            <Nav pullRight>
                                <LinkContainer to="/auth/logout">
                                    <NavItem eventKey={0}>Logout</NavItem>
                                </LinkContainer>
                            </Nav>
                        }

                        <Nav className="nav navbar-nav">
                            <LinkContainer to='/leads'>
                                <NavItem eventKey={3}>Lead</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
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

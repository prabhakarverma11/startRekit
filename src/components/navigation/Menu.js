/**
 * Created by nikunj on 17/4/17.
 */

import React, {PureComponent} from "react";
import {Link} from "react-router";

export class Menu extends PureComponent {


    render() {
        const {routes, basePath} = this.props;

        return (
            <ul className="nav navbar-nav hidden-xs">
                {
                    routes.reduce((prev, item) => {
                        console.log(item);
                        let path;
                        if (/^\//.test(item.path)) {
                            path = item.path;
                        } else if (basePath === '/') {
                            path = `/${item.path}`;
                        } else {
                            path = `${basePath}/${item.path}`;
                        }
                        prev.push(
                            item.presentOnNav &&
                            <li className="" key={item.path}>
                                <Link to={path}><span>{item.displayName}</span></Link>
                            </li>
                        );
                        return prev;
                    }, [])}

                <li className="dropdown hide">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                        <span >Settings</span> <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Setup</a></li>
                        <li><a href>Users & Roles</a></li>
                        <li><a href>Permissions</a></li>
                        <li><a href>Customization</a></li>
                        <li><a href>Automation</a></li>
                    </ul>
                </li>

                <li className="dropdown hide">
                    <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                        <span >Help</span> <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                        <li><a href="#">Help Desk</a></li>
                        <li><a href>Tutorials</a></li>
                        <li><a href>Feedback</a></li>
                    </ul>
                </li>
            </ul>
        )
    };
}
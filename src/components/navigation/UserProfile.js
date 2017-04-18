/**
 * Created by nikunj on 17/4/17.
 */

import React, {PureComponent} from "react";
import {Link} from "react-router";

export class UserProfile extends PureComponent {
    render() {
        return (
            <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle clear">
                            <span className="thumb-sm avatar pull-left m-t-n-sm m-b-n-sm m-l-sm">
                             <img src="" alt="..." />
                            <i className="on md b-white bottom" />
                            </span>
                    <span className="visible-xs">John.Smith</span> <b className=" visible-xs caret" />
                </a>
                <ul className="dropdown-menu  w">
                    <li className="wrapper b-b m-b-sm bg-light m-t-n-xs">
                        <div>
                            <p>300mb of 500mb used</p>
                        </div>
                        <div className="progress progress-xs m-b-none dker">
                            <div className="progress-bar progress-bar-info" data-toggle="tooltip"
                                 data-original-title="50%" style={{width: "50%"}} />
                        </div>
                    </li>
                    <li>
                        <a href="">
                            <span className="badge bg-danger pull-right">30%</span>
                            <span>Settings</span>
                        </a>
                    </li>
                    <li>
                        <a>Profile</a>
                    </li>
                    <li>
                        <a>
                            <span className="label bg-info pull-right">new</span>
                            Help
                        </a>
                    </li>
                    <li className="divider" />
                    <li>
                        <Link to="/auth/logout">Logout</Link>
                    </li>
                </ul>
            </li>
        );
    }
}
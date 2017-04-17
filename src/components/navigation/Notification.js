/**
 * Created by nikunj on 17/4/17.
 */

import React, {PureComponent} from "react";


export class Notification extends PureComponent {
    render() {
        return (
            <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                    <i className="icon-bell fa-fw"></i>
                    <span className="visible-xs-inline">Notifications</span>
                    <span className="badge badge-sm up bg-danger pull-right-xs">2</span>
                </a>
                <div className="dropdown-menu w-xl">
                    <div className="panel bg-white">
                        <div className="panel-heading b-light bg-light">
                            <strong>You have <span>2</span> notifications</strong>
                        </div>
                        <div className="list-group">
                            <a href className="list-group-item">
                                            <span className="pull-left m-r thumb-sm">
                                                <img src="img/a0.jpg" alt="..." className="img-circle"></img>
                                            </span>
                                <span className="clear block m-b-none">
                                                    Use awesome animate.css<br></br>
                                                    <small className="text-muted">10 minutes ago</small>
                                             </span>
                            </a>
                            <a href className="list-group-item">
                                            <span className="clear block m-b-none">
                                                1.0 initial released<br></br>
                                              <small className="text-muted">1 hour ago</small>
                                            </span>
                            </a>
                        </div>
                        <div className="panel-footer text-sm">
                            <a href className="pull-right"><i className="fa fa-cog"></i></a>
                            <a href="#notes" data-toggle="class:show animated fadeInRight">See all the
                                notifications</a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
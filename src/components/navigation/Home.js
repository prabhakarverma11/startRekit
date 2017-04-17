/**
 * Created by nikunj on 17/4/17.
 */
import React, {PureComponent} from "react";


export class Home extends PureComponent {
    render() {
        return (
            <div className="nav navbar-nav hidden-xs ">
                <a href="#" className="btn no-shadow navbar-btn hide"
                   target=".app">
                    <i className="fa fa-dedent fa-fw text"></i>
                    <i className="fa fa-indent fa-fw text-active"></i>
                </a>
                <a href="#" className="btn no-shadow navbar-btn"
                   target="#aside-user">
                    <i className="icon-home fa-fw"></i>
                </a>
            </div>
        )
    };
}
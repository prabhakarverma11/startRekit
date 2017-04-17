/**
 * Created by nikunj on 17/4/17.
 */
import React, {PureComponent} from "react";


export class Brand extends PureComponent {
    render() {
        return (
            <div className="navbar-header bg-info dker">
                <button className="pull-right visible-xs dk" target=".navbar-collapse">
                    <i className="glyphicon glyphicon-align-justify"></i>
                </button>
                <button className="pull-right hide" target=".app-aside"
                >
                    <i className="glyphicon glyphicon-align-justify"></i>
                </button>
                <a href="#/" className="navbar-brand text-lt">
                    <i className="fa fa-btc"></i>
                    <img src="img/logo.png" alt="." className="hide"></img>
                    <span className="hidden-folded m-l-xs">READ</span>
                </a>
            </div>
        )
    }
}
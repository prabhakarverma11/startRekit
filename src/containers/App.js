import React, {Component, PropTypes} from "react";
import Navigation from "../components/navigation/index";


export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        const {routes} = this.props;
        return (
            <div className="app app-header-fixed app-aside-fixed app-aside-folded">
                <Navigation routes={routes}/>
                <div className=" ">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


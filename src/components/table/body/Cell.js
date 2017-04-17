import React,{PureComponent} from "react";

export default class Cell extends PureComponent {
    render() {
        const {displayName} = this.props;
        return (
            <td>
                {displayName}
            </td>
        );
    }
}
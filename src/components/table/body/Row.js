import React, {Component} from "react";

export default class Row extends Component {


    render(){
        const {item} = this.props;



        return (
        for (var key in item) {
            <Cell displayName={item[key]}>
            </Cell>
        }

        );
    }
}
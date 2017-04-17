import React, {Component} from "react";
import Row from "./Row";

export default class TableBody extends Component {


    render(){

        const {items} = this.props;
        return (
            items.reduce((prev, item) => {
                prev.push(
                    <Row item={item}></Row>
                )
            })
        )

    }
}
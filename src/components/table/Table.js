import React, {PropTypes, Component} from "react";
import {Header as TableHeader} from "./Header";
import {Footer as TableFooter} from "./Footer";

export default class Table extends Component{
    insertRows = () =>{
        this.props.data.map((value, index) =>
            <Row cells/>
        );
    };
    render(){
        const {rowHeight, rowsCount,width,height,headerHeight} = this.props;
        return (
            <table>
                <TableHeader />
                {this.insertRows}
                <TableFooter />
            </table>
        );
    }
}
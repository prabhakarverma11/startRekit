import React, {Component} from "react";
import TableHeader from "./header/index";

export default class Table extends Component{

    render(){

        const {definition, data} = this.props;

        let displayedHeaders = new Map();

        definition.reduce((prev, field) => {
            displayedHeaders.set(field.name, field);
        });

        data.reduce((prev, item) => {

        });

        return (
            <div className="table-responsive bg-white ">
                <table className="table table-hover b-t b-light">
                    <TableHeader headers={displayedHeaders}></TableHeader>
                    <TableBody></TableBody>
                </table>
            </div>
        );
    }
}
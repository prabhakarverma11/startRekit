import React, {PropTypes, Component} from "react";

export default class Table extends Component{

    render(){
        return (
            <tfoot>
                <TableHeader />
                <TableFooter />
            </tfoot>
        );
    }
}
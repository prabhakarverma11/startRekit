import React, {PureComponent} from "react";
import HeaderCell from "./Cell";

export default class TableHeader extends PureComponent {


    render() {

        const {headers} = this.props;
        const headerCells = [];

        headers.forEach((value, key) => {
            headerCells.push(
                <HeaderCell key={key} name={value.displayName} isSortable={value.sortable}/>
            );
        });

        return (
            <thead>
            <tr>
                <th>
                    <label className=" m-b-none">
                        <a href="#" className="js-lead-list-fields-select">
                            <i className="fa fa-table fa-fw text-lg m-r-sm text-muted"/>
                        </a>
                    </label>
                    <label className=" i-checks i-checks-sm m-b-none  pull-right">
                        <input type="checkbox"/>
                        <i />
                    </label>
                </th>
                {headerCells}
            </tr>
            </thead>

        );
    }
}
import React, {PureComponent} from "react";
import Cell from "../body/Cell";

export default class TableHeader extends PureComponent {


    render(){

        const {headers} = this.props;

        return (
            <thead>
            <tr>
                <th>
                    <label className=" m-b-none">
                        <a href="#" className="js-lead-list-fields-select"><i
                            className="fa fa-table fa-fw text-lg m-r-sm text-muted"></i></a>
                    </label>
                    <label className=" i-checks i-checks-sm m-b-none  pull-right">
                        <input type="checkbox"><i></i></input>
                    </label>
                </th>

                headers.reduce((prev, item) => {
                prev.push(
                    <Cell name={item.displayName}></Cell>
                )
            }, [])
            </tr>
            </thead>

        );
    }
}
import React, {PropTypes, PureComponent} from "react";
import Cell from "./Cell";

class Row extends PureComponent {
    render() {
        const {item} = this.props;
        const insertCells = [];

        console.log(item);

        for (let key in item) {
            insertCells.push(<Cell key={key} displayName={item[key]}/>);
        }
        return (
            <tr>
                <td>
                    <label className="i-checks i-checks-sm m-b-none  pull-right">
                        <input type="checkbox" name="post[]"/>
                        <i></i>
                    </label>
                </td>
                {insertCells}
            </tr>
        );
    }
}

Row.propTypes = {
    item: PropTypes.object.isRequired
};

export default Row;
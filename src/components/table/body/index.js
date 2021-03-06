import React, {PureComponent} from "react";
import Row from "./Row";

export default class TableBody extends PureComponent {

    render() {
        const {items} = this.props;

        const insertRows = [];

        items.forEach((value, key) => {
                insertRows.push(
                    <Row key={key} item={value}/>
                );
            }
        );

        return (
            <tbody>
            {insertRows}
            </tbody>
        )

    }
}
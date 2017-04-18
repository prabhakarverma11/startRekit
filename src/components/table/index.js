import React, {PureComponent} from "react";
import TableHeader from "./header/index";
import TableBody from "./body/index";

export default class Table extends PureComponent{

    render(){

        const {definition, data} = this.props;
        let displayedHeaders = new Map();

        definition.map((item) => {
            displayedHeaders.set(item.name, item);
        });
        let displayedData = new Map();
        data.map((item,index) => {
            displayedData.set(index, item);
        });

        return (
            <div className="table-responsive bg-white ">
                <table className="table table-hover b-t b-light">
                    <TableHeader headers={displayedHeaders} />
                    <TableBody items={displayedData}/>
                </table>
            </div>
        );
    }
}
import React, {Component} from "react";

export default class Table extends Component{
    render(){

        const {name} = this.props;
        return (
            <th className="">
                <div className="dropdown">
                    <a href="#" data-toggle="dropdown"
                       className="dropdown-toggle"
                       aria-expanded="false">{name}
                        <i className="fa fa-chevron-down "
                        ></i>
                    </a>
                    <ul className="dropdown-menu " role="menu"
                        style="min-width: 100px;">
                        <li><a href="" className="text-xs">Asc <i
                            className="fa fa-chevron-up m-l"
                        ></i></a>
                        </li>
                        <li><a href="" className="text-xs">Desc <i
                            className="fa fa-chevron-down m-l"
                        ></i></a>
                        </li>
                    </ul>
                </div>
            </th>
        );
    }
}
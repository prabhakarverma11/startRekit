import React, {Component} from "react";

export default class HeaderCell extends Component {
    render() {

        const {name,isSortable} = this.props;

        return (
            <th className="">
                {
                    isSortable ?
                        (<div className="dropdown">
                            <a href="#" data-toggle="dropdown"
                               className="dropdown-toggle"
                               aria-expanded="false">{name} <i className="fa fa-chevron-down"/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="" className="text-xs">Asc
                                        <i className="fa fa-chevron-up m-l"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="text-xs">Desc
                                        <i className="fa fa-chevron-down m-l"/>
                                    </a>
                                </li>
                            </ul>
                        </div>) : name
                }
            </th>
        );
    }
}
import React, {Component, PropTypes} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "./redux/actions";
import Table from "../../components/table/index";

export class DefaultPage extends Component {

    render() {
        const definition = [
            {
                name: "name",
                displayName: "NAME",
                type: "INT",
                sortable: true,
                order: 0
            }, {
                name: "task",
                displayName: "TASK",
                type: "INT",
                sortable: true,
                order: 1
            }, {
                name: "date",
                displayName: "DATE",
                type: "INT",
                sortable: true,
                order: 2
            }, {
                name: "project",
                displayName: "PROJECT",
                type: "INT",
                sortable: true,
                order: 3
            }, {
                name: "name1",
                displayName: "NAME",
                type: "INT",
                sortable: true,
                order: 4
            }, {
                name: "task1",
                displayName: "TASK",
                type: "INT",
                sortable: true,
                order: 5
            }, {
                name: "date1",
                displayName: "DATE",
                type: "INT",
                sortable: true,
                order: 6
            }, {
                name: "project1",
                displayName: "PROJECT",
                type: "INT",
                sortable: true,
                order: 7
            }, {
                name: "name2",
                displayName: "NAME",
                type: "INT",
                sortable: true,
                order: 4
            }, {
                name: "task2",
                displayName: "TASK",
                type: "INT",
                sortable: true,
                order: 5
            }, {
                name: "date2",
                displayName: "DATE",
                type: "INT",
                sortable: true,
                order: 6
            }, {
                name: "project2",
                displayName: "PROJECT",
                type: "INT",
                sortable: true,
                order: 7
            }
        ];
        let dt = new Date(2017,4,18);
        dt = dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear();
        const data = [
            {
                name: "Prabhakar",
                task: "8c",
                date: dt,
                project: "Formasa",
                name1: "Prabhakar",
                task1: "8c",
                date1: dt,
                project1: "Formasa",
                name2: "Prabhakar",
                task2: "8c",
                date2: dt,
                project2: "Formasa"
            },{
                name: "Avatar system1",
                task: "8c",
                date: dt,
                project: "Formasa",
                name1: "Prabhakar",
                task1: "8c",
                date1: dt,
                project1: "Formasa",
                name2: "Prabhakar",
                task2: "8c",
                date2: dt,
                project2: "Formasa"
            },{
                name: "Avatar system2",
                task: "8c",
                date: dt,
                project: "Formasa",
                name1: "Prabhakar",
                task1: "8c",
                date1: dt,
                project1: "Formasa",
                name2: "Prabhakar",
                task2: "8c",
                date2: dt,
                project2: "Formasa"
            },{
                name: "Avatar system3",
                task: "8c",
                date: dt,
                project: "Formasa",
                name1: "Prabhakar",
                task1: "8c",
                date1: dt,
                project1: "Formasa",
                name2: "Prabhakar",
                task2: "8c",
                date2: dt,
                project2: "Formasa"
            },{
                name: "Avatar system4",
                task: "8c",
                date: dt,
                project: "Formasa",
                name1: "Prabhakar",
                task1: "8c",
                date1: dt,
                project1: "Formasa",
                name2: "Prabhakar",
                task2: "8c",
                date2: dt,
                project2: "Formasa"
            },
        ];
        return (
            <div className="leads-default-page">
                <div className="bg-light lter b-b wrapper-md lead-list-header-box ">
                    <div className="lead-list-actions-box clearfix animated slideInDown">
                        <h1 className="m-n font-thin h3 pull-left dropdown">
                            <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                                <i className="fa fa-fw fa-plus visible-xs-inline-block"></i>
                                <span >Leads</span> <span className="caret"></span>
                            </a>

                            <ul className="dropdown-menu" role="menu">
                                <li><a href="#" >All Contacts</a></li>
                                <li><a href="#" >My Contacts</a></li>
                                <li><a href="#" >New This Week</a></li>
                                <li>
                                    <a href>
                                        <span >Recently Created Contacts</span>
                                        <span className="badge bg-info m-l">5</span>
                                    </a>
                                </li>
                                <li><a href >Recently Updated Contacts</a></li>
                                <li className="divider"></li>
                                <li><a href >Clone This View</a></li>
                                <li><a href >Make This Default View</a></li>
                                <li className="divider"></li>
                                <li><a href="#" className=""><span className="text-info-dker">+ Create View</span></a></li>
                            </ul>
                            <span className="badge bg-light m-l ">232</span>
                        </h1>

                        <div className="pull-right">
                            <div className="btn-group">
                                <label className="btn btn-default"><span className="">+</span></label>
                                <label className="btn btn-default">Import</label>
                            </div>

                            <div className="btn-group m-l dropdown">
                                <a className="btn btn-default" data-toggle="dropdown"
                                   >
                                    <i className="fa  fa-ellipsis-h"></i></a>

                                <ul className="dropdown-menu pull-right" role="menu">
                                    <li><a href="#" >All Contacts</a></li>
                                    <li><a href="#" >My Contacts</a></li>
                                    <li><a href="#" >New This Week</a></li>
                                    <li><a href="" >Recently Updated Contacts</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="lead-selected-actions-box clearfix animated slideInUp">
                        <div className="pull-left">
                            <span className="text-md">1 Lead selected.</span>
                            <span className="m-l-xs"><a href><span
                                className="text-info-dker text-sm">Clear</span></a></span>
                            <span className="m-l-lg">
                            <button className="btn btn-default"><span className="text">Send Email</span></button>
                            <button className="btn btn-default m-l-xs"><span className="text">Create Task</span></button>
                            <div className="btn-group m-l dropdown">
                                <ul className="dropdown-menu pull-right" role="menu">
                                    <li><a href="#" >More Actions</a></li>
                                    <li><a href="#" >Delete</a></li>
                                    <li><a href="#" >Change Owner</a></li>
                                    <li className="divider"></li>
                                    <li><a href="" >Add To List</a></li>
                                    <li><a href="" >Remove From List</a></li>
                                </ul>

                                <a className="btn btn-default" data-toggle="dropdown" >
                                    <i className="fa  fa-ellipsis-h"></i></a>
                            </div>
                        </span>

                        </div>
                        <div className="pull-right">
                            <small className="text-muted inline m-t-sm m-b-sm m-r-lg">Showing 20-30 of 50 items</small>
                            <ul className="pagination pagination-sm m-t-none m-b-none inline v-middle">
                                <li className="paginate_button previous disabled"
                                    aria-controls="DataTables_Table_1" tabIndex="0">
                                    <a href="#"><i className="fa fa-angle-left text-lg fa-fw"></i></a></li>
                                <li className="paginate_button next" aria-controls="DataTables_Table_1"
                                    tabIndex="0">
                                    <a href="#"><i className="fa fa-angle-right  text-lg fa-fw"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Table definition={definition} data={data}/>
            </div>
        );
    }
}

DefaultPage.propTypes = {
    leads: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
    return {
        leads: state.leads,
    };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultPage);

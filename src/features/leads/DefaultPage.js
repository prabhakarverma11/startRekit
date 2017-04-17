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
                sortable: false,
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
                sortable: false,
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

                </div>
                <div className="row-row">
                    <div className="cell w-full">
                        <div className="cell-inner">
                            <div className="hbox hbox-auto-xs bg-white">
                                <div className="col w-md b-r filter-box">
                                    <div className="vbox">
                                        <div className="wrapper ">
                                            <span>FILTER LEADS BY</span>
                                            <span className="pull-right"><a href className="text-base"><span
                                                className="text-info-dker">Clear</span></a></span>
                                        </div>
                                        <div className="row-row">
                                            <div className="cell">
                                                <div className="cell-inner">
                                                    {/*<div className="wrapper">*/}
                                                        {/*<a href="#" className="hide"><span className="text-info-dker">+ Add Filter</span></a>*/}

                                                        {/*<table className="">*/}
                                                            {/*<thead>*/}
                                                            {/*<tr>*/}
                                                                {/*<th></th>*/}
                                                                {/*<th></th>*/}
                                                            {/*</tr>*/}
                                                            {/*</thead>*/}
                                                            {/*<tbody>*/}
                                                            {/*<tr>*/}
                                                                {/*<td colSpan="2">*/}
                                                                    {/*<a href="#"><i className="fa fa-plus-square-o text-md m-r" /> First Name</a>*/}
                                                                {/*</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td colSpan="2">*/}
                                                                    {/*<a href="#"><i className="fa fa-plus-square-o text-md m-r" /> Activities</a></td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Deals</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Contact Name</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Email</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Phone</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Lead Owner</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Lead Source</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Created By</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Created Date</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>DOB</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Last Name</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>City</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Lead Score</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Lead Owner</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Lead Source</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Created By</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Created Date</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>DOB</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Last Name</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>City</td>*/}
                                                            {/*</tr>*/}
                                                            {/*<tr>*/}
                                                                {/*<td><label className="i-checks i-checks-sm m-b-none m-r-xs"><input*/}
                                                                    {/*type="checkbox" name="post[]" /><i /></label>*/}
                                                                {/*</td>*/}
                                                                {/*<td>Lead Score</td>*/}
                                                            {/*</tr>*/}
                                                            {/*</tbody>*/}

                                                        {/*</table>*/}

                                                    {/*</div>*/}

                                                    <div className="wrapper b-t b-light text-center">
                                                        <p>Footer with fluid height</p>
                                                        <a href="" className="btn btn-info">Create Marker</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col ">

                                    <div className="vbox">
                                        <div className="row-row">
                                            <div className="cell">
                                                <div className="cell-inner">
                                                    <div className="">
                                                      <span className="pull-right">
                                                        <a href className="js-collapse-filter-box">
                                                            <i className="fa fa-chevron-left text-white text-xs m-t"
                                                                />
                                                        </a>
                                                        <a href="" className="js-expand-filter-box " >
                                                            <i className="fa fa-chevron-right text-white text-xs m-t"
                                                                />
                                                        </a>
                                                        </span>
                                                            <Table definition={definition} data={data}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

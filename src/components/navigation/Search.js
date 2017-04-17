/**
 * Created by nikunj on 17/4/17.
 */
import React, {PureComponent} from "react";

export class Search extends PureComponent {
    render() {
        return (
            <form className="navbar-form navbar-form-sm navbar-right shift"
                  data-target=".navbar-collapse" role="search">
                <div className="form-group">
                    <div className="input-group">
                        <input type="text"

                               className="form-control input-sm bg-light no-border rounded padder"
                               placeholder="Search projects...">
                        </input>
                        <span className="input-group-btn">
                                    <button type="submit" className="btn btn-sm bg-light rounded"
                                    ><i
                                        className="fa fa-search"></i>
                                    </button>
                                </span>
                    </div>
                </div>
            </form>
        );
    }
}
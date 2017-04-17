import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

export default class ForgotPwdForm extends Component {
    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("component will receive Props");
    //     console.log(nextProps);
    //     if (nextProps.auth.isAuthenticated && nextProps.auth.user &&
    //         !nextProps.auth.errorMessage) {
    //         browserHistory.push("/");
    //     }
    // }

    // componentDidUpdate =() =>{
    //     if(this.props.auth.isAuthenticated){
    //         browserHistory.push("/");
    //         console.log("browserHistory uodates");
    //     }
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        const username = ReactDOM.findDOMNode(this.refs.username).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        const creds = {"username": username.trim(), "password": password.trim()};
        console.log(creds);
        this.props.login(creds);

    };

    render() {
        const {errorMessage, successMessage} = this.props;
        return (
            <form name="form" className="form-validation" role="form" method="post" onSubmit={this.onFormSubmit}>
                <div className="text-danger wrapper text-center">

                </div>
                <div className="list-group list-group-sm">
                    <div className="list-group-item">
                        <input type="email" placeholder="Email" ref="username"
                               className="form-control no-border"/>
                    </div>

                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.onFormSubmit}>Send
                </button>
                <div className="line line-dashed"></div>

            </form>

        );
    }
}
ForgotPwdForm.propTypes = {
    // login: PropTypes.func.isRequired,
    // errorMessage: PropTypes.string
}
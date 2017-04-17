import React, {Component,PropTypes} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const username = ReactDOM.findDOMNode(this.refs.username).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        const creds = {"username": username.trim(), "password": password.trim()};
        if(username && password)
            this.props.login(creds);
        else
            alert("username and password can not be empty")

    };
    handleOnChange = (e) =>{

    }

    render() {
        const {errorMessage, successMessage} = this.props;
        return (
            <form name="form" className="form-validation" role="form" method="post" onSubmit={this.handleOnSubmit}>
                <div className="text-danger wrapper text-center">

                </div>
                <div className="list-group list-group-sm">
                    <div className="list-group-item">
                        <input type="email" placeholder="Email" ref="username"
                               className="form-control no-border" required="required" />
                    </div>
                            {/*{document.getElementById("authError").innerHTML=""}*/}
                    <div className="list-group-item">
                        <input type="password" placeholder="Password" ref="password"
                               className="form-control no-border" />
                    </div>
                </div>
                {errorMessage && <div id="authError" className="alert-dismissable alert-danger">{errorMessage}</div>}
                <div className="line line-dashed"></div>

                <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.handleOnSubmit}>Log in
                </button>
                <div className="text-center m-t m-b"><Link to="/auth/forgotpwd"> Forgot password?</Link></div>
                <div className="line line-dashed"></div>

                <p className="text-center">
                    <small>Do not have an account?</small>
                </p>
                <Link to="/auth/register" className="btn btn-lg btn-default btn-block"> Create an account</Link>
            </form>

        );
    }
}
LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    successMessage: PropTypes.string
}
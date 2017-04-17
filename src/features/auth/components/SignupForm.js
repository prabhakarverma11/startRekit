import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import {redirectAuth} from "../../../common/routeConfig";
export default class SignupForm extends Component {
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
        this.props.requestSignin(creds);

    }

    render() {
        const {errorMessage, successMessage} = this.props;
        return (
            <form name="form" className="form-validation" role="form" method="post" onSubmit={this.onFormSubmit}>
                <div className="text-danger wrapper text-center">

                </div>
                <div className="list-group list-group-sm">
                    <div className="list-group-item">
                        <input type="text" placeholder="Name" ref="name"
                               className="form-control no-border"/>
                    </div>
                    <div className="list-group-item">
                        <input type="email" placeholder="Email" ref="username"
                               className="form-control no-border"/>
                    </div>
                    <div className="list-group-item">
                        <input type="password" placeholder="Password" ref="password"
                               className="form-control no-border"/>
                    </div>
                </div>
                <div className="checkbox m-b-md m-t-none">
                    <label className="i-checks">
                        <input type="checkbox" required="" tabIndex="0" aria-checked="false" aria-required="true" aria-invalid="true" />
                        <i></i>
                        Agree the <a href="">terms and policy</a>
                    </label>
                </div>

                <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.onFormSubmit}>Register
                </button>
                <div className="line line-dashed"></div>
                <p className="text-center">
                    <small>Already have an account?</small>
                </p>
                <Link to="/auth/" className="btn btn-lg btn-default btn-block">Log in</Link>
            </form>

        );
    }
}
SignupForm.propTypes = {
    // login: PropTypes.func.isRequired,
    // errorMessage: PropTypes.string
}
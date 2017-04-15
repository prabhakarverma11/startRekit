import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./constants";
import {makeRequest} from "../../../common/axiosRequest";
import {push} from "react-router-redux";
import base64 from "base-64";
import utf8 from "utf8";
import {app} from "../../../common/appConfig";


function requestLogin(creds) {
    return ({
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    });
}

function receiveLogin(user) {
    console.log("USEr = >", JSON.stringify(user));
    console.log("USEr TOKEN = >", user.idToken);

    return ({
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        successMessage: "Logged in successfully",
        idToken: user.idToken,
        user
    });
}

function loginError(message) {
    return ({
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    });
}

export function login(creds, redirect = "/") {

    let utfString = utf8.encode(creds.username + ":" + creds.password);
    let encoded64String = base64.encode(utfString);
    console.log(encoded64String);

    const loginCall = {
        api: app.config.apiURL + '/oauth/token?username='
        + creds.username + '&password=' + creds.password +
        '&grant_type=password&scope=write&client_secret='
        + app.config.clientSecret + '&client_id=' + app.config.clientId,

        method: "POST",
        headers: {
            "Authorization": "Basic " + encoded64String
        },
    };

    return dispatch => {
        dispatch(requestLogin({username: creds.username, password: creds.password}));

        return makeRequest(loginCall.method, loginCall.api, loginCall.data, loginCall.headers)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('id_token', response.data.access_token);
                    let user = {idToken: response.data.access_token};
                    dispatch(receiveLogin(user));
                    dispatch(push(redirect));

                } else {
                    dispatch(loginError(response.data.message));
                    return Promise.reject(response.data);
                }
            }).catch((err) => {
                console.error("Authentication Error: " + err);
                dispatch(loginError("Authentication Failed !"));
            });
    }
}


import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./constants";
import {browserHistory} from "react-router";
import {makeRequest} from "../../../common/axiosRequest";
import {push} from "react-router-redux";
import {combineReducers} from "redux";


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

export function login(creds, history, redirect = "/") {
    const config = {
        api: 'http://localhost:8080/sme/api/login',
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, X-Codingpedia"
        },
        data: creds
    }
    return dispatch => {
        dispatch(requestLogin({username: creds.username, password: creds.password}));
        // if(creds.username === "prabhakarverma11@gmail.com" && creds.password ==="password"){
        //     dispatch(receiveLogin({user:{name:"prabhakar",id_token:12345}}))
        //     return null;
        // }
        return makeRequest(config.method, config.api, config.data, config.headers)
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('id_token', JSON.parse(response.data.user).idToken);
                    dispatch(receiveLogin(JSON.parse(response.data.user)));
                } else {
                    console.log("<><><><><><>");
                    dispatch(loginError(response.data.message));
                    return Promise.reject(response.data);
                }
            }).catch((err) => {
                //dispatch(loginError("Authentication Failed !"));

                localStorage.setItem('id_token', 12345);

                let user = {
                    idToken: 12345
                };

                dispatch(receiveLogin(user));

                console.error("Authentication Error: ");
                dispatch(push('/'));

            });
    }
}


const isFetching = (state = false,
                    action) => {
    switch (action.type) {
        case LOGIN_REQUEST:

            return true;
        case LOGIN_SUCCESS:
        case LOGIN_FAILURE:


            return false;
        default:
            return state;
    }
};

const isAuthenticated = (state = (localStorage.getItem('id_token') != ''),
                         action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return true;
        case LOGIN_REQUEST:
        case LOGIN_FAILURE:
            return false;
        default:
            return state;
    }
};

const errorMessage = (state = '',
                      action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGIN_SUCCESS:


            return '';
        case LOGIN_FAILURE:

            return action.message;
        default:
            return state;
    }
};

const successMessage = (state = '',
                        action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:


            return action.successMessage;
        case LOGIN_FAILURE:
        case LOGIN_REQUEST:


            return '';
        default:
            return state;
    }
};

const user = (state = {},
              action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {};

            return action.details;
        case LOGIN_SUCCESS:
            console.log("Hi from authReducer: user: ");
            console.log(action.user);
            return action.user;
        case LOGIN_FAILURE:
            return {};
        default:
            return state;
    }
};

const idToken = (state = '', action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.idToken;
        case LOGIN_REQUEST:
        case LOGIN_FAILURE:
            return '';
        default:
            return state;
    }
};

const loginReducer = combineReducers({
    isFetching,
    isAuthenticated,
    errorMessage,
    user,
    successMessage,
    idToken,
});

export default loginReducer;

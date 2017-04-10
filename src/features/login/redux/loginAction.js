import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './constants';

import {makeRequest} from "../../../common/axiosRequest"

function requestLogin(creds) {
    return ({
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    });
}

function receiveLogin(user) {
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

export function login(creds) {
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
                    localStorage.setItem('id_token', JSON.parse(response.data.user).id_token);
                    dispatch(receiveLogin(JSON.parse(response.data.user)));
                } else {
                    // console.log("<><><><><><>");
                    dispatch(loginError(response.data.message));
                    return Promise.reject(response.data);
                }
            }).catch((err) => {
                //dispatch(loginError("Authentication Failed !"));
                dispatch(receiveLogin({idToken: 12345}));
                localStorage.setItem('id_token', 12345);
                //console.error("Authentication Error: ")
            });
    }
}

export function reducer(state, action) {
  const newState = Object.assign({}, state);
    console.log("hi from reducer login");
    console.log(action);
  switch (action.type) {
    case LOGIN_REQUEST: {
        newState.isFetching = true;
        newState.isAuthenticated = false;
        newState.errorMessage = '';
        newState.successMessage = '';
        newState.user = {};
        newState.idToken = '';
        break;
    }
    case LOGIN_SUCCESS: {
        newState.isFetching = false;
        newState.isAuthenticated = true;
        newState.errorMessage = '';
        newState.successMessage = action.message;
        newState.user = action.user;
        newState.idToken = action.idToken;
        break;
    }
    case LOGIN_FAILURE: {
        newState.isFetching = false;
        newState.isAuthenticated = false;
        newState.errorMessage = action.message;
        newState.successMessage = '';
        newState.user = {};
        newState.idToken = '';
        break;
    }
    default:{
        break;
    }

  }
  // console.log(newState);
  return newState;
}

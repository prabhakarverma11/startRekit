import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./constants";

export function login(creds) {
    return {
        type: LOGIN_REQUEST,
        payload: creds
    };
}

export function reducer(state, action) {
    const newState = Object.assign({}, state);
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
        default:
            break;

    }
    return newState;
}

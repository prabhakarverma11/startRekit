import {LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "./constants";
import {push} from "react-router-redux";


function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: false
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false,
        successMessage: "Logged out."
    };
}

function logoutError() {
    return {
        type: LOGOUT_FAILURE,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: "Could not logout"
    };
}

export function logout() {
    return dispatch => {
        dispatch(requestLogout());
        try {
            localStorage.removeItem('id_token');
        } catch (err) {
            dispatch(logoutError());
        }
        dispatch(receiveLogout());
        dispatch(push('/auth/logout'));
        return;
    }
}
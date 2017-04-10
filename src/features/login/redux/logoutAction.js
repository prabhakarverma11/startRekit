import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from './constants';

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false,
        successMessage: ""
    };
}

function logoutError() {
    return {
        type: LOGOUT_FAILURE,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: "Cound not logout"
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
        ;
        dispatch(receiveLogout());
        return;
    }
}

export function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case LOGOUT_REQUEST: {
            newState.isFetching = true;
            newState.isAuthenticated = true;
            newState.errorMessage = '';
            newState.successMessage = '';
            newState.user = {};
            newState.idToken = '';
            break;
        }
        case LOGOUT_SUCCESS: {
            newState.isFetching = false;
            newState.isAuthenticated = false;
            newState.errorMessage = '';
            newState.successMessage = action.message;
            newState.user = {};
            newState.idToken = '';
            break;
        }
        case LOGOUT_FAILURE: {
            newState.isFetching = false;
            newState.isAuthenticated = true;
            newState.errorMessage = action.message;
            newState.successMessage = '';
            newState.user = {};
            newState.idToken = '';
            break;
        }
        default:
            return state;
    }
    return newState;
}

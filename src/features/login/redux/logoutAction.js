import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from './constants';

export function logout() {
    return {
        type: LOGOUT_REQUEST
    };
}

export default function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case LOGOUT_REQUEST: {
            newState.isFetching = true;
            newState.isAuthenticated = true;
            newState.errorMessage = '';
            newState.successMessage = '';
            newState.user = {};
            //newState.idToken = '';
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
}

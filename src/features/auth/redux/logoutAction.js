import {LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "./constants";
import initialState from "./initialState";
import {combineReducers} from "redux";

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
        return;
    }
}
//
// const isFetching = (state = false,
//                     action) => {
//     switch (action.type) {
//         case LOGOUT_REQUEST:
//             return true;
//         case LOGOUT_SUCCESS:
//         case LOGOUT_FAILURE:
//             return false;
//         default:
//             return state;
//     }
// };
//
// const isAuthenticated = (state = (localStorage.getItem('id_token') !=''),
//                          action) => {
//     switch (action.type) {
//         case LOGOUT_FAILURE:
//             return true;
//         case LOGOUT_REQUEST:
//         case LOGOUT_SUCCESS:
//             return false;
//         default:
//             return state;
//     }
// };
//
// const errorMessage = (state = '',
//                       action) => {
//     switch (action.type) {
//         case LOGOUT_REQUEST:
//         case LOGOUT_SUCCESS:
//             return '';
//         case LOGOUT_FAILURE:
//             return action.message;
//         default:
//             return state;
//     }
// };
//
// const successMessage = (state = '',
//                         action) => {
//     switch (action.type) {
//         case LOGOUT_SUCCESS:
//             return action.successMessage;
//         case LOGOUT_REQUEST:
//         case LOGOUT_FAILURE:
//             return '';
//         default:
//             return state;
//     }
// };
//
// const user = (state = {},
//               action) => {
//     switch (action.type) {
//         case LOGOUT_REQUEST:
//         case LOGOUT_FAILURE:
//         case LOGOUT_SUCCESS:
//             return {};
//         default:
//             return state;
//     }
// };
//
// const idToken = (state = '',
//                  action) => {
//     switch (action.type) {
//         case LOGOUT_REQUEST:
//         case LOGOUT_FAILURE:
//         case LOGOUT_SUCCESS:
//             return '';
//         default:
//             return state;
//     }
// };
//
// const logoutReducer = combineReducers({
//     isFetching,
//     isAuthenticated,
//     errorMessage,
//     user,
//     successMessage,
//     idToken,
// });
//
// export default logoutReducer;
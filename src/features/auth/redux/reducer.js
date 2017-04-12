import {combineReducers} from "redux";
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS} from "./constants";

import loginReducer from "./loginAction";
import logoutReducer from "./logoutAction";
import initialState from "./initialState";


const isFetching = (state = false,
                    action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
            return true;
        case LOGIN_SUCCESS:
        case LOGIN_FAILURE:
        case LOGOUT_SUCCESS:
        case LOGOUT_FAILURE:
            return false;
        default:
            return state;
    }
};

const isAuthenticated = (state = (localStorage.getItem('id_token')!=null),
                         action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case LOGOUT_FAILURE:
            return true;
        case LOGIN_REQUEST:
        case LOGIN_FAILURE:
        case LOGOUT_REQUEST:
        case LOGOUT_SUCCESS:
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
        case LOGOUT_REQUEST:
        case LOGOUT_SUCCESS:
            return '';
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE:
            return action.message;
        default:
            return state;
    }
};

const successMessage = (state = '',
                        action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
        case LOGOUT_SUCCESS:
            return action.successMessage;
        case LOGIN_FAILURE:
        case LOGIN_REQUEST:
        case LOGOUT_REQUEST:
        case LOGOUT_FAILURE:
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
        case LOGIN_SUCCESS:
            console.log("Hi from authReducer: user: ");
            console.log(action.user);
            return action.user;
        case LOGIN_FAILURE:
        case LOGOUT_REQUEST:
        case LOGOUT_SUCCESS:
        case LOGOUT_FAILURE:
            return {};
        default:
            return state;
    }
};

const idToken = (state = null,
                 action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.idToken;
        case LOGIN_REQUEST:
        case LOGIN_FAILURE:
        case LOGOUT_REQUEST:
        case LOGOUT_SUCCESS:
        case LOGOUT_FAILURE:
            return '';
        default:
            return state;
    }
};

const authReducer = combineReducers({
    isFetching,
    isAuthenticated,
    errorMessage,
    user,
    successMessage,
    idToken,
});

export default authReducer;














// const reducers = combineReducers({
//     loginReducer,
//     logoutReducer,
// });
// export default reducers;

// const reducers = [
//   loginReducer,
//     logoutReducer
// ];
//
//
// export default function reducer(state = initialState, action) {
//     let newState;
//     switch (action.type) {
//         // Handle cross-topic actions here
//         default:
//             newState = state;
//             break;
//     }
//     return reducers.reduce((s, r) => r(s, action), newState);
// }


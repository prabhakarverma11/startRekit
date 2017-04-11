import {combineReducers} from "redux";

import loginReducer from "./loginAction";
import {reducer as logout} from "./logoutAction";

const reducers = combineReducers({
    loginReducer,
    logout,
});

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

export default reducers;
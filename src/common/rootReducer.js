import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import homeReducer from "../features/home/redux/reducer";
import authReducer from "../features/auth/redux/reducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    home: homeReducer,
    auth: authReducer,
});

export default rootReducer;

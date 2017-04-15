import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import homeReducer from "../features/home/redux/reducer";
import authReducer from "../features/auth/redux/reducer";
import leadsReducer from '../features/leads/redux/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    home: homeReducer,
    auth: authReducer,
  leads: leadsReducer,
});

export default rootReducer;

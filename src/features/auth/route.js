import {
    LoginPage,
    LogoutPage
} from './index';
import {redirectAuth} from "../../common/routeConfig"
export default {
    path: 'auth',
    childRoutes: [
        {path: 'login', component: LoginPage, isIndex: true, onEnter: redirectAuth,},
        {path: 'logout', component: LogoutPage},
    ],
};

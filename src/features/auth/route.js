import {LoginPage, LogoutPage} from "./index";
import {logout} from "./redux/logoutAction";

export default (redirectAuth, dispatch) => ({
    path: 'login',
    childRoutes: [
        {path: 'default-page', component: LoginPage, isIndex: true, onEnter: redirectAuth},
        {path: 'logout', component: LogoutPage,},
    ],
});

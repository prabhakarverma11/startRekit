import {LoginPage, LogoutPage} from "./index";

export default (redirectAuth) => ({
    path: 'login',
    childRoutes: [
        {path: 'default-page', component: LoginPage, isIndex: true, onEnter: redirectAuth},
        {path: 'logout', component: LogoutPage},
    ],
});

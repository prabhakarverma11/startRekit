import {LoginPage, LogoutPage, RegisterPage,ForgotPwdPage} from "./index";

export default (redirectAuth, dispatch) => ({
    path: 'auth',
    childRoutes: [
        {path: 'login', component: LoginPage, isIndex: true, onEnter: redirectAuth},
        {path: 'logout', component: LogoutPage,},
        {path: 'register', component: RegisterPage,},
        {path: 'forgotpwd', component: ForgotPwdPage,},
    ],
});

import {
  DefaultPage,
    LogoutPage
} from './index';
import {redirectAuth} from "../../common/routeConfig"
export default {
  path: 'login',
  childRoutes: [
      { path: 'default-page', component: DefaultPage, isIndex: true },
      { path: 'logout', component: LogoutPage},
  ],
};

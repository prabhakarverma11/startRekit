import {
  DefaultPage,
  TestPage1,
  TestPage2,
} from './index';
import {requireAuth} from "../../common/routeConfig"

export default {
  path: '',
  name: 'home',
  onEnter: requireAuth,
  childRoutes: [
    { path: 'default-page', component: DefaultPage, isIndex: true,},
    { path: 'test-page-1', component: TestPage1 },
    { path: 'test-page-2', component: TestPage2 },
  ],
};

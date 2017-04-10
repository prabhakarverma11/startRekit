import {
  DefaultPage,
} from './index';

export default {
  path: 'login',
  childRoutes: [
      { path: 'default-page', component: DefaultPage, isIndex: true },
  ],
};

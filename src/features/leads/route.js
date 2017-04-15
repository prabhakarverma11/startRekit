import {
  DefaultPage,
} from './index';

export default (requireAuth)=> ({
  path: 'leads',
  name: 'leads',
  childRoutes: [
    { path: 'default-page', component: DefaultPage,isIndex: true, onEnter: requireAuth },
  ],
});

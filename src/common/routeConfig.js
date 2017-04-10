import App from '../containers/App';

import { PageNotFound } from '../components';
import homeRoute from '../features/home/route';
import loginRoute from '../features/login/route';
import configureStore from "./configStore"
const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    homeRoute,
    loginRoute,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ],
}];

// Handle isIndex property of route config:
//  1. remove the first child with isIndex=true from childRoutes
//  2. assign it to the indexRoute property of the parent.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  route.childRoutes = route.childRoutes.filter(child => { // eslint-disable-line
    if (child.isIndex) {
      /* istanbul ignore next */
      if (process.env.NODE_ENV === 'dev' && route.indexRoute) {
        console.error('More than one index route: ', route);
      }

      /* istanbul ignore else */
      if (!route.indexRoute) {
        delete child.path; // eslint-disable-line
        route.indexRoute = child; // eslint-disable-line
        return false;
      }
    }
    return true;
  });

  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;

const store = configureStore({});

export function requireAuth(nextState, replace, callback){
    console.log("This URL needs authentication");
    const {login: {isAuthenticated}} = store.getState();
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        console.log("it is not here");
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
    }
    callback();
};

export function redirectAuth (nextState, replace, callback) {
    const {login: {isAuthenticated}} = store.getState();
    console.log("URL is being redirected");
    if (isAuthenticated) {
        replace({
            pathname: '/'
        });
    }
    callback();
};
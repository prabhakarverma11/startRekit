import App from "../containers/App";

import {PageNotFound} from "../components";
import homeRoute from "../features/home/route";
import authRoute from "../features/auth/route";
import configureStore from "./configStore";


const store = configureStore({});

const routes = [{
    path: '/',
    component: App,
    childRoutes: [
        homeRoute,
        authRoute,
        {path: '*', name: 'Page not found', component: PageNotFound},
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

export function requireAuth(nextState, replace, callback) {
    console.log("This URL needs authentication");

    console.log(store.getState());

    // const {auth: {loginReducer: {isAuthenticated}}} = store.getState();
    const {auth: {isAuthenticated}} = store.getState();
    console.log(isAuthenticated);

    if (!isAuthenticated) {
        console.log("it is not here");
        replace({
            pathname: '/auth',
            state: {nextPathname: nextState.location.pathname}
        });
    }
    callback();
}


export function redirectAuth(nextState, replace, callback) {
    const {auth: {isAuthenticated}} = store.getState();
    console.log(store.getState());

    if (isAuthenticated) {
        replace({
            pathname: '/'
        });
    }

    callback();
}

routes.forEach(handleIndexRoute);
export default routes;
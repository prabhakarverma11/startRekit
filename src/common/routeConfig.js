import App from "../containers/App";

import {browserHistory} from "react-router";
import {PageNotFound} from "../components";
import homeRoute from "../features/home/route";
import authRoute from "../features/auth/route";
import {logout} from "../features/auth/redux/logoutAction";
import leadsRoute from '../features/leads/route';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {

    const requireAuth = (nextState, replace, callback) => {
        const {auth: {isAuthenticated}} = store.getState();
        console.log("Testing");
        if (!isAuthenticated) {
            replace({
                pathname: '/auth',
                state: {nextPathname: nextState.location.pathname}
            });
        }
        callback();
    };

    const redirectAuth = (nextState, replace, callback) => {
        const {auth: {isAuthenticated}} = store.getState();
        if (isAuthenticated) {
            replace({
                pathname: '/'
            });
        }
        callback();
    };

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

    let routes = (
        [{
            path: '/',
            component: App,
            childRoutes: [
                homeRoute(requireAuth),
                authRoute(redirectAuth),
                leadsRoute(requireAuth),
                {path: '*', name: 'Page not found', component: PageNotFound},
            ],
        }]
    );
    console.log("Store config: ");
    console.log(store);
    routes.forEach(handleIndexRoute);
    return routes;
};



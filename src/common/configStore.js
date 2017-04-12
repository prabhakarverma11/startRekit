import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware} from "react-router-redux";

import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


import {createLogger} from "redux-logger";


export default function configureStore(initialState, history) {
    const middleware = [thunk, routerMiddleware(history)];
    let devToolsExtension = f => f;


    if (process.env.NODE_ENV === 'dev') {
        const createLogger = require('redux-logger');

        const logger = createLogger({collapsed: true});
        middleware.push(logger);

        if (window.devToolsExtension) {
            devToolsExtension = window.devToolsExtension();
        }
    }

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleware),
        devToolsExtension
    ));

    /* istanbul ignore if  */
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./rootReducer', () => {
            const nextRootReducer = require('./rootReducer').default; // eslint-disable-line
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

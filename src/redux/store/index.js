/**
 * Main store function
 */
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, compose, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { rootReducer } from '../reducers';
import initialState from '../reducers/initialState';

function configureStoreDev(initialState) {

    const middlewares = [

        logger,

        thunk,
    ];

    const store = createStore(
        rootReducer(),

        initialState,

        composeWithDevTools(applyMiddleware(...middlewares))
    );
    return store;
}

const Store = configureStoreDev(initialState);


export default Store;

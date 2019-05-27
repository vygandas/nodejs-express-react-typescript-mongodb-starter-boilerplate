import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import * as reducers from './reducers';
import { IWindow } from './interfaces/IWindow';

const composeEnhancers =
    typeof window === 'object' && (<IWindow>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (<IWindow>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk),
    // other store enhancers if any
);

const reducer = combineReducers({ ...reducers });

const store = createStore(reducer, enhancer);

export default store;
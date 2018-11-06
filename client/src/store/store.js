import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducer/root_reducer';

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const store = configureStore();

// preloadedState,
// applyMiddleware(thunk, logger)

export default store;

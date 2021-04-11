import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// use middleware
const middlewares = [thunk, logger];

// create store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

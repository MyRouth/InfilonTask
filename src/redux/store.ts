import { createStore, applyMiddleware } from 'redux';
import userReducer from './reducers';
import middleware from './middleWare';

const store = createStore(userReducer, applyMiddleware(middleware));

export default store;

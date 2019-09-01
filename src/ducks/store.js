import {createStore, applyMiddleware} from '../redux';

import reducer from './reducer';

import logger from '../redux/logger';
import trunk from '../redux/redux-thunk';

const store = createStore(reducer, applyMiddleware(trunk, logger));

console.log(store);

export default store;
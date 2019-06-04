import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/root';
import logMiddleware from './middleware/log';
import { apiMiddleware } from './middleware/api';
import measureMiddleware from './middleware/measure';
import searchMiddleware from './middleware/asyncaction';
import initStatus from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    logMiddleware,
    apiMiddleware,
    thunk,
    measureMiddleware,
    searchMiddleware,
    sagaMiddleware,
  ),
);

window.store = store;

sagaMiddleware.run(initStatus);

export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';
import logMiddleware from './middleware/log';
import { apiMiddleware } from './middleware/api';
import measureMiddleware from './middleware/measure';
import searchMiddleware from './middleware/asyncaction';

const store = createStore(
  rootReducer,
  applyMiddleware(logMiddleware, apiMiddleware, thunk, measureMiddleware, searchMiddleware),
);

window.store = store;

export default store;

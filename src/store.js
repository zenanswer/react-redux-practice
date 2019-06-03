import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root';
import logMiddleware from './middleware/log';
import { apiMiddleware } from './middleware/api';
import measureMiddleware from './middleware/measure';

const store = createStore(
  rootReducer,
  applyMiddleware(logMiddleware, apiMiddleware, thunk, measureMiddleware),
);

window.store = store;

export default store;

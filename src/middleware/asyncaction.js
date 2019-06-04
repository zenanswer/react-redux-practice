import { searchResult } from '../actions/asyncaction';

const timers = {};

const searchMiddleware = ({ dispatch }) => next => (action) => {
  next(action);

  console.log(action);
  const { timeout } = action.meta || {};
  if (timeout) {
    clearTimeout(timers[action.type]);
    console.log('try search');
    timers[action.type] = setTimeout(() => {
      dispatch(searchResult('Here is the result.'));
    }, timeout);
  }
};

export default searchMiddleware;

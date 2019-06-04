import { handleActions } from 'redux-actions';
import produce from 'immer';

import { searchInput, searchResult } from '../actions/asyncaction';

const genLog = (action) => {
  const timestamp = new Date().toJSON();
  return (`${timestamp} ${action.type} ${action.payload}`);
};

const handleSearch = produce(
  (draft, action) => {
    draft.push(genLog(action));
  },
);

const searchReducer = handleActions(
  new Map([
    [
      searchInput,
      handleSearch,
    ],
    [
      searchResult,
      handleSearch,
    ],
  ]),
  [], // default state
);

export default searchReducer;

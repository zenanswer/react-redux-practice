import { createActions } from 'redux-actions';

const { searchInput, searchResult } = createActions({
  SEARCH_INPUT: [
    text => text, // payload
    () => ({ timeout: 500 }), // meta
  ],
  SEARCH_RESULT: result => result,
});

export { searchInput, searchResult };

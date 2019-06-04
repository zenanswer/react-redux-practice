import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { fetchRecipes } from './actions/recipes';
// import { initRecipes } from './middleware/api';
import Recipes from './recipe/recipes';

// Using middleware and redux-thunk to init the data.
// store.dispatch(initRecipes());

function ReduxDemo() {
  // Using redux-sage to init the data.
  store.dispatch(fetchRecipes());
  return (
    <div>
      <Provider store={store}>
        <Recipes />
      </Provider>
    </div>
  );
}

export default ReduxDemo;

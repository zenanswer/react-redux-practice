import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { fetchRecipes } from './actions/recipes';
import Recipes from './recipe/recipes';

store.dispatch(fetchRecipes());

function ReduxDemo() {
  return (
    <div>
      <Provider store={store}>
        <Recipes />
      </Provider>
    </div>
  );
}

export default ReduxDemo;

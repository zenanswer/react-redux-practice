import { handleActions } from 'redux-actions';

import { addRecipe, setRecipes } from '../actions/recipes';

const handleAddRecipe = (state, action) => (state.concat({ name: action.payload }));

const handleSetRecipes = (_, action) => (action.payload);

const recipesReducer = handleActions(
  new Map([
    [
      addRecipe,
      handleAddRecipe,
    ],
    [
      setRecipes,
      handleSetRecipes,
    ],
  ]),
  [], // default state
);

export default recipesReducer;

import { handleActions } from 'redux-actions';
import produce from 'immer';

import { addRecipe, setRecipes } from '../actions/recipes';

const handleAddRecipe = produce(
  (draft, action) => {
    const x = draft.filter(recipe => recipe.name === action.payload);
    if (x.length === 0) {
      draft.push({ name: action.payload });
    }
    // TODO need some alert here.
  },
);

const handleSetRecipes = produce(
  (_, action) => (action.payload),
);

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

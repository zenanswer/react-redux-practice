import { createActions } from 'redux-actions';

const { addRecipe, fetchRecipes, setRecipes } = createActions({
  ADD_RECIPE: name => name,
  FETCH_RECIPES: undefined,
  SET_RECIPES: recipes => recipes,
});

export { addRecipe, fetchRecipes, setRecipes };

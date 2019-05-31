import { createAction } from 'redux-actions';

import { ADD_RECIPE, FETCH_RECIPES, SET_RECIPES } from '../constants/actionTypes';

// Using createAction for create the FSA action.

// export const addRecipe = name => ({
//   type: ADD_RECIPE, name,
// });
export const addRecipe = createAction(ADD_RECIPE, name => name);

// export const fetchRecipes = () => ({
//   type: FETCH_RECIPES,
// });
export const fetchRecipes = createAction(FETCH_RECIPES);

// export const setRecipes = recipes => ({
//   type: SET_RECIPES, recipes,
// });
export const setRecipes = createAction(SET_RECIPES, recipes => recipes);

// We can use createActions for creating multi FSA Action Creating Func,
// but we cannot get the action.type from those func in the reducer func.

// const { addRecipe, fetchRecipes, setRecipes } = createActions({
//   ADD_RECIPE: name => name,
//   FETCH_RECIPES: undefined,
//   SET_RECIPES: recipes => recipes,
// });

// export { addRecipe, fetchRecipes, setRecipes };

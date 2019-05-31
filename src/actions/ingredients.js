import { createAction } from 'redux-actions';

import { ADD_INGREDIENT, SET_INGREDIENTS } from '../constants/actionTypes';

// export const addIngredient = (recipe, name, quantity) => ({
//   type: ADD_INGREDIENT, recipe, name, quantity,
// });
export const addIngredient = createAction(
  ADD_INGREDIENT,
  (recipe, name, quantity) => ({ recipe, name, quantity }),
);

// export const setIngredients = ingredients => ({
//   type: SET_INGREDIENTS, ingredients,
// });
export const setIngredients = createAction(SET_INGREDIENTS, ingredients => ingredients);

// const { addIngredient, setIngredients } = createActions({
//   ADD_INGREDIENT: ({ recipe, name, quantity }) => ({ recipe, name, quantity }),
//   SET_INGREDIENTS: ingredients => (ingredients),
// });

// export { addIngredient, setIngredients };

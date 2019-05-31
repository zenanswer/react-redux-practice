import { createActions } from 'redux-actions';

const { addIngredient, setIngredients } = createActions({
  ADD_INGREDIENT: ({ recipe, name, quantity }) => ({ recipe, name, quantity }),
  SET_INGREDIENTS: ingredients => (ingredients),
});

export { addIngredient, setIngredients };

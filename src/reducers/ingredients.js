import { handleActions } from 'redux-actions';

import { addIngredient, setIngredients } from '../actions/ingredients';

const ingredientsReducer = handleActions(
  new Map([
    [
      addIngredient,
      (state, action) => {
        const newIngredient = {
          name: action.name,
          recipe: action.recipe,
          quantity: action.quantity,
        };
        return state.concat(newIngredient);
      },
    ],
    [
      setIngredients,
      (_, action) => (action.payload),
    ],
  ]),
  [], // default state
);

export default ingredientsReducer;

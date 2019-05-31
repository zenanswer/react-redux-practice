import { ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes';

const recipesReducer = (recipes = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat({ name: action.payload });

    case SET_RECIPES:
      return action.payload;

    default:
      return recipes;
  }
};

export default recipesReducer;

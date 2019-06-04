import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';
import searchReducer from './asyncaction';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  showText: searchReducer,
});

export default rootReducer;

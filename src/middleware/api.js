import { handleActions } from 'redux-actions';

import { setRecipes, fetchRecipes } from '../actions/recipes';
import { setIngredients } from '../actions/ingredients';

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

function fetchData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(callback)
    .catch(err => console.log(`Error fetching recipes: ${err}`));
}

const handleFetchRecipes = dispatch => (
  handleActions(
    new Map([
      [
        fetchRecipes,
        () => {
          fetchData(URL, (data) => {
            dispatch(setRecipes(data.recipes));
            dispatch(setIngredients(data.ingredients));
          });
          return true;
        },
      ],
    ]),
    false,
  )
);

const apiMiddleware = ({ dispatch }) => next => (action) => {
  handleFetchRecipes(dispatch)(null, action);
  next(action);
};


export default apiMiddleware;

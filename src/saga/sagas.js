import {
  call, put, takeEvery, takeLatest,
} from 'redux-saga/effects';

import { fetchRecipes, setRecipes } from '../actions/recipes';
import { setIngredients } from '../actions/ingredients';

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

function* fetchRecipeData(action) {
  try {
    console.log(`SAGA fetchRecipeData ${action.type}`);
    const data = yield call(
      url => fetch(url).then(response => response.json()),
      URL,
    );
    console.log(`SAGA fetchRecipeData data: ${data}`);
    yield put(setRecipes(data.recipes));
    yield put(setIngredients(data.ingredients));
  } catch (e) {
    console.log(`SAGA fetchRecipeData exp: ${e}`);
  }
}

function* logRecipes(action) {
  yield console.log(`SAGA logRecipes: ${action.type}`);
}

function* logRecipes2(action) {
  yield console.log(`SAGA logRecipes2: ${action.type}`);
}

function* initStatus() {
  yield takeEvery(fetchRecipes().type, fetchRecipeData);
  yield takeEvery(fetchRecipes().type, fetchRecipeData);
  yield takeLatest(setRecipes().type, logRecipes);
  yield takeLatest(setRecipes().type, logRecipes2);
}


export default initStatus;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addRecipe } from '../actions/recipes';

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddRecipe: (recipeName) => {
      dispatch(addRecipe(recipeName));
    },
  };
}

const RecipeList = (props) => {
  console.log(props);
  const { recipes = [], onAddRecipe = null } = props;

  const recipesList = recipes.map(
    recipe => (
      <li key={recipe.name}>
        {recipe.name}
      </li>
    ),
  );

  const InputRecipe = () => {
    console.log('inputRecipe');
    console.log(onAddRecipe);
    let textInput = null;
    if (onAddRecipe) {
      return (
        <div>
          <input type="text" ref={(input) => { textInput = input; }} />
          <button
            type="button"
            onClick={() => {
              console.log(textInput.value);
              onAddRecipe(textInput.value);
            }}
          >
          ADD
          </button>
        </div>
      );
    }
    console.log('no input');
    return (<div />);
  };

  return (
    <div>
      <ul>
        {recipesList}
      </ul>
      <InputRecipe />
    </div>
  );
};

RecipeList.protoTypes = {
  recipes: PropTypes.array,
  fetchRecipes: PropTypes.func,
};

const RecipeListConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeList);

const Recipes = () => (
  <div>
    <h2>Recipes:</h2>
    <RecipeListConnected />
  </div>
);

export default Recipes;

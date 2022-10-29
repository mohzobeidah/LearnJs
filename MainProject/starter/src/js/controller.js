//import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as model from './model.js';
import recipeview from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultss from './views/SResult.js';
import PaginatedView from './views/PaginatedView.js';
import BookmarkView from './views/BookmarkView.js';
import AddRecipeView from './views/AddRecipeView.js';

//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipes = async function () {
  try {
    let id = window.location.hash;

    if (!id) id = '#5ed6604591c37cdc054bcd09';
    id = id.slice(1);
    await model.loadRecipe(id);
    resultss.update(model.getSearchResultPaged());
    recipeview.render(model.state.recipe);
  } catch (error) {
    console.log(error);
    recipeview.renderError(error.message);
  }
};

const controlsearchResults = async function () {
  try {
    const query = searchView.getQuer();
    //console.log(query);
    await model.loadSearchResult(query);
    const res = model.getSearchResultPaged();

    if (!res || (Array.isArray(res) && res.length == 0))
      throw new Error('no data is exists ');
    resultss.render(res);
    PaginatedView.render(model.state.search);
  } catch (error) {
    resultss.renderError(error);
  }
};
//showRecipes();
const controlServing = function (newServing) {
  model.updateservings(newServing);
  recipeview.update(model.state.recipe);
};
const controlPaginated = goto => {
  const res = model.getSearchResultPaged(goto);
  if (!res || (Array.isArray(res) && res.length == 0))
    throw new Error('no data is exists ');
  resultss.render(res);

  PaginatedView.render(model.state.search);
};
const controlAddMarkbook = function () {
  if (model.state.bookmarks.some(x => x.id === model.state.recipe.id)){
    model.deleteBookmark(model.state.recipe.id);
  }
  else
  model.addBookmark(model.state.recipe);
  recipeview.update(model.state.recipe);
  BookmarkView.render(model.state.bookmarks)
  
};
const controlAddRecipe= function(newRecipe ){
  console.log(newRecipe);
  model.uploadRecipe(newRecipe);
}
const init = function () {
  recipeview.addHandleRender(showRecipes);
  searchView.addHandleSearch(controlsearchResults);
  PaginatedView.addHandleRender(controlPaginated);
  recipeview.addHandleUpdateServings(controlServing);
  recipeview.addHandleBookmark(controlAddMarkbook);
  AddRecipeView.addHandleUpload(controlAddRecipe);
  model.init();
  console.log(model.state.bookmarks);
  BookmarkView.render(model.state.bookmarks)
};

init();


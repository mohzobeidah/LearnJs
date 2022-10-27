import * as model from './model.js';
import recipeview from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultss from './views/SResult.js';
import PaginatedView from './views/PaginatedView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
//const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipes = async function () {
  try {
    let id = window.location.hash;
    if (!id) return;
    id = id.slice(1);
    await model.loadRecipe(id);
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
    const res =model.getSearchResultPaged();
    console.log(res);
    if (!res || (Array.isArray(res) && res.length == 0)) throw new Error("no data is exists ")
     resultss.render(res);
     PaginatedView.render( model.state.search)
  } catch (error) {
    resultss.renderError(error);
  }
};
//showRecipes();

const  controlPaginated  =(goto)=>{
  const res =model.getSearchResultPaged(goto);
  if (!res || (Array.isArray(res) && res.length == 0)) throw new Error("no data is exists ")
  resultss.render(res);
  console.log(res)
  PaginatedView.render( model.state.search)
}
const init = function () {
  recipeview.addHandleRender(showRecipes);
  searchView.addHandleSearch(controlsearchResults);
  PaginatedView.addHandleRender(controlPaginated);
};
init();

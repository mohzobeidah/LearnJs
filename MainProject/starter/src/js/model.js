import { async } from 'regenerator-runtime';
import * as helper from './helper.js';
import * as config from './config.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    searchPerPage: config.searchPerPage,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await helper.getJson(`${config.API_URL}/${id}`);
    // console.log(data);
    let { recipe } = data.data;

    recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      title: recipe.title,
      image: recipe.image_url,
      description: recipe.description,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
    };
    state.recipe = recipe;
    console.log(recipe);
  } catch (error) {
    throw error;
  }
};

export const loadSearchResult = async function (query) {
  try {
    const data = await helper.getJson(`${config.API_URL}?search=${query}`);
    // console.log(data);

    state.search.result = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        publisher: rec.publisher,
        title: rec.title,
        image: rec.image_url,
      };
    });
    console.log(state.search.result);
  } catch (error) {
    throw error;
  }
};

export const getSearchResultPaged = function (page = this.state.search.page) {
  this.state.search.page = page;
  console.log(page);
  console.log(this.state.search.searchPerPage);
  const start = (page - 1) * this.state.search.searchPerPage;
  const end = page * this.state.search.searchPerPage;
  return this.state.search.result.slice(start, end);
};

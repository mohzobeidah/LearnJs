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
  bookmarks: [],
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
    recipe.bookmark = state.bookmarks.some(x => x.id === recipe.id);
    console.log(recipe);
    state.recipe = recipe;
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

    state.search.page = 1;
  } catch (error) {
    throw error;
  }
};

export const getSearchResultPaged = function (page = this.state.search.page) {
  this.state.search.page = page;

  const start = (page - 1) * this.state.search.searchPerPage;
  const end = page * this.state.search.searchPerPage;
  return this.state.search.result.slice(start, end);
};

export function updateservings(newServings) {
  const x = state.recipe.ingredients;
  x.forEach(element => {
    element.quantity = (element.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
}

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);

  if (recipe.id == state.recipe.id) state.recipe.bookmark = true;
  persistBookmark();
};
export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(x => x.id === id);
  console.log(index);
  state.bookmarks.splice(index, 1);
  state.recipe.bookmark = false;
  persistBookmark();
};

const persistBookmark =  function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const init = function () {
  const bookmarksAsString = localStorage.getItem('bookmarks');
  const bookmarAsObject = JSON.parse(bookmarksAsString);
  state.bookmarks = bookmarAsObject;
  console.log(state.bookmarks);
};

export const uploadRecipe =async  function (newRecipe) {
 try {
  console.log(newRecipe)
  const ingr = Object.entries(newRecipe)

  .filter(ing=>ing[0].startsWith('ingredient') && ing[1]!=='')
  .map(ing1=> {
   
     let inge=ing1[1].replaceAll(' ','').split(',')
     if(inge.length!==3)return;
     const [quantity,unit,description] =inge;
    console.log(inge);

     return {description  :description, unit:unit,quantity:quantity?+quantity:null}
  })

  const recipe = {
    id: newRecipe.id,
   publisher: newRecipe.publisher,
   title: newRecipe.title,
   image_url: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
    description: newRecipe.description,
    source_url: "newRecipe.sourceUrl",
    ingredients: ingr,
    servings: +newRecipe.servings,
    cooking_time: 15,
  };
   console.log(recipe);
 const res = await helper.AJAX( `${config.API_URL}?key=${config.key}`,recipe) ;
 console.log (res)
 if(res.ok)
 state.recipe=recipe;

 } catch (error) {
  console.log(error)
 }
 
 
};
 
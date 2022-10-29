import view from './View.js';

class AddRecipeView extends view {
  _parentElemnt = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');

  constructor() {
    super();
    this._addHandleShowWindow();
    this._addHandleHideWindow();
  }

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }
  _addHandleShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandleHideWindow() {
    this._btnClose .addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandleUpload(handler) {
    console.log(this._parentElemnt);
    this._parentElemnt.addEventListener('submit', function(e){
        e.preventDefault();
        let data = new FormData(this); 
        data =[...data]
        console.log(data);
        //handler(Object.entries(data) );
        handler(Object.fromEntries(data) );

    });
  }
}

export default new AddRecipeView();

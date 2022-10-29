
import view from './View.js';
import icons from 'url:../../img/icons.svg';
class BookmarkView extends view  {
_parentElement = document.querySelector('.bookmarks');


  
  _generetemarkup() {
   
    let id = window.location.hash;

    if (!id) id='';
    id = id.slice(1);
    
    let x= this._data;
   return x.map(result=>{
        return `
        <li class="preview">
          <a class="preview__link ${id==result.id?'preview__link--active':''}" href="#${result.id}">
            <figure class="preview__fig">
              <img src="${result.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${result.title}</h4>
              <p class="preview__publisher">${result.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      `;
      
    }).join(' ')
   
  }
}

export default  new BookmarkView();
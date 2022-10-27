import view from './View.js';
import icons from 'url:../../img/icons.svg';
class SResult extends view {
  _parentElement = document.querySelector('.results');


  
  _generetemarkup() {
   
    const y= this._data
      .map(x => {
        return `

        <li class="preview">
          <a class="preview__link preview__link--active" href="#${x.id}">
            <figure class="preview__fig">
              <img src="${x.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${x.title}</h4>
              <p class="preview__publisher">${x.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      `;
      })
      .join(' ');
    
      return y;
  }
}

export default new SResult();

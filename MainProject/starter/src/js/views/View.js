import icons from 'url:../../img/icons.svg';
export default class View{
    _data;
    _parentElement ;
    _message ="sorry erorrrrrrrrrrrrrr"
    _errorMessage ="sorry erorrrrrrrrrrrrrr"
    
    renderError(message =this._errorMessage) {
        
        const markup = `<div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
      renderMessage(message =this._message) {
        const markup = `<div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-alert-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
      renderSpinner() {
        const markup = `
        <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
      render(data) {
        this._data = data;
        
        this.renderSpinner();
        const markup = this._generetemarkup();
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML( "afterbegin", markup);
      }
      update(data) {
        this._data = data;
  
        //this.renderSpinner();
        const newMarkup = this._generetemarkup();
        const newVirtualDOM = [
          ...document
            .createRange()
            .createContextualFragment(newMarkup)
            .querySelectorAll('*'),
        ];
        const curDOM = [...this._parentElement.querySelectorAll('*')];
        newVirtualDOM.forEach((newElm, i) => {
          let curElm = curDOM[i];
        
          let x = curElm?.isEqualNode(newElm);
          //change text only
          if (!x && curElm?.firstChild?.nodeValue.trim() !== '') {
            curElm.textContent = newElm.textContent;
          }
          // change attribute
          if (!x) {
            [...newElm.attributes].forEach(att => {
              curElm.setAttribute(att.name, att.value);
            });
          }
        });
     
        // this._parentElement.innerHTML = '';
        // this._parentElement.insertAdjacentHTML('afterbegin', markup);
      }
}
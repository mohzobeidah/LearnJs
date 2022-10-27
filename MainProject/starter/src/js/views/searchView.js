import view from './View.js';

class SearchView  extends view{
  _parentElemnt = document.querySelector('.search');
 
  getQuer() {
    console.log(this._parentElemnt.querySelector('.search__field').value)
    const res= this._parentElemnt.querySelector('.search__field').value
    this._clearInput()
    return res;
  }
  _clearInput(){
     this._parentElemnt.querySelector('.search__field').value='';
  }

  addHandleSearch(handler) {
    this._parentElemnt
      .addEventListener('submit', function (e) {
        e.preventDefault();
       console.log(handler);
        handler();
      });
  }
}

export default new SearchView();

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
//old way

const renderData = function (data) {
  const html = `<article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${
        Object.keys(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.keys(data.currencies)[0]
      }</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
};

///////////////old school by using XMLHttpRequest ////////////////////////
const getVCountryData = function (name) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
  //asyncrhronous dealing
  request.send();

  request.addEventListener('load', () => {
    let [data] = JSON.parse(request.responseText);
    renderData(data);
    //console.log(this);
  });
};

getVCountryData('usa');
getVCountryData('peru');
getVCountryData('germany');
getVCountryData('palestine');
*/
const renderData = function (data) {
    const html = `<article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${
          Object.keys(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.keys(data.currencies)[0]
        }</p>
      </div>
      </article>`;
    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
  };
//   const getVCountryData = function (name) {
//     const request =fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then((response,err)=>{
//         //console.log(response.json());
//        return response.json()
    
//     }).then((data,err)=>{
//         console.log([data][0]);
//         renderData(data[0])
    
//     });
//   };
// handle error no 1
// const getVCountryData = function (name) {
//     const request =fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then((response)=>response.json(), err=> alert(arr)).then((data)=> {
        
//         const [tt]=data
//         renderData( tt)
//     }, err=> alert(err));
//   };

const getVCountryData = function (name) {
    const request =fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response)=>{
        if(!response.ok)
        throw new Error("error")
    return    response.json()
    }).then((data)=> {
        
        const [tt]=data
        renderData( tt)
    }).catch( err=> alert(err))
    .finally(()=>alert("always run"));
  };
  getVCountryData('usa');
getVCountryData('peru');
getVCountryData('germany');

// make it generic 
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
  const request = fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      if (!response.ok) throw new Error('error');
      return response.json();
    })
    .then(data => {
      const [tt] = data;
      renderData(tt);
    })
    .catch(err => alert(err));
  // .finally(()=>alert("always run"));
};
getVCountryData('usa');
getVCountryData('peru');
getVCountryData('germany');

// make it generic
//
// multiple fetches and returns
const whereAmI = function (lat, lng) {
  const request = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      if (!response.ok) throw new Error('error');
      return response.json();
    })
    .then(data => {
      console.log(data);
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => alert(err));
  // .finally(()=>alert("always run"));
};

//whereAmI(31.2500587,34.2500587)

// build promise

const lottaryPromise = new Promise(function (resolved, reject) {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolved('Win');
    } else {
      reject('Loss');
    }
  }, 2000);
});

lottaryPromise.then(data => console.log(data)).catch(err => console.log(err));

navigator.geolocation.getCurrentPosition(
  data => console.log(data),
  err => console.log(err)
);
//pomosifying
const getCurrentPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      data => resolve(data),
      err => reject(err)
    );
  });
};
getCurrentPosition().then(data => console.log(data)), err => console.log(err);

//change

const cont = document.querySelector('.images');
const wait = function (time) {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, time);
  });
};

const creatImg = function (pathImg) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = pathImg;
    img.addEventListener('load', () => {
      cont.append(img);
      resolve(img);
    });
    img.addEventListener('error', err => {
      reject(new Error('error'));
    });
  });
};

let img2;
creatImg('img/img-1.jpg')
  .then(img => {
    console.log(img);
    img2 = img;
    return wait(10000);
  })
  .then(() => {
    
    console.log(img2);
    img2.style.display = 'none';
    return creatImg('img/img-2.jpg');
  })
  .then(img => {
    console.log(img);
    img2 = img;
    return wait(10000);
  })
  .then(() => {
    img2.style.display = 'none';
    return creatImg('img/img-3.jpg');
  })
  
  .catch(err => console.log(err));


  const whereAmI2 = async function (name) {
    try {
      const result = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      if(!result.ok) throw new Error("error")
    const  [s]=await result.json()
    renderData(s)
    } catch (error) {
      console.log(error);
    }
    
  }

  whereAmI2("palestine")



// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await creatImg('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 1
    img = await creatImg('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await creatImg(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//////////////////////

// console.log(document.body)
// console.log(document.head)
// // selecting 
// console.log(document.querySelector('.btn'))
// console.log(document.getElementById('btn'))
// console.log(document.getElementsByTagName('button'))
// console.log(document.getElementsByClassName('.btn'))


// /////////// 
// //inserting 
// const ss=document.getElementById('rrr')
// const pElm  = document.createElement('p')
// pElm.classList.add('test')
// //pElm.textContent("sssssssss")
// pElm.innerHTML="sssssssss <span> test  </span>"
// ss.insertAdjacentElement("afterbegin",pElm);

const header  = document.querySelector('.header')
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML= 'We use cookie to improve the functionlity and analytics <button class="btn btn--close--cookie"> got it </button>'


// these are children
//header.prepend(message); // first child
header.append(message)// append last child
//header.append(message.cloneNode(true))


// these are siblings 
//header.before(message);
//header.after(message);

document.querySelector('.btn--close--cookie').addEventListener('click', ()=>{
message.remove(); 
});

//style 
// these style are exists inline style 
message.style.backgroundColor= '#37383d';
message.style.width='120%'

// how to get style in css sheet 
const  computedStyle = getComputedStyle(message);
console.log(computedStyle)
console.log(computedStyle.color)
message.style.height= Number.parseFloat(computedStyle.height,10) +40+'px';

// change all css style by lcass name 

document.documentElement.style.setProperty('--color-primary','orangered')
const logo =document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
logo.alt = "this is new ";;
logo.setAttribute("comapny","banklist")
// data 
console.log(logo.dataset.numberVersion);

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

///////
///handling the scolling 

const btnScollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


btnScollTo.addEventListener('click', (e)=>{
 const s1coord= section1.getBoundingClientRect();


 console.log(s1coord)
//  console.log(e.target.getBoundingClientRect())
 console.log('winow page ',window.pageXOffset, window.pageYOffset)
 // view port of  windows for user 
// console.log(document.documentElement.clientHeight ,document.documentElement.clientWidth )
console.log(s1coord.left +window.pageXOffset,s1coord.top  +window.pageYOffset)
// way 1
//window.scrollTo(s1coord.left +window.pageXOffset,s1coord.top  +window.pageYOffset)
// way 2
// window.scrollTo({
// left:s1coord.left +window.pageXOffset,
// top:s1coord.top  +window.pageYOffset,
// behavior:"smooth"
// })
// way 3
section1.scrollIntoView({behavior:"smooth"})
});
//////////////////////////
//event  in DOMs

const h1  = document.querySelector("h1");
const fun =function(){
  alert("test");
  h1.removeEventListener("mouseover", fun);
}
h1.addEventListener("mouseover", fun)

// h1.onmouseover=function(){
//   alert("test");
// };

// event delegation is better way instead of link millions of events handler to millions of elements
// by using the event prpogations feature from elemnt to parant  
// this depend on currenttarget and target
document.querySelector('.nav__links').addEventListener('click', (e)=>{
console.log(e.target);
e.preventDefault();
let id = e.target.getAttribute("href");
console.log(id)
let el =document.querySelector(id)
if(el!== null && e.target.classList.contains('nav__link'))
el.scrollIntoView({behavior:"smooth"});
});



console.log(h1.querySelectorAll('.highligt'))
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);
console.log(h1.parentElement);
console.log(h1.closest('.header'));
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);


const tabContainer = document.querySelector('.operations__tab-container');
const tabs= document.querySelectorAll('.operations__tab');
const tabscontents= document.querySelectorAll('.operations__content');

tabContainer.addEventListener("click", e=>
{

 // console .log(e.target)
  let btnN =e.target.closest(".operations__tab")
  //console .log(btnN)
  if(!btnN)
  return;


    let dataNumber = btnN.dataset.tab;
  tabs.forEach(x=>x.classList.remove("operations__tab--active"))
  tabscontents.forEach(x=>x.classList.remove("operations__content--active"))
  document.querySelector(`.operations__content--${dataNumber}`).classList.add('operations__content--active')

})

const nav = document.querySelector('.nav')

// event bubblle up feature

const handleFadeOut = function(e ){

 console.log(e, this)
  if(e.target.classList.contains('nav__link'))
  {
    let target = e.target;
    let sibling = target.closest('.nav').querySelectorAll('.nav__link');
    let logo = target.closest('.nav').querySelector('.nav__logo');
    sibling.forEach(element => {
     if(element!==target)  element.style.opacity=this
    });
    logo.style.opacity=this
  }

}
nav.addEventListener('mouseover',handleFadeOut.bind(0.5));

nav.addEventListener('mouseout',handleFadeOut.bind(1));

// const coor=section1.getBoundingClientRect() ;
// window.addEventListener("scroll",()=>{
//   console.log(window.scrollY);
//   console.log(coor.top);
//   if(window.scrollY >coor.top)
//   {
//     nav.classList.add('sticky')
//   }else
//   {  nav.classList.remove('sticky')}
    
// })

// better way for scolling

const obserCallback = (entries , observer)=>{
  entries.forEach(element => {
    
    console.log(element);  
  });
}
const obsoption={
  root:null,
  threshold:[0,0.2]
}
const obsever = new IntersectionObserver(obserCallback,obsoption  );
obsever.observe(section1)


// side note Destucturing array 
const arr= [1,2,3]
const [x,y,z]=arr;
console.log(x,y,z);
let [a,,b]=arr;
console.log(a,b);
// swip the two value 
[b,a]=[a,b];
console.log(a,b);
// side note Destucturing object 
const obj = {
  name: "test",
  age:12,
  sex:"male"
} 

const {name , age, sex}= obj;
console.log(name, sex, age);
const {name : n , age: aa , sex:s , d="default value"}= obj;
console.log(n,aa,s,d);

//////////// stichy header 
const navheight =  nav.getBoundingClientRect().height;

const obseverHeader = new IntersectionObserver(
  (entries , observer)=>{
const [entry]= entries;

  if(!entry.isIntersecting)
  {
    nav.classList.add('sticky')
  }else
  {  nav.classList.remove('sticky')}

},{
root:null,
threshold:0,
rootMargin:`${navheight}px`
});

obseverHeader.observe(header)


/// reveal sections

const allSections = document.querySelectorAll('.section');
allSections.forEach(elem=>elem.classList.add('section--hidden'));

const obseverSections = new IntersectionObserver(
  (entries , observer)=>{
    const [entry]= entries;

    console.log(entry.target);
if(!entry.isIntersecting)return;
entry.target.classList.remove('section--hidden')
observer.unobserve(entry.target);
},{
root:null,
threshold:0,
//rootMargin:`${navheight}px`
});


allSections.forEach(elem=>obseverSections.observe(elem));



/// lazy loading images 


const allimages = document.querySelectorAll('img[data-src]');
//allSections.forEach(elem=>elem.classList.add('section--hidden'));

const obseverImg = new IntersectionObserver(
  (entries , observer)=>{
    const [entry]= entries;

    console.log(entry.target);
if(!entry.isIntersecting)return;
entry.target.src=entry.target.dataset.src
entry.target.addEventListener("load",()=>{
  entry.target.classList.remove('lazy-img');
})
observer.unobserve(entry.target);

},{
root:null,
threshold:0,
//rootMargin:`${navheight}px`
});


allimages.forEach(elem=>obseverImg.observe(elem));


/// life cycle of DOM

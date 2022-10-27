/*
// importing module 
//import {addToCart ,totalPrice as total ,  qa} from './shoppingCart.js'
//evey thing  as object 
import * as shoppingCart   from './shoppingCart.js'
// for deault namea
//import add  as shoppingCart   from './shoppingCart.js'
console.log("importing module");
shoppingCart.addToCart("apple",20);
// console.log(qa);
// console.log(total);
console.log(shoppingCart.totalPrice);

// top level await work out of async but must be module 
// this is block the execution of entire file 
console.log("begin");
const result = await  fetch('https://jsonplaceholder.typicode.com/todos');
const data = await result.json();
console.log(data);
console.log("fionish");


const getLadtObj = async function(){
    console.log("begin");
    const result = await  fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await result.json();
    console.log(data);
    console.log(data.at(-1).title);

    console.log("fionish");
      return data.at(-1).title
}
const test = getLadtObj();  //without wait it always return prmoise
console.log(await test)
test.then(e=>console.log(e))
*/

//impemntation of module pattern it is importnat to understand
// const shoppingCart2 = (function () {
//   const shippingCart = 10;
//   const cart = [];
//   const addToCart = function (product, quentity) {
//     cart.push({ product, quentity });
//     console.log(cart);
//   };

//   const totalPrice = 55;
//   const Quentity = 55;

//   return {
//     addToCart,
//     totalPrice,
//     Quentity,
//   };
// })();
// shoppingCart2.addToCart('ball', 50);


//import  cloneDeep  from "./node_modules/lodash-es/cloneDeep.js";//without pacel labitry
import  cloneDeep  from "lodash-es";//with  pacel labitry


const state = {
  cart:
  [{
    product:"bread", quentity:5
  },{
    product:"apple", quentity:3
  }],
  user:{
    login:false
  }
}

const state2 = Object.assign({}, state)
console.log(state2)
const state3 =cloneDeep(state)
state.user.login= true;
console.log(state2)
console.log(state3)


if(module.hot)
{
  module.hot.accept();
}

// parcel you can ommit the path of file because the parcel can know it 


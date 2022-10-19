// exprting module
console.log('exprting module');
const shippingCart = 10;
const cart = [];

export const addToCart = function (product, quentity) {
  cart.push({ product, quentity });
  console.log(cart);
};

const totalPrice = 55;
const Quentity = 55;

export { totalPrice, Quentity  as qa};

//when we want export one thing in module 


export default  function (product, quentity) {
    cart.push({ product, quentity });
    console.log(cart);
  };
  
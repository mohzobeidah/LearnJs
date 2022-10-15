"use strict"
//1- abstrction  hide none relvant data from users
//2- Ecapsulation  keep method or Preporties  private if affect on object // not allow public state to play in internal state

//3-inhertince  // child get all parent's propeties and methods 
//4- ploymorephism child class can override method that can inhert from parent class

//in js 
//prototype  is like parent class of object whic contain all methods and propties that object can get 
// prototypal inhertance is different  betcuase here instance inhert from class but 
// in normal inhertance the class inhert from another class 
// in js  object delegate behivour of prototypal object 
//
/////////////////////////OOP in Js ////////////////////////////////////
// in js  constructor function 
// in js Classes in ES6 are sytex suger for main 
// in js  Object.create()  not famous

const Person = function(firstName, birthday)
{
this.firstName=firstName;
this.birthday=birthday;
// do not write function in main constructor 
}


const mohammed  = new Person("Mohammed",1984);
// new {} is created 
// funciton is called and this ={}
//{} is linked to prototype 
// the function automically return {}

console.log(mohammed);
// this to test if object return to prototype 
console.log(mohammed instanceof Person);

// prototype 
Person.prototype.calAge=function()
{
   return 2022- this.birthday;
}

console.log(Person);
console.log(  mohammed.calAge());
console.log( Person.prototype.isPrototypeOf(mohammed));
console.log(  mohammed.__proto__ ===Person.prototype);
Person.prototype.specices ="test"
console.log(  mohammed);
console.log(  mohammed.specices);
console.log(  mohammed.hasOwnProperty("specices"));
console.log(  mohammed.hasOwnProperty("firstName"));
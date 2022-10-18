"use strict";
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

const Person = function (firstName, birthday) {
  this.firstName = firstName;
  this.birthday = birthday;
  // do not write function in main constructor
};

const mohammed = new Person("Mohammed", 1984);
// new {} is created
// funciton is called and this ={}
//{} is linked to prototype
// the function automically return {}

console.log(mohammed);
// this to test if object return to prototype
console.log(mohammed instanceof Person);

// prototype
Person.prototype.calAge = function () {
  return 2022 - this.birthday;
};

// static function conecpt for constuctor function  like this 
Person.makestatic=()=>60;

console.log(Person);
console.log(mohammed.calAge());
console.log(Person.prototype.isPrototypeOf(mohammed));
console.log(mohammed.__proto__ === Person.prototype);
Person.prototype.specices = "test";
console.log(mohammed);
console.log(mohammed.specices);
console.log(mohammed.hasOwnProperty("specices"));
console.log(mohammed.hasOwnProperty("firstName"));

console.log(mohammed.__proto__);
console.log(mohammed.__proto__.__proto__);
console.log(mohammed.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
const e = [1, 2, 3, 4, 2];
console.dir(e.__proto__);
console.dir(Array.prototype.constructor);
Array.prototype.unqiue = function () {
  return [...new Set(this)];
};

console.log(e.unqiue());

/////////////////////////////// ES6 classes in js

class PersonCl {
  constructor(firstName, birthday) {
    this.firstName = firstName;
    this.birthday = birthday;

    // do not write function in main constructor
  }
  calAge() {
    return 2022 - this.birthday;
  }

  //settter
  set age(val) {
    this._age=val ;
  }

  //getter 
  get age(){
    return this._age;
  }

  //static function for main class only not for object 
  static makestatic()
  {
  return "this is only for class not for object "
  }
}

const moh2 = new PersonCl("moh", 1996);
moh2.age=90
console.log(moh2);
console.log(moh2.age);
console.log(PersonCl.makestatic());
// class are not hoisted
// class are first classs citizn
//  class are executed in strict mode
//////////////////////////////////////////////////////////

//how to use  object.create()
const PersonProto = {
  calAge() {
    return 2022 - this.birthday;
  },

  //beter way to work with this 
  init(name,birthday){
    this.name=name;
    this.birthday=birthday;
  }
}
// here create obj 
const steven = Object.create(PersonProto);
steven.init("stenen",1988)

console.log(steven.calAge());
console.log(steven.__proto__===PersonProto);

///////////////////////////////////////////
// inhertance in js  by constructor function
////////////////////

const Student  = function (firstName, birthday,course) {
  Person.call(this,firstName,birthday);
  this.course=course;
};
//here in this point we give the student all method of person 
// this is the way of that
//tthis is called prototype chaim 
Student.prototype=Object.create(Person.prototype);
Student.prototype.introduce =()=>5555;
const std = new Student("std",1998,"computer science");


console.log(std  instanceof Student  );
console.log(std  instanceof Person  );
Student.prototype.constructor=Student
console.log(std);
console.log(std.calAge());

/////////////////////////////
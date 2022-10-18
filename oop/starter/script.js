'use strict';

var Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car('BMW', 120);
const mecedess = new Car('mecedess', 150);

Car.prototype.accelarte = function () {
  this.speed += 10;
};

Car.prototype.beark = function () {
  this.speed -= 5;
};
bmw.accelarte();
bmw.accelarte();
mecedess.accelarte();
console.log(bmw);
console.log(mecedess);

class CarCal {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelarte = function () {
    this.speed += 10;
    return this;
  };

  beark = function () {
    this.speed -= 5;
  };

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(val) {
    this.speed = val * 1.6;
  }
}

var ford = new CarCal('ford', 120);
console.log(ford);
console.log(ford.speedUS);

ford.accelarte();
ford.accelarte();
console.log(ford);
ford.speedUS = 20;
console.log(ford.speedUS);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
  //  this.speed = speed;
};

EV.prototype = Object.create(Car.prototype);
EV.prototype.chargebatttary = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelarte = function () {
  this.speed += 20;
};

const tesla = new EV('tesla', 120, 23);
tesla.chargebatttary(80);

tesla.accelarte();
tesla.accelarte();
tesla.beark();
console.log(tesla);

// ////////////////////my recap

const CarRec = function (color, speed) {
  this.color = color;
  this.speed = speed;
};

class CarRec2 {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }
  speedUp = function (val) {
    this.speed += val;
  };
}

const objFromCarRecp = new CarRec('red', 50);

CarRec.prototype.speedUp = function (val) {
  this.speed += val;
};

console.log(objFromCarRecp);
objFromCarRecp.speedUp(15);
console.log(objFromCarRecp);

const CarRecBMW = function (color, speed, type) {
  CarRec.call(this, color, speed); // call is immediate execuate
  //CarRec.bind(this,color,speed)()// call is not immedate execuate  and save untill exection
  this.type = type;
};

class CarRecBMW2 extends CarRec2 {
  constructor(color, speed, type) {
    super(color, speed);
    this.type = type;
  }
}
//inhertance
CarRecBMW.prototype = Object.create(CarRec.prototype);

const objFromBMWCarRecp = new CarRecBMW('white', 50, 'BMW');
const objFromBMWCarRecp2 = new CarRecBMW2('white', 50, 'BMW');

console.log(objFromBMWCarRecp);
objFromBMWCarRecp.speedUp(15);
console.log(objFromBMWCarRecp);

console.log(objFromBMWCarRecp2);
objFromBMWCarRecp2.speedUp(15);
console.log(objFromBMWCarRecp2);

////////////////////////////object.create inhertanc

const PersonProto = {
  callAge() {
    return 2022 - this.birthday;
  },
  init(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  },
};

const studentProto = Object.create(PersonProto);
studentProto.init = function (name, birthday, type) {
  PersonProto.init.call(this, name, birthday);
  this.type = type;
};
const moh = Object.create(studentProto);
moh.init('moh', 1984, 'tall');
console.log(moh);
console.log(moh.callAge());
console.log(moh.__proto__);

//////////////////////////another classs

class BankAccount {
  //public fields
  locale = navigator.language;
  // private fields
  #movements = [];
  #pin;
  constructor(owner, curreny, pin) {
    this.owner = owner;
    this.curreny = curreny;
    this.#pin = pin;
    //PRotected property
    // this._movements=[],
    // this.locale= navigator.language
    console.log(`thanks for open new account ${owner}`);
  }
  dposite(val) {
    this.#movements.push(val);

    // this is return for chaining
    return this;
  }
  withdraw(val) {
    this.dposite(-val);
    // this is return for chaining
    return this;
  }

  //private methods
  #approveLoan() {
    return true;
  }
  requestLoan() {
    if (this.#approveLoan) {
      this.dposite(val);
      console.log(`Loan accepted  ${owner}`);
      // this is return for chaining
      return this;
    }
  }
  get movements() {
    return this.#movements;
  }
  //static
  static helper() {
    console.log(
      'this is static appear only for this class not for instances or children'
    );
    //LIKE (BankAccount.helper()
  }
}

const jonse = new BankAccount('jonse', 'USD', 1111);
// jonse.dposite(155);
// jonse.withdraw(55);
console.log(jonse);
console.log(jonse.movements);
BankAccount.helper();
// give error because of static  jonse.helper();
jonse.dposite(155).dposite(155).withdraw(155);
console.log(jonse.movements);

//encapsalsion prevent code from outside to messs code inside
//encapsalsion OUR CODE WILL NOT BREAK IF MAKES CHANGES

// four fields and methods use # for private



class EVClass extends  CarCal {
  #charge;
  constructor (make, speed, charge) {
   super( make, speed);
    this.#charge = charge;
  };
  chargebatttary  (chargeTo) {
    this.#charge = chargeTo;
    return this;
  };
  accelarte = function () {
    this.speed += 20;
    return this;
  };
  
}


const tesla2 = new EVClass('tesla2', 120, 23);
tesla2.chargebatttary(80)
.accelarte()
.accelarte()
.beark();
console.log(tesla2);
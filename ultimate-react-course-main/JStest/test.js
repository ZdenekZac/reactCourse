"use strict";
// console.log("hello script");

// function calcAge(birthYear) {
//   const age = 37;
//   let x = 0;

//   function getX() {
//     if (age < 40) {
//       x = 1;
//       return x++;
//     }
//   }

//   getX();
//   console.log(x);
// }

// calcAge();

// ------ this keyword -----

// console.log(this);

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthyear) => {
//   console.log(2037 - birthyear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const mat = {
//   year: 2017,
// };
// mat.calcAge = jonas.calcAge;

// mat.calcAge();

// const f = jonas.calcAge;
// console.log(f);

// --- REGULAR FUNCTIONS VS ARROW FUNCTIONS ----

var firstName = "mat";

const jonas = {
  firstName: "jonas",
  year: 1991,

  calcAge: function () {
    //    console.log(2037 - this.year);
    // // SOLUTION 1:
    //   const self = this;
    //   const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //SOLUTION 2:
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

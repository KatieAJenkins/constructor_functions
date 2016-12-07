'use strict';

// Warmup today will be to create a constructor for a cup that can be used as various types of cups (hot cups, cold cups, use your imagination). It should have properties and methods. You will be turning this in.

var Cup = function (name, contents, quantity) {
  this.name = name; //properties
  this.contents = contents;
  this.quantity = quantity;
  // this.full = full;

  return {
    name: this.name,
    contents: this.contents,
    quantity: this.quantity,
    full: true,

    drink: function() { //methods
      this.full = false;
    },

    fill: function() {
      this.full = true;
    },

    sellCup: function(){
      this.quantity = this.quantity - 1;
      console.log(`total cups remaining is ${this.quantity}`);
    }
  };
};

var warmCup = new Cup('Warm Cup' , 'hot toddy' , 30);

var coldCup = new Cup('Cold Cup' , 'white russian' , 20);

warmCup.sellCup();
console.log(warmCup);
warmCup.drink();
console.log(warmCup);
warmCup.fill();
console.log(warmCup);

// coldCup.sellCup();

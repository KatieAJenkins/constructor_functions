'use strict';

// Warmup today will be to create a constructor for a cup that can be used as various types of cups (hot cups, cold cups, use your imagination). It should have properties and methods. You will be turning this in.

function Cup (name, contents, quantity) {
  this.name = name;
  this.contents = contents;
  this.quantity = quantity;
}

var hotToddy = new Cup ('Hot Toddy' , 'liquor' , 10);
console.log(hotToddy);

Cup.prototype.sellCup = function sellCup (numberSold) {
  this.quantity = this.quantity - numberSold;
};

hotToddy.sellCup(7);
console.log(hotToddy);

Cup.prototype.changeContents = function changeContents(newContent) {
  this.contents = newContent;
};

hotToddy.changeContents('Beer');
console.log(hotToddy);

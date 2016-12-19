'use strict';
// Write a constructor to model a bank account. Bank accounts belong to an accountHolder, has an accountType and a balance. The accountHolder should be a String holding the customers name, the accountType should be a String as well, the balance should be a Number. None of these fields should be modifiable by an outside entity, instead each should be accessed via setters and getters.
//
// Additionally, make a method called purchase which allows a user to make a purchase and subtract it from their balance. Once you have this working, add additional logic so that a balance cannot go negative and instead the code emits a message like "you can't do that" using console.log.

function Account (accountHolder, accountType, balance) {
  this.accountHolder = accountHolder;
  this.accountType = accountType;
  this.balance = balance;
}

var katieJenkins = new Account ('Katie Jenkins' , 'Savings' , 10);
console.log(katieJenkins);

Account.prototype.purchase = function purchase(costOfItem) {
  this.balance = this.balance - costOfItem;
};

katieJenkins.purchase('4');
console.log(katieJenkins);

//function to create an Object for you
//caps letter means this is a constructor
//'new' keyword calls the function & creates an Object - sets 'this' to that object
//call the function with the 'new' keyword - get back object with the 2 parameters
//prototype adds methods to an original object...the actual movie objects do not have this method assigned to them so they will look to the prototype for this method
//can take this code and create multiple objects

//methods - change the state of a object

function Movie(title, rating){ //constructor function
  this.title = title; //.this is function syntax
  this.rating = rating;
}

var darkCity = new Movie('Dark City' , 'R');
console.log(darkCity);
var princessBride = new Movie('Princess Bride' , 'R');
console.log(princessBride);

//add a method to change the title
function Movie(title, rating){ //constructor function
  this.title = title;
  this.rating = rating;

  this.changeTitle = function changeTitle(newTitle) { //method --> changes parameters only
    this.title = newTitle;
  }
}

var darkCity = new Movie('Dark City' , 'R');
console.log(darkCity);
var princessBride = new Movie('Princess Bride' , 'R');
console.log(princessBride);

princessBride.changeTitle('A New Princess Bride');
console.log(princessBride); will log key value pairs as well as the method (function)

//protype - template for this Object

function Movie(title, rating){ //constructor function
  this.title = title;
  this.rating = rating;
}

  Movie.prototype.changeTitle = function changeTitle(newTitle) {
    this.title = newTitle;

    Movie.prototype.changeRating = function changeRating(newRating) {
      this.rating = newRating;
  }
}

var darkCity = new Movie('Dark City' , 'R');
console.log(darkCity);
var princessBride = new Movie('Princess Bride' , 'R');
console.log(princessBride);

princessBride.changeTitle('A New Princess Bride');
console.log(princessBride); will log key value pairs as well as the method (function)
console.log(Movie.prototype); //will show all the methods on the prototype

console.log(darkCity.__proto__) (dunder proto) //will show all methods on the prototype

// standards
// 1. make sure name of new thing is Capitalieze
// 2. put methods on prototype (Movie.prototype.changeTitle)

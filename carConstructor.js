//1. Create a Car object with the following properties:
  // - model
  // - make
  // - color
  // - year
  // - gasTankFull? default = true

  // Create a function called drive that when invoked, gasTankFull would be false.
  // Create a function called paint that when invoked, the car color is changed.
  //
  // 2. Recreate the same Object using a Constructor Function.
  // Read through this article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

  // var myCar = {};
  //   myCar.model = "Chevy";
  //   myCar.make = "Cavalier";
  //   myCar.color = "red";
  //   myCar.year = 2002;
  //   myCar.gasTankFull = true;
  //
  // console.log(myCar);

  //
  function Car (model, make, color, year, gasTankFull) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.year = year;
    this.gasTankFull = gasTankFull || true;
  }

  ////ES6 Syntax -->
  function Car (model, make, color, year, gasTankFull=true) {
    this.model = model;
    this.make = make;
    this.color = color;
    this.year = year;
    this.gasTankFull = gasTankFull;
    console.log('this : ', this);
    return this; //explicit return --> another way to do this
  }

  var blueCar = new Car ('Chevy' , 'Cavalier' , 'blue', 2002);
  console.log(blueCar);

  var redCar = new Car ('Chevy' , 'Cavalier' , 'red', 2002);
  console.log(redCar);

  //if we don't include Car.prototype, then the function will be global and 'this' won't point anywhere. 'this' is pointing to the Car object & we would have to pass the car we are targeting into this function
  Car.prototype.driveCar = function driveCar () {
    this.gasTankFull = false;
  };
  //
  // Car.prototype.paintCar = function paintCar (color){
  //   this.color = 'green';
  // }
  //
  blueCar.driveCar();
  console.log(blueCar);
  //
  // blueCar.paintCar();
  // console.log(blueCar);

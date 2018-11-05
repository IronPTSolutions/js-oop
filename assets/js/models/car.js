function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.start = function() {
  console.log('Brum Brum');
}

var redCar = new Car('fiat', 'punto', 2018);
redCar.start();


String.prototype.hi = function() {
  return 'Hi! incredule';
}

var name = "Carlos";
console.log(name.hi());


var redCar = {
  brand: 'fiat',
  model: 'punto',
  year: 2018
}
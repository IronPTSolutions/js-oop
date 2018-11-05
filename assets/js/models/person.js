
function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.name + ' ' + this.lastName;
}

Person.prototype.greet = function () {
  return 'Hi I am ' + this.getFullName();
}

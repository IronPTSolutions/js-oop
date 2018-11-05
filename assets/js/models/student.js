function Student(name, lastName, age, notes) {
  Person.call(this, name, lastName, age);
  this.notes = notes;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.avg = function () {
  return this.notes.reduce(function (acc, note, index, notes) {
    acc += note;
    if ( index == notes.length - 1) {
      acc /= notes.length;
    }
    return acc;
  }, 0);
}

Student.prototype.greet = function () {
  return Person.prototype.greet.call(this) + ' and I am student';
}

var student = new Student('Pedro', 'A', 33, [7, 10, 8]);
console.log(student);
console.log(student instanceof Student);
console.log(student instanceof Person);
console.log(student instanceof Object);
console.log(student.greet());
console.log(student.avg());
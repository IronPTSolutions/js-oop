function Teacher(name, lastName, age, skills) {
  Person.call(this, name, lastName, age);
  this.skills = skills || [];
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greet = function () {
  return Person.prototype.greet.call(this) + ' and I am teacher';
}

Teacher.prototype.knowAbout = function (skill) {
  return this.skills.indexOf(skill) !== 1;
}

var teacher = new Teacher('Pedro', 'A', 33, [7, 10, 8]);
console.log(teacher);
console.log(teacher instanceof Student);
console.log(teacher instanceof Person);
console.log(teacher instanceof Object);
console.log(teacher.greet());
console.log(teacher.knowAbout('js'));
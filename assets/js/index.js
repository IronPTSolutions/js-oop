
var company = {
  name: 'IronSoft',
  createdAt: new Date('2018-01-01'),
  contact: {
    city: 'Madrid',
    address: 'C/ Example 1234',
    zipdcode: 28004,
    country: 'Spain'
  },
  employees: [],
  getContactInfo: function () {
    return this.name + '.\n' + this.contact.address + '. ';
  },
  addEmployee: function(employee) {
    console.log(employee.name + ' added')
    this.employees.push(employee);
  }
}

var person = new Person('Ana', undefined, 22, ['js', 'css', 'html']);
person.addSkill('php');

console.log(person);
console.log(person.getFullName());
company.addEmployee(person);

function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

User.prototype.getFullName = function() {
  return this.name + ' ' + this.surname;
};

User.prototype.generateSummary = function() {
  return `${this.fullName} is ${this.age} years old`;
};

let user = new User('Janusz', 'Nosacz', 61);
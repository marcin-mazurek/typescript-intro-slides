const user = {
  name: 'Janusz',
  surname: 'Nosacz',
  age: 61,
  get fullName() {
    return this.name + ' ' + this.surname;
  },
  generateSummary() {
    return `${this.fullName} is ${this.age} years old`;
  }
}

console.log(user.fullName);
console.log(user.generateSummary());
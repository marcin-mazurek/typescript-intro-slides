try {
  someOperation();
} catch (error) {
  console.error(error);
} finally {
  tearDown();
}

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  get fullName() {
    return this.name + this.surname;
  }

  generateSummary() {
    return `${this.fullName} is ${this.age} years old`;
  }
}

let user = new User('Janusz', 'Nosacz', 61);
const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

const user = { name: 'John', surname: 'Doe', age: 30 };
const { surname, age } = user;

console.log(surname); // 'Doe'
console.log(age); // 30

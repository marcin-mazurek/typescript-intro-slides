// Const allows to assign a value only on declaration
const name: string = 'John';
const age: number = 25;
const user: { name: string, age: number } = { name, age };

age++; // TypeError: Assignment to constant variable
const a; // SyntaxError: Missing initializer in const declaration

// ⚠️ But it doesn't make an object immutable
user.age++; // user.age === 26

const items: number[] = [];
items.push(1);
items.push(2); // items is now [1, 2];
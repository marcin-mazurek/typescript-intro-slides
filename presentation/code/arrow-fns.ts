// untyped
const addNumbers = (a, b) => a + b;

// typed
const addNumbers = (a: number, b: number): number => a + b;

// calling the function
console.log(addNumbers(1, 2)); // 3